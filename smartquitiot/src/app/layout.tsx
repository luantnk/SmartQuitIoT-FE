import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { QueryProvider } from "@/providers/query-provider"
import { AntdRegistry } from "@ant-design/nextjs-registry"
import { ConfigProvider } from "antd"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SmartQuit - Your Journey to a Smoke-Free Life",
  description: "Join thousands of people who have successfully quit smoking with SmartQuit. Get personalized support, track your progress, and achieve your smoke-free goals.",
  keywords: ["quit smoking", "smoke free", "nicotine addiction", "health", "wellness", "motivation"],
  authors: [{ name: "SmartQuit Team" }],
  viewport: "width=device-width, initial-scale=1",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AntdRegistry>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: "#1890ff",
                colorSuccess: "#52c41a",
                colorWarning: "#faad14",
                colorError: "#ff4d4f",
                colorInfo: "#1890ff",
                borderRadius: 8,
                fontFamily: inter.style.fontFamily,
              },
            }}
          >
            <QueryProvider>
              {children}
            </QueryProvider>
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  )
}
