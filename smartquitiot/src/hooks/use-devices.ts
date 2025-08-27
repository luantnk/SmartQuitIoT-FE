"use client"

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { deviceService } from "@/services/devices"
import type { Device, PaginatedResponse } from "@/types/common"
import type { DeviceForm } from "@/types/forms"

const DEVICES_QUERY_KEY = "devices"
const DEVICE_QUERY_KEY = "device"

export function useDevices(page = 1, limit = 10) {
  return useQuery({
    queryKey: [DEVICES_QUERY_KEY, page, limit],
    queryFn: () => deviceService.getDevices(page, limit),
    staleTime: 5 * 60 * 1000, // 5 minutes
  })
}

export function useDevice(id: string) {
  return useQuery({
    queryKey: [DEVICE_QUERY_KEY, id],
    queryFn: () => deviceService.getDevice(id),
    enabled: !!id,
    staleTime: 5 * 60 * 1000, // 5 minutes
  })
}

export function useCreateDevice() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: DeviceForm) => deviceService.createDevice(data),
    onSuccess: () => {
      // Invalidate and refetch devices list
      queryClient.invalidateQueries({ queryKey: [DEVICES_QUERY_KEY] })
    },
  })
}

export function useUpdateDevice() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<DeviceForm> }) =>
      deviceService.updateDevice(id, data),
    onSuccess: (updatedDevice) => {
      // Update the specific device in cache
      queryClient.setQueryData([DEVICE_QUERY_KEY, updatedDevice.id], updatedDevice)
      // Invalidate devices list
      queryClient.invalidateQueries({ queryKey: [DEVICES_QUERY_KEY] })
    },
  })
}

export function useDeleteDevice() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (id: string) => deviceService.deleteDevice(id),
    onSuccess: (_, deletedId) => {
      // Remove the deleted device from cache
      queryClient.removeQueries({ queryKey: [DEVICE_QUERY_KEY, deletedId] })
      // Invalidate devices list
      queryClient.invalidateQueries({ queryKey: [DEVICES_QUERY_KEY] })
    },
  })
}

export function useDeviceStatus(id: string) {
  return useQuery({
    queryKey: [DEVICE_QUERY_KEY, id, "status"],
    queryFn: () => deviceService.getDeviceStatus(id),
    enabled: !!id,
    refetchInterval: 30000, // Refetch every 30 seconds
    staleTime: 10000, // 10 seconds
  })
}
