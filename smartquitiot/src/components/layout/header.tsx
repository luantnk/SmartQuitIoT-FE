"use client"

import { useState } from "react"
import { Layout, Menu, Button, Avatar, Dropdown, Space, Typography } from "antd"
import { 
  MenuOutlined, 
  UserOutlined, 
  LogoutOutlined, 
  BellOutlined,
  TrophyOutlined,
  BookOutlined,
  TeamOutlined,
  SettingOutlined
} from "@ant-design/icons"
import Link from "next/link"

const { Header: AntHeader } = Layout
const { Title } = Typography

export function Header() {
  const [isLoggedIn] = useState(false) // This would come from auth context

  const menuItems = [
    {
      key: "home",
      label: <Link href="/">Home</Link>,
    },
    {
      key: "dashboard",
      label: <Link href="/dashboard">Dashboard</Link>,
    },
    {
      key: "resources",
      label: <Link href="/resources">Resources</Link>,
    },
    {
      key: "community",
      label: <Link href="/community">Community</Link>,
    },
    {
      key: "about",
      label: <Link href="/about">About</Link>,
    },
  ]

  const userMenuItems = [
    {
      key: "profile",
      label: "My Profile",
      icon: <UserOutlined />,
    },
    {
      key: "dashboard",
      label: "Dashboard",
      icon: <TrophyOutlined />,
    },
    {
      key: "diary",
      label: "Smoking Diary",
      icon: <BookOutlined />,
    },
    {
      key: "community",
      label: "Community",
      icon: <TeamOutlined />,
    },
    {
      key: "settings",
      label: "Settings",
      icon: <SettingOutlined />,
    },
    {
      type: "divider" as const,
    },
    {
      key: "logout",
      label: "Logout",
      icon: <LogoutOutlined />,
    },
  ]

  return (
    <AntHeader className="bg-white shadow-sm border-b border-gray-200 px-6">
      <div className="flex items-center justify-between h-full">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white text-xl font-bold">S</span>
            </div>
            <Title level={3} className="!mb-0 !text-blue-600">
              SmartQuit
            </Title>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <Menu
            mode="horizontal"
            items={menuItems}
            className="border-0 bg-transparent"
          />
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-4">
          {isLoggedIn ? (
            <>
              <Button 
                type="text" 
                icon={<BellOutlined />} 
                className="text-gray-600"
              />
              <Dropdown
                menu={{ items: userMenuItems }}
                placement="bottomRight"
                trigger={["click"]}
              >
                <Avatar 
                  size={40} 
                  icon={<UserOutlined />} 
                  className="cursor-pointer"
                />
              </Dropdown>
            </>
          ) : (
            <Space>
              <Link href="/login">
                <Button type="text">Login</Button>
              </Link>
              <Link href="/register">
                <Button type="primary" size="large">
                  Get Started
                </Button>
              </Link>
            </Space>
          )}

          {/* Mobile Menu Button */}
          <Button
            type="text"
            icon={<MenuOutlined />}
            className="md:hidden"
          />
        </div>
      </div>
    </AntHeader>
  )
}
