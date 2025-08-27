import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Device } from "@/types/common"
import { cn } from "@/lib/utils"

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
        return "bg-green-100 text-green-800 border-green-200"
      case "offline":
        return "bg-gray-100 text-gray-800 border-gray-200"
      case "error":
        return "bg-red-100 text-red-800 border-red-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
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
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">{getTypeIcon(device.type)}</span>
            <div>
              <CardTitle className="text-lg">{device.name}</CardTitle>
              <CardDescription className="capitalize">{device.type}</CardDescription>
            </div>
          </div>
          <Badge 
            variant="outline" 
            className={cn("capitalize", getStatusColor(device.status))}
          >
            {device.status}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {device.location && (
          <div className="text-sm text-muted-foreground">
            📍 {device.location}
          </div>
        )}
        
        <div className="text-xs text-muted-foreground">
          Last updated: {new Date(device.updatedAt).toLocaleDateString()}
        </div>
        
        <div className="flex space-x-2">
          {onViewDetails && (
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => onViewDetails(device.id)}
              className="flex-1"
            >
              View Details
            </Button>
          )}
          
          {onEdit && (
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => onEdit(device)}
            >
              Edit
            </Button>
          )}
          
          {onDelete && (
            <Button 
              variant="destructive" 
              size="sm" 
              onClick={() => onDelete(device.id)}
            >
              Delete
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
