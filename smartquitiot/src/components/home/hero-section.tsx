"use client"

import { Row, Col, Typography, Button, Space, Card, Statistic } from "antd"
import { 
  PlayCircleOutlined, 
  TrophyOutlined, 
  HeartOutlined, 
  DollarOutlined 
} from "@ant-design/icons"
import Link from "next/link"

const { Title, Paragraph } = Typography

export function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-20">
      <div className="container mx-auto px-6">
        <Row gutter={[48, 32]} align="middle">
          <Col xs={24} lg={14}>
            <div className="space-y-6">
              <Title level={1} className="!text-5xl !font-bold !text-gray-900">
                Your Journey to a{" "}
                <span className="text-blue-600">Smoke-Free Life</span>{" "}
                Starts Here
              </Title>
              
              <Paragraph className="!text-xl !text-gray-600 !leading-relaxed">
                Join thousands of people who have successfully quit smoking with SmartQuit. 
                Get personalized support, track your progress, and achieve your smoke-free goals 
                with our comprehensive platform.
              </Paragraph>

              <Space size="large" wrap>
                <Link href="/register">
                  <Button type="primary" size="large" className="h-12 px-8 text-lg">
                    Start Your Journey
                  </Button>
                </Link>
                <Link href="/how-it-works">
                  <Button 
                    type="text" 
                    size="large" 
                    icon={<PlayCircleOutlined />}
                    className="h-12 px-8 text-lg"
                  >
                    How It Works
                  </Button>
                </Link>
              </Space>

              <div className="pt-8">
                <Row gutter={[24, 16]}>
                  <Col xs={12} sm={6}>
                    <Statistic
                      title="Active Users"
                      value={25000}
                      suffix="+"
                      valueStyle={{ color: "#1890ff", fontSize: "24px" }}
                    />
                  </Col>
                  <Col xs={12} sm={6}>
                    <Statistic
                      title="Success Rate"
                      value={78}
                      suffix="%"
                      valueStyle={{ color: "#52c41a", fontSize: "24px" }}
                    />
                  </Col>
                  <Col xs={12} sm={6}>
                    <Statistic
                      title="Days Average"
                      value={45}
                      suffix=" days"
                      valueStyle={{ color: "#faad14", fontSize: "24px" }}
                    />
                  </Col>
                  <Col xs={12} sm={6}>
                    <Statistic
                      title="Money Saved"
                      value={500}
                      prefix="$"
                      suffix=" avg"
                      valueStyle={{ color: "#52c41a", fontSize: "24px" }}
                    />
                  </Col>
                </Row>
              </div>
            </div>
          </Col>

          <Col xs={24} lg={10}>
            <div className="relative">
              <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
                <div className="text-center space-y-6">
                  <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                    <TrophyOutlined className="text-4xl text-blue-600" />
                  </div>
                  
                  <Title level={3} className="!text-2xl !text-gray-800">
                    Why Choose SmartQuit?
                  </Title>
                  
                  <div className="space-y-4 text-left">
                    <div className="flex items-center space-x-3">
                      <HeartOutlined className="text-green-500 text-xl" />
                      <span className="text-gray-700">Personalized quit plans</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <TrophyOutlined className="text-yellow-500 text-xl" />
                      <span className="text-gray-700">Achievement tracking</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <DollarOutlined className="text-green-500 text-xl" />
                      <span className="text-gray-700">Financial impact monitoring</span>
                    </div>
                  </div>
                  
                  <Link href="/features">
                    <Button type="link" className="text-blue-600">
                      Learn More →
                    </Button>
                  </Link>
                </div>
              </Card>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  )
}
