"use client"

import { Row, Col, Typography, Card, Button, Tag, Space, List } from "antd"
import { 
  CheckOutlined, 
  CrownOutlined, 
  StarOutlined, 
  GiftOutlined,
  RocketOutlined,
  HeartOutlined
} from "@ant-design/icons"
import Link from "next/link"

const { Title, Paragraph } = Typography

const membershipPlans = [
  {
    name: "Free",
    price: 0,
    currency: "$",
    duration: "Forever",
    description: "Perfect for getting started with your quit smoking journey",
    features: [
      "Basic progress tracking",
      "Access to community forums",
      "Basic resources library",
      "Email support",
      "Basic achievement system"
    ],
    buttonText: "Get Started Free",
    buttonType: "default" as const,
    popular: false,
    color: "from-gray-50 to-gray-100"
  },
  {
    name: "Premium",
    price: 9.99,
    currency: "$",
    duration: "per month",
    description: "Enhanced features for serious quitters",
    features: [
      "Everything in Free",
      "Advanced analytics & charts",
      "Personalized quit plans",
      "AI-powered chatbot support",
      "Premium resources library",
      "Priority email support",
      "Advanced achievement system",
      "Progress reports"
    ],
    buttonText: "Start Premium Trial",
    buttonType: "primary" as const,
    popular: true,
    color: "from-blue-50 to-blue-100"
  },
  {
    name: "Premium Plus",
    price: 19.99,
    currency: "$",
    duration: "per month",
    description: "Ultimate support for maximum success",
    features: [
      "Everything in Premium",
      "1-on-1 coach sessions",
      "Custom meal & exercise plans",
      "Family support resources",
      "Advanced health monitoring",
      "Phone support",
      "Exclusive community access",
      "Personal success coach"
    ],
    buttonText: "Start Premium Plus",
    buttonType: "primary" as const,
    popular: false,
    color: "from-purple-50 to-purple-100"
  }
]

const benefits = [
  {
    icon: <RocketOutlined className="text-3xl text-blue-500" />,
    title: "Faster Progress",
    description: "Premium features help you quit faster and stay smoke-free longer"
  },
  {
    icon: <HeartOutlined className="text-3xl text-red-500" />,
    title: "Better Health",
    description: "Advanced tracking and personalized plans improve your health outcomes"
  },
  {
    icon: <CrownOutlined className="text-3xl text-yellow-500" />,
    title: "More Achievements",
    description: "Unlock exclusive badges and rewards as you reach milestones"
  },
  {
    icon: <GiftOutlined className="text-3xl text-green-500" />,
    title: "Extra Support",
    description: "Get personalized help from coaches and AI assistants"
  }
]

export function MembershipSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Title level={2} className="!text-4xl !font-bold !text-gray-900 mb-4">
            Choose Your Success Path
          </Title>
          <Paragraph className="!text-xl !text-gray-600 max-w-3xl mx-auto">
            Start with our free plan and upgrade as you need more support. 
            Every plan is designed to help you succeed in your quit smoking journey.
          </Paragraph>
        </div>

        <Row gutter={[32, 32]} className="mb-20">
          {membershipPlans.map((plan, index) => (
            <Col xs={24} md={8} key={index}>
              <Card 
                className={`h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br ${plan.color} ${
                  plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''
                }`}
                bodyStyle={{ padding: "32px 24px" }}
              >
                {plan.popular && (
                  <div className="text-center mb-4">
                    <Tag color="blue" className="text-sm font-semibold px-3 py-1">
                      <StarOutlined className="mr-1" />
                      Most Popular
                    </Tag>
                  </div>
                )}

                <div className="text-center space-y-4">
                  <Title level={3} className="!text-2xl !font-bold !text-gray-800">
                    {plan.name}
                  </Title>
                  
                  <div className="mb-6">
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-gray-800">
                        {plan.currency}{plan.price}
                      </span>
                      {plan.price > 0 && (
                        <span className="text-lg text-gray-600 ml-1">
                          /{plan.duration}
                        </span>
                      )}
                      {plan.price === 0 && (
                        <span className="text-lg text-gray-600 ml-1">
                          {plan.duration}
                        </span>
                      )}
                    </div>
                    <Paragraph className="!text-gray-600 !mb-0">
                      {plan.description}
                    </Paragraph>
                  </div>

                  <List
                    dataSource={plan.features}
                    renderItem={(feature) => (
                      <List.Item className="!px-0 !py-2">
                        <div className="flex items-center space-x-3">
                          <CheckOutlined className="text-green-500" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      </List.Item>
                    )}
                    className="text-left mb-8"
                  />

                  <Link href={plan.price === 0 ? "/register" : "/membership"}>
                    <Button 
                      type={plan.buttonType} 
                      size="large" 
                      block
                      className="h-12 text-lg font-semibold"
                    >
                      {plan.buttonText}
                    </Button>
                  </Link>

                  {plan.price > 0 && (
                    <p className="text-sm text-gray-500">
                      7-day free trial • Cancel anytime
                    </p>
                  )}
                </div>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="text-center mb-16">
          <Title level={3} className="!text-2xl !font-bold !text-gray-800 mb-6">
            Why Premium Members Succeed More
          </Title>
          <Row gutter={[32, 32]}>
            {benefits.map((benefit, index) => (
              <Col xs={24} sm={12} lg={6} key={index}>
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto shadow-lg">
                    {benefit.icon}
                  </div>
                  <Title level={4} className="!text-lg !font-semibold !text-gray-800">
                    {benefit.title}
                  </Title>
                  <Paragraph className="!text-gray-600 !mb-0">
                    {benefit.description}
                  </Paragraph>
                </div>
              </Col>
            ))}
          </Row>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white">
          <Title level={3} className="!text-3xl !font-bold !text-white mb-4">
            Ready to Transform Your Life?
          </Title>
          <Paragraph className="!text-xl !text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of people who have successfully quit smoking with SmartQuit. 
            Start your journey today with our 7-day free trial.
          </Paragraph>
          <Space size="large">
            <Link href="/register">
              <Button type="primary" size="large" className="h-12 px-8 text-lg bg-white text-blue-600 border-white hover:bg-gray-50">
                Start Free Trial
              </Button>
            </Link>
            <Link href="/membership/compare">
              <Button size="large" className="h-12 px-8 text-lg text-white border-white hover:bg-white hover:text-blue-600">
                Compare Plans
              </Button>
            </Link>
          </Space>
        </div>

        <div className="text-center mt-16">
          <Title level={4} className="!text-lg !font-semibold !text-gray-700 mb-4">
            Questions about membership?
          </Title>
          <Space size="large">
            <Link href="/membership/faq">
              <Button type="link" className="text-blue-600">
                View FAQ
              </Button>
            </Link>
            <Link href="/contact">
              <Button type="link" className="text-blue-600">
                Contact Support
              </Button>
            </Link>
          </Space>
        </div>
      </div>
    </section>
  )
}
