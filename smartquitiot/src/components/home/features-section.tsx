"use client";

import { Row, Col, Typography, Card, Space } from "antd";
import {
  TrophyOutlined,
  BookOutlined,
  TeamOutlined,
  HeartOutlined,
  DollarOutlined,
  RobotOutlined,
  BarChartOutlined,
  BellOutlined,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const features = [
  {
    icon: <TrophyOutlined className="text-4xl text-yellow-500" />,
    title: "Achievement Tracking",
    description:
      "Earn badges and track your progress with our comprehensive achievement system.",
    color: "from-yellow-50 to-orange-50",
  },
  {
    icon: <BookOutlined className="text-4xl text-blue-500" />,
    title: "Smoking Diary",
    description:
      "Log your daily progress, track cravings, and monitor your health improvements.",
    color: "from-blue-50 to-indigo-50",
  },
  {
    icon: <TeamOutlined className="text-4xl text-green-500" />,
    title: "Community Support",
    description:
      "Connect with others on the same journey and share your success stories.",
    color: "from-green-50 to-emerald-50",
  },
  {
    icon: <HeartOutlined className="text-4xl text-red-500" />,
    title: "Health Monitoring",
    description:
      "Track your health improvements and see the benefits of quitting smoking.",
    color: "from-red-50 to-pink-50",
  },
  {
    icon: <DollarOutlined className="text-4xl text-emerald-500" />,
    title: "Financial Tracking",
    description: "See how much money you&apos;re saving by quitting smoking.",
    color: "from-emerald-50 to-teal-50",
  },
  {
    icon: <RobotOutlined className="text-4xl text-purple-500" />,
    title: "AI Chatbot",
    description:
      "Get personalized advice and support from our AI-powered assistant.",
    color: "from-purple-50 to-violet-50",
  },
  {
    icon: <BarChartOutlined className="text-4xl text-cyan-500" />,
    title: "Progress Analytics",
    description:
      "Visualize your journey with detailed charts and progress tracking.",
    color: "from-cyan-50 to-blue-50",
  },
  {
    icon: <BellOutlined className="text-4xl text-orange-500" />,
    title: "Smart Notifications",
    description:
      "Receive motivational reminders and celebrate your milestones.",
    color: "from-orange-50 to-red-50",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Title level={2} className="!text-4xl !font-bold !text-gray-900 mb-4">
            Everything You Need to Succeed
          </Title>
          <Paragraph className="!text-xl !text-gray-600 max-w-3xl mx-auto">
            SmartQuit provides comprehensive tools and features to support your
            quit smoking journey. From tracking progress to community support,
            we&apos;ve got you covered.
          </Paragraph>
        </div>

        <Row gutter={[32, 32]}>
          {features.map((feature, index) => (
            <Col xs={24} sm={12} lg={6} key={index}>
              <Card
                className={`h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br ${feature.color}`}
                styles={{
                  body: { padding: "24px" },
                }}
              >
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto shadow-md">
                    {feature.icon}
                  </div>

                  <Title
                    level={4}
                    className="!text-lg !font-semibold !text-gray-800 !mb-2"
                  >
                    {feature.title}
                  </Title>

                  <Paragraph className="!text-gray-600 !mb-0">
                    {feature.description}
                  </Paragraph>
                </div>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="text-center mt-16">
          <Title
            level={3}
            className="!text-2xl !font-semibold !text-gray-800 mb-6"
          >
            Ready to Start Your Journey?
          </Title>
          <Space size="large">
            <a
              href="/register"
              className="text-blue-600 hover:text-blue-800 font-semibold text-lg"
            >
              Get Started Now →
            </a>
            <a
              href="/features"
              className="text-gray-600 hover:text-gray-800 font-semibold text-lg"
            >
              Learn More →
            </a>
          </Space>
        </div>
      </div>
    </section>
  );
}
