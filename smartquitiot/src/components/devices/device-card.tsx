import { Card, Typography, Tag, Button, Space } from "antd"
import { Device } from "@/types/common"

interface DeviceCardProps {
  device: Device
  onEdit?: (device: Device) => void
  onDelete?: (deviceId: string) => void
  onViewDetails?: (deviceId: string) => void
}

export function DeviceCard({ device, onEdit, onDelete, onViewDetails }: DeviceCardProps) {
  const getStatusColor = (status: Device["status"]) => {
    switch (status) {
      case "online":
        return "green"
      case "offline":
        return "default"
      case "error":
        return "red"
      default:
        return "default"
    }
  }

  const getTypeIcon = (type: Device["type"]) => {
    switch (type) {
      case "sensor":
        return "📡"
      case "actuator":
        return "⚡"
      case "gateway":
        return "🌐"
      default:
        return "📱"
    }
  }

  return (
    <Card className="hover:shadow-md transition-shadow">
      <div className="p-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <span className="text-2xl">{getTypeIcon(device.type)}</span>
            <div>
              <Typography.Title level={5} className="!mb-0 !text-gray-800">{device.name}</Typography.Title>
              <Typography.Text type="secondary" className="capitalize">{device.type}</Typography.Text>
            </div>
          </div>
          <Tag color={getStatusColor(device.status)} className="capitalize">
            {device.status}
          </Tag>
        </div>

        {device.location && (
          <div className="text-sm text-gray-500 mt-3">📍 {device.location}</div>
        )}

        <div className="text-xs text-gray-400 mt-2">
          Last updated: {new Date(device.updatedAt).toLocaleDateString()}
        </div>

        <Space className="mt-4 w-full" wrap>
          {onViewDetails && (
            <Button onClick={() => onViewDetails(device.id)}>
              View Details
            </Button>
          )}
          {onEdit && (
            <Button onClick={() => onEdit(device)}>
              Edit
            </Button>
          )}
          {onDelete && (
            <Button danger onClick={() => onDelete(device.id)}>
              Delete
            </Button>
          )}
        </Space>
      </div>
    </Card>
  )
}
