"use client"

import { Row, Col, Typography, Card, Avatar, List, Tag, Button } from "antd"
import { 
  TrophyOutlined, 
  CrownOutlined, 
  StarOutlined,
  FireOutlined,
  DollarOutlined
} from "@ant-design/icons"
import Link from "next/link"

const { Title, Paragraph } = Typography

const leaderboardData = [
  {
    rank: 1,
    name: "Sarah Johnson",
    avatar: "SJ",
    streak: 365,
    moneySaved: 1200,
    achievements: 28,
    points: 2840,
    tier: "gold"
  },
  {
    rank: 2,
    name: "Michael Chen",
    avatar: "MC",
    streak: 298,
    moneySaved: 980,
    achievements: 25,
    points: 2650,
    tier: "silver"
  },
  {
    rank: 3,
    name: "Emily Rodriguez",
    avatar: "ER",
    streak: 245,
    moneySaved: 850,
    achievements: 22,
    points: 2480,
    tier: "bronze"
  },
  {
    rank: 4,
    name: "David Thompson",
    avatar: "DT",
    streak: 198,
    moneySaved: 720,
    achievements: 20,
    points: 2320,
    tier: "regular"
  },
  {
    rank: 5,
    name: "Lisa Wang",
    avatar: "LW",
    streak: 156,
    moneySaved: 650,
    achievements: 18,
    points: 2180,
    tier: "regular"
  }
]

const getTierIcon = (tier: string) => {
  switch (tier) {
    case "gold":
      return <CrownOutlined className="text-yellow-500 text-xl" />
    case "silver":
      return <StarOutlined className="text-gray-400 text-xl" />
    case "bronze":
      return <StarOutlined className="text-orange-500 text-xl" />
    default:
      return <TrophyOutlined className="text-blue-500 text-lg" />
  }
}

const getTierColor = (tier: string) => {
  switch (tier) {
    case "gold":
      return "bg-yellow-100 text-yellow-800 border-yellow-200"
    case "silver":
      return "bg-gray-100 text-gray-800 border-gray-200"
    case "bronze":
      return "bg-orange-100 text-orange-800 border-orange-200"
    default:
      return "bg-blue-100 text-blue-800 border-blue-200"
  }
}

export function LeaderboardSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Title level={2} className="!text-4xl !font-bold !text-gray-900 mb-4">
            Top Achievers This Month
          </Title>
          <Paragraph className="!text-xl !text-gray-600 max-w-3xl mx-auto">
            Be inspired by our community champions who have achieved remarkable success 
            in their quit smoking journey.
          </Paragraph>
        </div>

        <Row gutter={[32, 32]}>
          <Col xs={24} lg={16}>
            <Card 
              title={
                <div className="flex items-center space-x-2">
                  <FireOutlined className="text-orange-500" />
                  <span>Monthly Leaderboard</span>
                </div>
              }
              className="shadow-lg border-0"
            >
              <List
                dataSource={leaderboardData}
                renderItem={(item) => (
                  <List.Item className="py-4">
                    <div className="flex items-center w-full">
                      <div className="flex items-center space-x-4 flex-1">
                        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center font-bold text-lg">
                          {item.rank}
                        </div>
                        
                        <Avatar 
                          size={48} 
                          className="bg-blue-500 font-semibold"
                        >
                          {item.avatar}
                        </Avatar>
                        
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <Title level={5} className="!mb-0 !text-lg">
                              {item.name}
                            </Title>
                            {getTierIcon(item.tier)}
                          </div>
                          
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <span className="flex items-center space-x-1">
                              <FireOutlined className="text-orange-500" />
                              <span>{item.streak} days</span>
                            </span>
                            <span className="flex items-center space-x-1">
                              <DollarOutlined className="text-green-500" />
                              <span>${item.moneySaved}</span>
                            </span>
                            <span className="flex items-center space-x-1">
                              <TrophyOutlined className="text-yellow-500" />
                              <span>{item.achievements} badges</span>
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className="text-2xl font-bold text-blue-600">
                          {item.points}
                        </div>
                        <div className="text-sm text-gray-500">points</div>
                      </div>
                    </div>
                  </List.Item>
                )}
              />
              
              <div className="text-center mt-6">
                <Link href="/leaderboard">
                  <Button type="primary" size="large">
                    View Full Leaderboard
                  </Button>
                </Link>
              </div>
            </Card>
          </Col>

          <Col xs={24} lg={8}>
            <div className="space-y-6">
              <Card 
                title="How to Get on the Leaderboard"
                className="shadow-lg border-0"
              >
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Stay Consistent</h4>
                      <p className="text-gray-600 text-sm">Log your progress daily</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Complete Missions</h4>
                      <p className="text-gray-600 text-sm">Earn points and badges</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Engage with Community</h4>
                      <p className="text-gray-600 text-sm">Share stories and tips</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card 
                title="Your Progress"
                className="shadow-lg border-0"
              >
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                    <TrophyOutlined className="text-3xl text-blue-600" />
                  </div>
                  
                  <div>
                    <div className="text-2xl font-bold text-gray-800">0</div>
                    <div className="text-gray-600">Current Points</div>
                  </div>
                  
                  <Link href="/register">
                    <Button type="primary" block>
                      Start Earning Points
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
