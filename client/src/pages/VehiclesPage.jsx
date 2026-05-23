import {
  Table,
  Typography,
  Button,
  Modal,
  Form,
  Input,
  Select,
  message,
  Spin
} from 'antd'

import {
  useEffect,
  useState
} from 'react'

import MainLayout from '../layouts/MainLayout'

import api from '../services/api'

const { Title } = Typography

const columns = [
  {
    title: 'Registration',
    dataIndex:
      'registrationNumber'
  },

  {
    title: 'Type',
    dataIndex: 'type'
  },

  {
    title: 'Manufacturer',
    dataIndex: 'manufacturer'
  },

  {
    title: 'Status',
    dataIndex: 'status'
  }
]

const VehiclesPage = () => {
  const [vehicles, setVehicles] =
    useState([])
    const [loading, setLoading] =
  useState(false)

  const [open, setOpen] =
    useState(false)

  const [form] = Form.useForm();

  const fetchVehicles = async () => {
    setLoading(true);
    try {
      const response = await api.get('/vehicles');
      setVehicles(response.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      await fetchVehicles();
    })();
  }, []);

  const handleCreate = async (values) => {
    try {
      await api.post('/vehicles', {
        ...values,
        fuelCapacity: Number(values.fuelCapacity)
      });
      message.success('Vehicle created');
      setOpen(false);
      form.resetFields();
      fetchVehicles();
    } catch (error) {
      message.error(error.response?.data?.message);
    }
  };

  return (
    <MainLayout>
      <Spin spinning={loading}>
        <div style={{ padding: 24 }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: 20
            }}
          >
            <Title level={2}>Vehicles</Title>
            <Button
              type="primary"
              onClick={() => setOpen(true)}
            >
              Add Vehicle
            </Button>
          </div>
          <Table
            loading={loading}
            rowKey="_id"
            columns={columns}
            dataSource={vehicles}
          />
          <Modal
            title="Create Vehicle"
            open={open}
            onCancel={() => setOpen(false)}
            footer={null}
          >
            <Form
              layout="vertical"
              form={form}
              onFinish={handleCreate}
            >
              <Form.Item
                label="Registration Number"
                name="registrationNumber"
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Type"
                name="type"
              >
                <Select
                  options={[
                    {
                      label: 'Truck',
                      value: 'TRUCK'
                    },
                    {
                      label: 'Van',
                      value: 'VAN'
                    },
                    {
                      label: 'Container',
                      value: 'CONTAINER'
                    }
                  ]}
                />
              </Form.Item>
              <Form.Item
                label="Manufacturer"
                name="manufacturer"
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Model"
                name="model"
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Fuel Capacity"
                name="fuelCapacity"
              >
                <Input type="number" />
              </Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                block
              >
                Create
              </Button>
            </Form>
          </Modal>
        </div>
      </Spin>
    </MainLayout>
  );
};

export default VehiclesPage