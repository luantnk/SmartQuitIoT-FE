import { apiService } from "./api"
import type { User } from "@/types/common"
import type { LoginForm, RegisterForm } from "@/types/forms"

export interface AuthResponse {
  user: User
  token: string
}

export class AuthService {
  async login(credentials: LoginForm): Promise<AuthResponse> {
    try {
      return await apiService.post<AuthResponse>("/auth/login", credentials)
    } catch (error) {
      throw new Error("Invalid email or password. Please try again.")
    }
  }

  async register(userData: RegisterForm): Promise<AuthResponse> {
    try {
      return await apiService.post<AuthResponse>("/auth/register", userData)
    } catch (error) {
      throw new Error("Registration failed. Please check your input and try again.")
    }
  }

  async logout(): Promise<void> {
    try {
      await apiService.post("/auth/logout")
    } catch (error) {
      throw new Error("Logout failed. Please try again.")
    }
  }

  async getCurrentUser(): Promise<User> {
    try {
      return await apiService.get<User>("/auth/me")
    } catch (error) {
      throw new Error("Failed to fetch user information. Please try again.")
    }
  }

  async refreshToken(): Promise<{ token: string }> {
    try {
      return await apiService.post<{ token: string }>("/auth/refresh")
    } catch (error) {
      throw new Error("Token refresh failed. Please log in again.")
    }
  }
}

export const authService = new AuthService()
