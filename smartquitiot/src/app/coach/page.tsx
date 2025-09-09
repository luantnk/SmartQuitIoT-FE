"use client"
import { ConfigProvider, Layout, Menu, Card, Statistic, Table, Tag, Row, Col } from "antd"
import { CalendarOutlined, TeamOutlined, ProfileOutlined } from "@ant-design/icons"

const { Header, Sider, Content, Footer } = Layout

export default function CoachPage() {
  const sessions = [
    { key: 1, user: "Sarah Johnson", next: "Tomorrow 10:00 AM", plan: "Premium", status: "scheduled" },
    { key: 2, user: "Michael Chen", next: "Fri 3:00 PM", plan: "Free", status: "pending" },
    { key: 3, user: "Emily Rodriguez", next: "Mon 1:30 PM", plan: "Premium Plus", status: "completed" },
  ]
  const columns = [
    { title: 'Client', dataIndex: 'user', key: 'user' },
    { title: 'Next Session', dataIndex: 'next', key: 'next' },
    { title: 'Plan', dataIndex: 'plan', key: 'plan' },
    { title: 'Status', dataIndex: 'status', key: 'status', render: (s: string) => (<Tag color={s === 'scheduled' ? '#7AC555' : s === 'completed' ? 'green' : 'default'}>{s}</Tag>) },
  ]

  return (
    <ConfigProvider theme={{ token: { colorPrimary: '#7AC555', borderRadius: 12 } }}>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider theme="light" width={240} style={{ borderRight: '1px solid #e6f4ea' }}>
          <div style={{ height: 64, display: 'flex', alignItems: 'center', padding: '0 16px', fontWeight: 800, color: '#7AC555', fontSize: 18 }}>SmartQuit Coach</div>
          <Menu defaultSelectedKeys={['clients']} mode="inline" items={[
            { key: 'clients', icon: <TeamOutlined />, label: 'Clients' },
            { key: 'sessions', icon: <CalendarOutlined />, label: 'Sessions' },
            { key: 'resources', icon: <ProfileOutlined />, label: 'Resources' },
          ]} />
        </Sider>
        <Layout>
          <Header style={{ background: '#ffffff', borderBottom: '1px solid #e6f4ea' }}>
            <div style={{ maxWidth: 1120, margin: '0 auto', padding: '0 24px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ fontSize: 20, fontWeight: 700 }}>Today’s Schedule</div>
            </div>
          </Header>
          <Content style={{ padding: 24, background: '#f6ffed' }}>
            <div style={{ maxWidth: 1120, margin: '0 auto' }}>
              <Row gutter={[16, 16]}>
                <Col xs={24} md={8}><Card><Statistic title="Active Clients" value={42} valueStyle={{ color: '#7AC555' }} /></Card></Col>
                <Col xs={24} md={8}><Card><Statistic title="Upcoming Sessions" value={6} valueStyle={{ color: '#7AC555' }} /></Card></Col>
                <Col xs={24} md={8}><Card><Statistic title="Success Rate" value={82} suffix="%" valueStyle={{ color: '#7AC555' }} /></Card></Col>

                <Col span={24}>
                  <Card title="Upcoming Sessions">
                    <Table dataSource={sessions} columns={columns as any} pagination={false} />
                  </Card>
                </Col>
              </Row>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>SmartQuit Coach ©2025</Footer>
        </Layout>
      </Layout>
    </ConfigProvider>
  )
}
