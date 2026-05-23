import { Card, Col, Row, Typography, Table } from "antd";

import { useEffect, useState } from "react";

import MainLayout from "../layouts/MainLayout";

import api from "../services/api";

const { Title } = Typography;

const DashboardPage = () => {
  const [vehicles, setVehicles] = useState([]);

  const [drivers, setDrivers] = useState([]);

  const [deliveries, setDeliveries] = useState([]);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const [vehiclesRes, driversRes, deliveriesRes] = await Promise.all([
          api.get("/vehicles"),
          api.get("/drivers"),
          api.get("/deliveries"),
        ]);

        setVehicles(vehiclesRes.data.data);

        setDrivers(driversRes.data.data);

        setDeliveries(deliveriesRes.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    (fetchDashboardData(), []);
  });

  const activeDeliveries = deliveries.filter(
    (delivery) => delivery.status === "IN_TRANSIT",
  );
  const columns = [
    {
      title: "Pickup",
      dataIndex: "pickupLocation",
    },

    {
      title: "Drop",
      dataIndex: "dropLocation",
    },

    {
      title: "Status",
      dataIndex: "status",
    },
  ];

  return (
    <MainLayout>
      <div style={{ padding: 24 }}>
        <Title level={2}>Dashboard</Title>

        <Row gutter={16}>
          <Col span={6}>
            <Card title="Vehicles">{vehicles.length}</Card>
          </Col>

          <Col span={6}>
            <Card title="Drivers">{drivers.length}</Card>
          </Col>

          <Col span={6}>
            <Card title="Deliveries">{deliveries.length}</Card>
          </Col>

          <Col span={6}>
            <Card title="Active Deliveries">{activeDeliveries.length}</Card>
          </Col>
        </Row>
        <div style={{ marginTop: 30 }}>
  <Table
    rowKey="_id"
    columns={columns}
    dataSource={deliveries}
  />
</div>
      </div>
    </MainLayout>
  );
};

export default DashboardPage;
