"use server"

import { action } from "next-safe-action"
import { z } from "zod"
import type { ActionResponse } from "@/types/actions"
import { deviceService } from "@/services/devices"
import type { Device, PaginatedResponse } from "@/types/common"

const deviceSchema = z.object({
  name: z.string().min(1, "Device name is required"),
  type: z.enum(["sensor", "actuator", "gateway"]),
  location: z.string().optional(),
  metadata: z.record(z.unknown()).optional(),
})

const paginationSchema = z.object({
  page: z.number().min(1).default(1),
  limit: z.number().min(1).max(100).default(10),
})

export const getDevicesAction = action(paginationSchema, async (data): Promise<ActionResponse<PaginatedResponse<Device>>> => {
  try {
    const result = await deviceService.getDevices(data.page, data.limit)
    return {
      success: true,
      data: result,
    }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to fetch devices",
    }
  }
})

export const getDeviceAction = action(z.object({ id: z.string() }), async (data): Promise<ActionResponse<Device>> => {
  try {
    const result = await deviceService.getDevice(data.id)
    return {
      success: true,
      data: result,
    }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to fetch device",
    }
  }
})

export const createDeviceAction = action(deviceSchema, async (data): Promise<ActionResponse<Device>> => {
  try {
    const result = await deviceService.createDevice(data)
    return {
      success: true,
      data: result,
      message: "Device created successfully",
    }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to create device",
    }
  }
})

export const updateDeviceAction = action(
  z.object({
    id: z.string(),
    data: deviceSchema.partial(),
  }),
  async (data): Promise<ActionResponse<Device>> => {
    try {
      const result = await deviceService.updateDevice(data.id, data.data)
      return {
        success: true,
        data: result,
        message: "Device updated successfully",
      }
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : "Failed to update device",
      }
    }
  }
)

export const deleteDeviceAction = action(z.object({ id: z.string() }), async (data): Promise<ActionResponse<void>> => {
  try {
    await deviceService.deleteDevice(data.id)
    return {
      success: true,
      message: "Device deleted successfully",
    }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to delete device",
    }
  }
})
