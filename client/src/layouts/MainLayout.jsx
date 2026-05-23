import {
  Layout,
  Menu,
  Button
} from 'antd'

import {
  DashboardOutlined,
  CarOutlined,
  UserOutlined,
  ShoppingOutlined,
  LogoutOutlined,
  LoginOutlined
} from '@ant-design/icons'

import { Link } from 'react-router-dom'

const { Header, Content } =
  Layout

const MainLayout = ({
  children
}) => {
  const token =
    localStorage.getItem('token')

  const handleLogout = () => {
    localStorage.removeItem('token')

    window.location.href =
      '/login'
  }

  return (
    <Layout
      style={{ minHeight: '100vh' }}
    >
      <Header
        style={{
          display: 'flex',
          justifyContent:
            'space-between',
          alignItems: 'center'
        }}
      >
        <Menu
          theme="dark"
          mode="horizontal"
          style={{
            flex: 1
          }}
        >
          <Menu.Item
            key="1"
            icon={
              <DashboardOutlined />
            }
          >
            <Link to="/dashboard">
              Dashboard
            </Link>
          </Menu.Item>

          <Menu.Item
            key="2"
            icon={<CarOutlined />}
          >
            <Link to="/vehicles">
              Vehicles
            </Link>
          </Menu.Item>

          <Menu.Item
            key="3"
            icon={<UserOutlined />}
          >
            <Link to="/drivers">
              Drivers
            </Link>
          </Menu.Item>

          <Menu.Item
            key="4"
            icon={
              <ShoppingOutlined />
            }
          >
            <Link to="/deliveries">
              Deliveries
            </Link>
          </Menu.Item>
        </Menu>

        {token ? (
          <Button
            danger
            icon={<LogoutOutlined />}
            onClick={handleLogout}
          >
            Logout
          </Button>
        ) : (
          <Button
            type="primary"
            icon={<LoginOutlined />}
          >
            <Link to="/login">
              Login
            </Link>
          </Button>
        )}
      </Header>

      <Content>
        {children}
      </Content>
    </Layout>
  )
}

export default MainLayout