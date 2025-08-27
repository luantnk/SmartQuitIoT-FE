"use server"

import { action } from "next-safe-action"
import { z } from "zod"
import type { ActionResponse } from "@/types/actions"
import { authService } from "@/services/auth"
import type { AuthResponse } from "@/services/auth"

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
})

const registerSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
})

export const loginAction = action(loginSchema, async (data): Promise<ActionResponse<AuthResponse>> => {
  try {
    const result = await authService.login(data)
    return {
      success: true,
      data: result,
      message: "Login successful",
    }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Login failed",
    }
  }
})

export const registerAction = action(registerSchema, async (data): Promise<ActionResponse<AuthResponse>> => {
  try {
    const result = await authService.register(data)
    return {
      success: true,
      data: result,
      message: "Registration successful",
    }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Registration failed",
    }
  }
})

export const logoutAction = action(z.object({}), async (): Promise<ActionResponse<void>> => {
  try {
    await authService.logout()
    return {
      success: true,
      message: "Logout successful",
    }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Logout failed",
    }
  }
})
