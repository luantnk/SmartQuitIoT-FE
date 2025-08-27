import { apiService } from "./api"
import type { Device, PaginatedResponse } from "@/types/common"

export class DeviceService {
  async getDevices(page = 1, limit = 10): Promise<PaginatedResponse<Device>> {
    try {
      return await apiService.get<PaginatedResponse<Device>>(
        `/devices?page=${page}&limit=${limit}`
      )
    } catch (error) {
      throw new Error("Failed to fetch devices. Please try again later.")
    }
  }

  async getDevice(id: string): Promise<Device> {
    try {
      return await apiService.get<Device>(`/devices/${id}`)
    } catch (error) {
      throw new Error("Failed to fetch device. Please try again later.")
    }
  }

  async createDevice(deviceData: Omit<Device, "id" | "createdAt" | "updatedAt">): Promise<Device> {
    try {
      return await apiService.post<Device>("/devices", deviceData)
    } catch (error) {
      throw new Error("Failed to create device. Please check your input and try again.")
    }
  }

  async updateDevice(id: string, deviceData: Partial<Device>): Promise<Device> {
    try {
      return await apiService.put<Device>(`/devices/${id}`, deviceData)
    } catch (error) {
      throw new Error("Failed to update device. Please try again later.")
    }
  }

  async deleteDevice(id: string): Promise<void> {
    try {
      await apiService.delete(`/devices/${id}`)
    } catch (error) {
      throw new Error("Failed to delete device. Please try again later.")
    }
  }

  async getDeviceStatus(id: string): Promise<{ status: Device["status"] }> {
    try {
      return await apiService.get<{ status: Device["status"] }>(`/devices/${id}/status`)
    } catch (error) {
      throw new Error("Failed to fetch device status. Please try again later.")
    }
  }
}

export const deviceService = new DeviceService()
