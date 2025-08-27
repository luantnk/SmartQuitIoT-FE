"use client"

import { Spin } from "antd"
import { LoadingOutlined } from "@ant-design/icons"

export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center py-20">
      <Spin 
        indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} 
        size="large"
      />
    </div>
  )
}
