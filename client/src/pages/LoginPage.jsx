import {
  Card,
  Form,
  Input,
  Button,
  Typography,
  message
} from 'antd'

import { useNavigate } from 'react-router-dom'

import api from '../services/api'

const { Title } = Typography

const LoginPage = () => {
  const navigate = useNavigate()

  const onFinish = async (values) => {
    try {
      const response =
        await api.post(
          '/auth/login',
          values
        )

      localStorage.setItem(
        'token',
        response.data.data.accessToken
      )

      message.success('Login successful')

      navigate('/dashboard')
    } catch (error) {
      message.error(
        error.response?.data?.message
      )
    }
  }

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#f5f5f5'
      }}
    >
      <Card style={{ width: 400 }}>
        <Title level={3}>
          TransportOps Login
        </Title>

        <Form
          layout="vertical"
          onFinish={onFinish}
        >
          <Form.Item
            label="Email"
            name="email"
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
          >
            <Input.Password />
          </Form.Item>

          <Button
            type="primary"
            htmlType="submit"
            block
          >
            Login
          </Button>
        </Form>
      </Card>
    </div>
  )
}

export default LoginPage