import {
  Table,
  Typography,
  Tag
} from 'antd'

import {
  useEffect,
  useState
} from 'react'

import api from '../services/api'
import MainLayout from '../layouts/MainLayout'

const { Title } = Typography

const columns = [
  {
    title: 'Pickup',
    dataIndex:
      'pickupLocation'
  },

  {
    title: 'Drop',
    dataIndex:
      'dropLocation'
  },

  {
    title: 'Vehicle',
    render: (_, record) =>
      record.assignedVehicle
        ?.registrationNumber
  },

  {
    title: 'Driver',
    render: (_, record) =>
      record.assignedDriver?.name
  },

  {
    title: 'Status',

    render: (_, record) => (
      <Tag color="blue">
        {record.status}
      </Tag>
    )
  }
]

const DeliveriesPage = () => {
  const [deliveries, setDeliveries] =
    useState([])

  useEffect(() => {
    const fetchDeliveries =
        async () => {
      try {
        const response =
          await api.get(
            '/deliveries'
          )

        setDeliveries(
          response.data.data
        )
      } catch (error) {
        console.log(error)
      }
    } 
        fetchDeliveries()},
    [])

    

  return (
    <MainLayout>
      <div style={{ padding: 24 }}>
        <Title level={2}>
          Deliveries
        </Title>

      <Table
        rowKey="_id"
        columns={columns}
        dataSource={deliveries}
      />
    </div>
    </MainLayout>
  )
}

export default DeliveriesPage