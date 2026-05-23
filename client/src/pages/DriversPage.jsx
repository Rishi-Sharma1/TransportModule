import {
  Table,
  Typography,
  Button,
  Modal,
  Form,
  Input,
  InputNumber,
  message,
} from "antd";

import { useEffect, useState } from "react";

import api from "../services/api";
import MainLayout from "../layouts/MainLayout";

const { Title } = Typography;

const columns = [
  {
    title: "Name",
    dataIndex: "name",
  },

  {
    title: "License",
    dataIndex: "licenseNumber",
  },

  {
    title: "Phone",
    dataIndex: "phone",
  },

  {
    title: "Experience",
    dataIndex: "experience",
  },

  {
    title: "Status",
    dataIndex: "status",
  },
];

const DriversPage = () => {
  const [drivers, setDrivers] = useState([]);
  const [open, setOpen] = useState(false);

  const [form] = Form.useForm();

  const fetchDrivers = async () => {
    try {
      const response = await api.get("/drivers");
      setDrivers(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    (async () => {
      await fetchDrivers();
    })();
  }, []);

  const handleCreate = async (values) => {
    try {
      await api.post("/drivers", {
        ...values,

        experience: Number(values.experience),
      });

      message.success("Driver created");

      setOpen(false);

      form.resetFields();

      fetchDrivers();
    } catch (error) {
      message.error(error.response?.data?.message);
    }
  };

  return (
    <MainLayout>
        <div style={{ padding: 24 }}>
        
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 20,
          }}
        >
            <Title level={2}>Drivers</Title>
          <Button type="primary" onClick={() => setOpen(true)}>
            Add Driver
          </Button>
        </div>
        <Table rowKey="_id" columns={columns} dataSource={drivers} />

        <Modal
          title="Create Driver"
          open={open}
          onCancel={() => setOpen(false)}
          footer={null}
        >
          <Form layout="vertical" form={form} onFinish={handleCreate}>
            <Form.Item label="Name" name="name">
              <Input />
            </Form.Item>

            <Form.Item label="License Number" name="licenseNumber">
              <Input />
            </Form.Item>

            <Form.Item label="Phone" name="phone">
              <Input />
            </Form.Item>

            <Form.Item label="Experience" name="experience">
              <InputNumber style={{ width: "100%" }} />
            </Form.Item>

            <Button type="primary" htmlType="submit" block>
              Create
            </Button>
          </Form>
        </Modal>
      </div>
    </MainLayout>
  );
};

export default DriversPage;
