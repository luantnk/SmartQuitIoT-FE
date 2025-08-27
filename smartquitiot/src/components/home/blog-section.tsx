"use client"

import { Row, Col, Typography, Card, Avatar, Tag, Button, Space } from "antd"
import { 
  BookOutlined, 
  HeartOutlined, 
  MessageOutlined, 
  EyeOutlined,
  CalendarOutlined
} from "@ant-design/icons"
import Link from "next/link"

const { Title, Paragraph } = Typography

const blogPosts = [
  {
    id: 1,
    title: "How I Finally Quit After 15 Years of Smoking",
    excerpt: "Sarah's inspiring journey from a pack-a-day smoker to a healthy, smoke-free life. Learn the strategies that worked for her.",
    author: "Sarah Johnson",
    authorAvatar: "SJ",
    category: "story",
    tags: ["success story", "motivation", "tips"],
    publishDate: "2024-01-15",
    readTime: "5 min read",
    likes: 128,
    comments: 24,
    views: 1540,
    featuredImage: "/api/placeholder/400/250"
  },
  {
    id: 2,
    title: "The Science Behind Nicotine Withdrawal",
    excerpt: "Understanding what happens to your body when you quit smoking and how to manage withdrawal symptoms effectively.",
    author: "Dr. Michael Chen",
    authorAvatar: "MC",
    category: "science",
    tags: ["science", "health", "withdrawal"],
    publishDate: "2024-01-12",
    readTime: "7 min read",
    likes: 89,
    comments: 15,
    views: 980,
    featuredImage: "/api/placeholder/400/250"
  },
  {
    id: 3,
    title: "10 Daily Habits That Help You Stay Smoke-Free",
    excerpt: "Simple but effective daily routines that can make a huge difference in maintaining your smoke-free lifestyle.",
    author: "Emily Rodriguez",
    authorAvatar: "ER",
    category: "tips",
    tags: ["daily habits", "lifestyle", "tips"],
    publishDate: "2024-01-10",
    readTime: "4 min read",
    likes: 156,
    comments: 31,
    views: 2100,
    featuredImage: "/api/placeholder/400/250"
  }
]

const getCategoryColor = (category: string) => {
  switch (category) {
    case "story":
      return "blue"
    case "science":
      return "green"
    case "tips":
      return "orange"
    case "motivation":
      return "purple"
    default:
      return "default"
  }
}

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "story":
      return <HeartOutlined />
    case "science":
      return <BookOutlined />
    case "tips":
      return <BookOutlined />
    case "motivation":
      return <HeartOutlined />
    default:
      return <BookOutlined />
  }
}

export function BlogSection() {
  return (
    <section className="section soft-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Title level={2} className="section-title mb-4">
            Community Stories & Tips
          </Title>
          <Paragraph className="section-subtitle">
            Read inspiring success stories, expert advice, and practical tips from our community. 
            Learn from others who have walked the same path.
          </Paragraph>
        </div>

        <Row gutter={[32, 32]}>
          {blogPosts.map((post) => (
            <Col xs={24} md={8} key={post.id}>
              <Card 
                hoverable
                className="h-full card-elevated hover:shadow-xl transition-all duration-300"
                cover={
                  <div className="h-48 bg-gradient-to-br from-emerald-50 to-emerald-100 flex items-center justify-center">
                    <BookOutlined className="text-6xl text-emerald-600" />
                  </div>
                }
                actions={[
                  <div key="likes" className="flex items-center space-x-1 text-gray-500">
                    <HeartOutlined />
                    <span>{post.likes}</span>
                  </div>,
                  <div key="comments" className="flex items-center space-x-1 text-gray-500">
                    <MessageOutlined />
                    <span>{post.comments}</span>
                  </div>,
                  <div key="views" className="flex items-center space-x-1 text-gray-500">
                    <EyeOutlined />
                    <span>{post.views}</span>
                  </div>
                ]}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Tag 
                      color={getCategoryColor(post.category)}
                      icon={getCategoryIcon(post.category)}
                    >
                      {post.category}
                    </Tag>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>

                  <Title level={4} className="!text-xl !font-semibold !text-gray-800 !mb-2 line-clamp-2">
                    {post.title}
                  </Title>

                  <Paragraph className="!text-gray-600 !mb-4 line-clamp-3">
                    {post.excerpt}
                  </Paragraph>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Avatar size={32} className="bg-blue-500 font-semibold">
                        {post.authorAvatar}
                      </Avatar>
                      <div>
                        <div className="text-sm font-medium text-gray-800">
                          {post.author}
                        </div>
                        <div className="text-xs text-gray-500 flex items-center space-x-1">
                          <CalendarOutlined />
                          <span>{post.publishDate}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 2).map((tag, index) => (
                      <Tag key={index}>{tag}</Tag>
                    ))}
                  </div>

                  <Link href={`/blog/${post.id}`}>
                    <Button type="primary" block>
                      Read More
                    </Button>
                  </Link>
                </div>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="text-center mt-16">
          <Space size="large">
            <Link href="/blog">
              <Button type="primary" size="large">
                View All Stories
              </Button>
            </Link>
            <Link href="/blog/write">
              <Button size="large">
                Share Your Story
              </Button>
            </Link>
          </Space>
        </div>
      </div>
    </section>
  )
}
