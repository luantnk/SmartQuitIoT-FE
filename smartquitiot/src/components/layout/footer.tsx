"use client"

import { Row, Col, Typography, Space, Divider } from "antd"
import { 
  FacebookOutlined, 
  TwitterOutlined, 
  InstagramOutlined, 
  LinkedinOutlined,
  YoutubeOutlined,
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined
} from "@ant-design/icons"
import Link from "next/link"

const { Title, Paragraph } = Typography

const footerLinks = {
  product: [
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
    { name: "Success Stories", href: "/stories" },
    { name: "Resources", href: "/resources" },
    { name: "API", href: "/api" }
  ],
  support: [
    { name: "Help Center", href: "/help" },
    { name: "Contact Us", href: "/contact" },
    { name: "Community", href: "/community" },
    { name: "FAQ", href: "/faq" },
    { name: "Status", href: "/status" }
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Mission", href: "/mission" },
    { name: "Team", href: "/team" },
    { name: "Careers", href: "/careers" },
    { name: "Press", href: "/press" }
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "GDPR", href: "/gdpr" },
    { name: "Accessibility", href: "/accessibility" }
  ]
}

const socialLinks = [
  { icon: <FacebookOutlined />, href: "#", label: "Facebook" },
  { icon: <TwitterOutlined />, href: "#", label: "Twitter" },
  { icon: <InstagramOutlined />, href: "#", label: "Instagram" },
  { icon: <LinkedinOutlined />, href: "#", label: "LinkedIn" },
  { icon: <YoutubeOutlined />, href: "#", label: "YouTube" }
]

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <Row gutter={[48, 32]}>
          {/* Company Info */}
          <Col xs={24} md={8}>
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl font-bold">S</span>
                </div>
                <Title level={3} className="!mb-0 !text-white">
                  SmartQuit
                </Title>
              </div>
              
              <Paragraph className="!text-gray-300 !mb-0">
                Empowering millions of people to quit smoking and live healthier lives. 
                Join our community and start your smoke-free journey today.
              </Paragraph>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <MailOutlined />
                  <span>support@smartquit.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <PhoneOutlined />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <EnvironmentOutlined />
                  <span>123 Health Street, Wellness City, WC 12345</span>
                </div>
              </div>
            </div>
          </Col>

          {/* Footer Links */}
          <Col xs={24} md={4}>
            <Title level={5} className="!text-white !mb-4">
              Product
            </Title>
            <div className="space-y-2">
              {footerLinks.product.map((link) => (
                <div key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </div>
              ))}
            </div>
          </Col>

          <Col xs={24} md={4}>
            <Title level={5} className="!text-white !mb-4">
              Support
            </Title>
            <div className="space-y-2">
              {footerLinks.support.map((link) => (
                <div key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </div>
              ))}
            </div>
          </Col>

          <Col xs={24} md={4}>
            <Title level={5} className="!text-white !mb-4">
              Company
            </Title>
            <div className="space-y-2">
              {footerLinks.company.map((link) => (
                <div key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </div>
              ))}
            </div>
          </Col>

          <Col xs={24} md={4}>
            <Title level={5} className="!text-white !mb-4">
              Legal
            </Title>
            <div className="space-y-2">
              {footerLinks.legal.map((link) => (
                <div key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </div>
              ))}
            </div>
          </Col>
        </Row>

        <Divider className="!border-gray-700 !my-12" />

        {/* Bottom Section */}
        <Row gutter={[32, 16]} align="middle">
          <Col xs={24} md={12}>
            <Paragraph className="!text-gray-400 !mb-0">
              © 2024 SmartQuit. All rights reserved. Made with ❤️ for a healthier world.
            </Paragraph>
          </Col>
          
          <Col xs={24} md={12} className="text-right">
            <Space size="large">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors text-xl"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </Space>
          </Col>
        </Row>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gray-800 rounded-lg p-8 text-center">
          <Title level={3} className="!text-2xl !font-bold !text-white mb-4">
            Stay Updated
          </Title>
          <Paragraph className="!text-gray-300 !mb-6 max-w-2xl mx-auto">
            Get the latest tips, success stories, and updates from our community. 
            Join thousands of people on their journey to a smoke-free life.
          </Paragraph>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
            />
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
