"use client"

import { Row, Col, Typography, Card, Statistic } from "antd"
import { 
  UserOutlined, 
  TrophyOutlined, 
  DollarOutlined, 
  HeartOutlined 
} from "@ant-design/icons"

const { Title } = Typography

const stats = [
  {
    icon: <UserOutlined className="text-4xl text-blue-500" />,
    title: "Active Members",
    value: 25000,
    suffix: "+",
    description: "People actively using SmartQuit",
    color: "from-blue-50 to-blue-100"
  },
  {
    icon: <TrophyOutlined className="text-4xl text-yellow-500" />,
    title: "Success Rate",
    value: 78,
    suffix: "%",
    description: "Of users who stay smoke-free",
    color: "from-yellow-50 to-yellow-100"
  },
  {
    icon: <DollarOutlined className="text-4xl text-green-500" />,
    title: "Money Saved",
    value: 2500000,
    prefix: "$",
    suffix: "+",
    description: "Total money saved by our community",
    color: "from-green-50 to-green-100"
  },
  {
    icon: <HeartOutlined className="text-4xl text-red-500" />,
    title: "Lives Improved",
    value: 15000,
    suffix: "+",
    description: "People who successfully quit",
    color: "from-red-50 to-red-100"
  }
]

export function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Title level={2} className="!text-4xl !font-bold !text-white mb-4">
            SmartQuit by the Numbers
          </Title>
          <Title level={4} className="!text-xl !font-normal !text-blue-100">
            Join thousands of people who have transformed their lives
          </Title>
        </div>

        <Row gutter={[32, 32]}>
          {stats.map((stat, index) => (
            <Col xs={24} sm={12} lg={6} key={index}>
             <Card 
  className={`h-full border-0 shadow-xl bg-gradient-to-br ${stat.color} hover:scale-105 transition-transform duration-300`}
  style={{}}
  styles={{
    body: { padding: "32px 24px", textAlign: "center" }
  }}
>

                <div className="space-y-4">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto shadow-lg">
                    {stat.icon}
                  </div>
                  
                  <Statistic
                    title={stat.title}
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    valueStyle={{ 
                      color: "#1f2937", 
                      fontSize: "32px", 
                      fontWeight: "bold" 
                    }}
                  />
                  
                  <p className="text-gray-600 text-sm font-medium">
                    {stat.description}
                  </p>
                </div>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="text-center mt-16">
          <Title level={3} className="!text-2xl !font-semibold !text-white mb-6">
            Be Part of Our Success Story
          </Title>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Every day, more people join SmartQuit and take control of their health. 
            Start your journey today and become part of our growing community of success stories.
          </p>
        </div>
      </div>
    </section>
  )
}
