"use client"

import { Row, Col, Typography, Card, Button, Tag, Space } from "antd"
import { 
  BookOutlined, 
  PlayCircleOutlined, 
  FileTextOutlined, 
  PictureOutlined,
  DownloadOutlined,
  EyeOutlined
} from "@ant-design/icons"
import Link from "next/link"

const { Title, Paragraph } = Typography

const resources = [
  {
    id: 1,
    title: "Complete Quit Smoking Guide",
    description: "A comprehensive guide covering everything from preparation to long-term maintenance.",
    type: "document",
    category: "beginner",
    format: "PDF",
    size: "2.5 MB",
    views: 12500,
    downloads: 8900,
    tags: ["guide", "beginner", "comprehensive"]
  },
  {
    id: 2,
    title: "Understanding Nicotine Addiction",
    description: "Learn about the science behind nicotine addiction and withdrawal symptoms.",
    type: "video",
    category: "intermediate",
    format: "MP4",
    size: "45 MB",
    views: 8900,
    downloads: 0,
    tags: ["science", "addiction", "withdrawal"]
  },
  {
    id: 3,
    title: "Daily Motivation Calendar",
    description: "A 30-day calendar with daily motivational quotes and activities.",
    type: "infographic",
    category: "beginner",
    format: "PNG",
    size: "1.2 MB",
    views: 15600,
    downloads: 12300,
    tags: ["motivation", "calendar", "daily"]
  },
  {
    id: 4,
    title: "Advanced Coping Strategies",
    description: "Advanced techniques for managing cravings and stress during withdrawal.",
    type: "article",
    category: "advanced",
    format: "HTML",
    size: "N/A",
    views: 6700,
    downloads: 0,
    tags: ["advanced", "coping", "strategies"]
  },
  {
    id: 5,
    title: "Family Support Guide",
    description: "How to support loved ones in their quit smoking journey.",
    type: "document",
    category: "beginner",
    format: "PDF",
    size: "1.8 MB",
    views: 9800,
    downloads: 7200,
    tags: ["family", "support", "relationships"]
  },
  {
    id: 6,
    title: "Health Benefits Timeline",
    description: "Visual timeline showing health improvements after quitting smoking.",
    type: "infographic",
    category: "beginner",
    format: "PNG",
    size: "2.1 MB",
    views: 13400,
    downloads: 9800,
    tags: ["health", "timeline", "benefits"]
  }
]

const getTypeIcon = (type: string) => {
  switch (type) {
    case "video":
      return <PlayCircleOutlined className="text-red-500" />
    case "document":
      return <FileTextOutlined className="text-blue-500" />
    case "article":
      return <BookOutlined className="text-green-500" />
    case "infographic":
      return <PictureOutlined className="text-purple-500" />
    default:
      return <FileTextOutlined className="text-gray-500" />
  }
}

const getCategoryColor = (category: string) => {
  switch (category) {
    case "beginner":
      return "green"
    case "intermediate":
      return "blue"
    case "advanced":
      return "orange"
    default:
      return "default"
  }
}

export function ResourcesSection() {
  return (
    <section className="section soft-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Title level={2} className="section-title mb-4">
            Educational Resources & Guides
          </Title>
          <Paragraph className="section-subtitle">
            Access comprehensive resources, guides, and educational materials to support your quit smoking journey. 
            From beginner basics to advanced strategies, we have everything you need.
          </Paragraph>
        </div>

        <Row gutter={[32, 32]}>
          {resources.map((resource) => (
            <Col xs={24} sm={12} lg={8} key={resource.id}>
              <Card 
                hoverable
                className="h-full card-elevated hover:shadow-xl transition-all duration-300"
                bodyStyle={{ padding: "24px" }}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      {getTypeIcon(resource.type)}
                      <span className="text-sm text-gray-500">{resource.format}</span>
                    </div>
                    <Tag color={getCategoryColor(resource.category)}>
                      {resource.category}
                    </Tag>
                  </div>

                  <Title level={4} className="!text-lg !font-semibold !text-gray-800 !mb-2">
                    {resource.title}
                  </Title>

                  <Paragraph className="!text-gray-600 !mb-4 line-clamp-2">
                    {resource.description}
                  </Paragraph>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>Size: {resource.size}</span>
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center space-x-1">
                        <EyeOutlined />
                        <span>{resource.views.toLocaleString()}</span>
                      </span>
                      {resource.downloads > 0 && (
                        <span className="flex items-center space-x-1">
                          <DownloadOutlined />
                          <span>{resource.downloads.toLocaleString()}</span>
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {resource.tags.slice(0, 3).map((tag, index) => (
                      <Tag key={index}>{tag}</Tag>
                    ))}
                  </div>

                  <div className="flex space-x-2">
                    {resource.type === "video" ? (
                      <Button type="primary" block icon={<PlayCircleOutlined />}>
                        Watch Now
                      </Button>
                    ) : resource.type === "article" ? (
                      <Button type="primary" block icon={<EyeOutlined />}>
                        Read Article
                      </Button>
                    ) : (
                      <Button type="primary" block icon={<DownloadOutlined />}>
                        Download
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="text-center mt-16">
          <Space size="large">
            <Link href="/resources">
              <Button type="primary" size="large">
                Browse All Resources
              </Button>
            </Link>
            <Link href="/resources/request">
              <Button size="large">
                Request Resource
              </Button>
            </Link>
          </Space>
        </div>

        <div className="mt-16 bg-white rounded-lg p-8 shadow-md">
          <Row gutter={[32, 32]} align="middle">
            <Col xs={24} md={16}>
              <Title level={3} className="!text-2xl !font-bold !text-gray-800 mb-4">
                Need Personalized Resources?
              </Title>
              <Paragraph className="!text-lg !text-gray-600 mb-6">
                Our AI-powered system can recommend resources based on your specific situation, 
                quit date, and progress. Get personalized content that matches your journey.
              </Paragraph>
              <Link href="/resources/personalized">
                <Button type="primary" size="large">
                  Get Personalized Recommendations
                </Button>
              </Link>
            </Col>
            <Col xs={24} md={8} className="text-center">
              <div className="w-32 h-32 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
                <BookOutlined className="text-5xl text-emerald-600" />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  )
}
