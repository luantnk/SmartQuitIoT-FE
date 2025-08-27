import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { QueryProvider } from "@/providers/query-provider"
import { ChakraProviders } from "@/providers/chakra-provider"

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
        <ChakraProviders>
          <QueryProvider>
            {children}
          </QueryProvider>
        </ChakraProviders>
      </body>
    </html>
  )
}
