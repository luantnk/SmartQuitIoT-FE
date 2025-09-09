"use client"
import { ConfigProvider, Layout, Menu, Card, Statistic, Table, Tag, Avatar, Input, Row, Col, Typography, Space, Button } from "antd"
import type { ColumnsType } from 'antd/es/table'
import { Area, Pie } from "@ant-design/charts"
import { DashboardOutlined, SettingOutlined, LogoutOutlined, BellOutlined, CalendarOutlined, SearchOutlined, UserOutlined, GiftOutlined, TrophyOutlined, IdcardOutlined, SolutionOutlined } from "@ant-design/icons"

const { Header, Sider, Content } = Layout
const { Title, Text } = Typography

const loyalCustomers = [
    { key: 1, name: "Minh Duc", purchaseCount: 25, mostPurchased: "Premium Package", totalSales: "$3,46,660" },
    { key: 2, name: "Dat Minh", purchaseCount: 18, mostPurchased: "Premium Package", totalSales: "$3,00,000" },
    { key: 3, name: "Hai Linh", purchaseCount: 14, mostPurchased: "Premium Package", totalSales: "$1,50,000" },
    { key: 4, name: "Viet Anh", purchaseCount: 12, mostPurchased: "Premium Package", totalSales: "$1,20,000" },
    { key: 5, name: "Kinh Luan", purchaseCount: 11, mostPurchased: "Premium Package", totalSales: "$1,20,000" },
    { key: 6, name: "Luan Top", purchaseCount: 10, mostPurchased: "Premium Package", totalSales: "$1,20,000" },
]

const customerColumns: ColumnsType<any> = [
    { title: 'SN', dataIndex: 'key', key: 'key' },
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Purchase Count', dataIndex: 'purchaseCount', key: 'purchaseCount' },
    { title: 'Most Purchased', dataIndex: 'mostPurchased', key: 'mostPurchased' },
    { title: 'Total Sales', dataIndex: 'totalSales', key: 'totalSales' },
]

export default function AdminPage() {
  return (
    <ConfigProvider theme={{ token: { colorPrimary: '#7AC555', borderRadius: 10, fontFamily: 'Poppins, sans-serif' } }}>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider width={250} style={{ background: '#7AC555', padding: '12px' }}>
            <div style={{ padding: '12px', textAlign: 'center' }}>
                <Avatar size={64} src="/sundar.png" />
                <Title level={5} style={{ color: 'white', marginTop: 8 }}>Sundar Gurung</Title>
                <Text style={{ color: 'white', opacity: 0.8 }}>sundargurung360@gmail.com</Text>
            </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['dashboard']} style={{ background: '#7AC555', borderRight: 0 }}>
            <Menu.Item key="dashboard" icon={<DashboardOutlined />}>Dashboard</Menu.Item>
            <Menu.Item key="blogs" icon={<SolutionOutlined />}>Manage Blogs</Menu.Item>
            <Menu.Item key="missions" icon={<GiftOutlined />}>Manage Missions</Menu.Item>
            <Menu.Item key="badges" icon={<IdcardOutlined />}>Manage Badges</Menu.Item>
            <Menu.Item key="achievements" icon={<TrophyOutlined />}>Manage Achievements</Menu.Item>
            <Menu.Item key="accounts" icon={<UserOutlined />}>Manage Accounts</Menu.Item>
            <Menu.Item key="packages" icon={<SettingOutlined />}>Membership Packages</Menu.Item>
            <Menu.Item key="settings" icon={<SettingOutlined />}>Settings</Menu.Item>
            <Menu.Item key="logout" icon={<LogoutOutlined />}>Logout</Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ background: '#f4f7f6' }}>
          <Header style={{ background: '#fff', padding: '0 24px', borderBottom: '1px solid #e8e8e8', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Title level={4} style={{ margin: 0 }}>Dashboard</Title>
            <Space align="center">
                <Input prefix={<SearchOutlined />} placeholder="Search your task here..." />
                <Button icon={<CalendarOutlined />} />
                <Button icon={<BellOutlined />} />
                <Text>Tuesday 20/06/2023</Text>
            </Space>
          </Header>
          <Content style={{ padding: 24 }}>
            <Title level={5}>Welcome back, Admin 👋</Title>
            <Row gutter={[24, 24]}>
                <Col xs={24} md={8}>
                    <Card><Statistic title="Total User" value={2000} suffix="+1400 New User" valueStyle={{ color: '#7AC555' }} /></Card>
                </Col>
                <Col xs={24} md={8}>
                    <Card><Statistic title="Total Sales" value={234888} prefix="$" suffix="+1000 Sales" valueStyle={{ color: '#7AC555' }} /></Card>
                </Col>
                <Col xs={24} md={8}>
                    <Card title="Register by Month">
                        <Area data={[{month:'Jan',val:50},{month:'Feb',val:20},{month:'Mar',val:70},{month:'Apr',val:46},{month:'May',val:12},{month:'Jun',val:78}]} xField="month" yField="val" smooth color="#7AC555" height={100} xAxis={{label:null}} yAxis={{label:null}} />
                    </Card>
                </Col>
                <Col xs={24} md={14}>
                    <Card title="Loyal Customer">
                        <Table dataSource={loyalCustomers} columns={customerColumns} pagination={false} />
                    </Card>
                </Col>
                <Col xs={24} md={10}>
                    <Card title="Product Sales Analytics">
                        <Pie data={[{type:'Free Package',value:35},{type:'Premium Package',value:65}]} angleField="value" colorField="type" color={["#b7eb8f","#7AC555"]} radius={0.8} innerRadius={0.7} legend={{position: 'bottom'}} />
                    </Card>
                </Col>
            </Row>
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  )
}
