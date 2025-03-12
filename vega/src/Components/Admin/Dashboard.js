import React, { useEffect } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { Chart, ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from "chart.js";
import { Pie, Bar } from "react-chartjs-2";
import { FaUsers, FaFileAlt, FaMoneyCheckAlt, FaEnvelopeOpenText } from "react-icons/fa"; // Import icons

Chart.register(ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const Dashboard = () => {
  useEffect(() => {
    // Additional animations or effects can be added here
  }, []);

  const pieData = {
    labels: ["HR", "Employees", "Payslips", "Offer Letters"],
    datasets: [
      {
        data: [50, 200, 100, 30],
        backgroundColor: ["#007bff", "#17a2b8", "#28a745", "#dc3545"],
        hoverBackgroundColor: ["#0056b3", "#138496", "#218838", "#c82333"],
      },
    ],
  };

  const barData = {
    labels: ["Increment", "Experience Letters", "Offers", "Payslips"],
    datasets: [
      {
        label: "Documents Processed",
        backgroundColor: "#007bff",
        borderColor: "#0056b3",
        borderWidth: 1,
        data: [30, 40, 50, 100],
      },
    ],
  };

  return (
    <Container fluid className="p-4 dashboard-container">
      <h2 className="text-primary mb-4 text-center fade-in">Super Admin Dashboard</h2>
      <Row className="mb-3">
        <Col xs={12} sm={6} md={3}>
          <Card className="dashboard-card border-primary fade-in-up rounded">
            <Card.Body className="text-center ">
              <FaUsers className="dashboard-icon text-primary" size={40} />
              <Card.Title className="text-primary mt-2">View HR</Card.Title>
              <Card.Text className="display-6">50</Card.Text>
              <Card.Text>Active HR managers in the system</Card.Text>
              <div className="progress mt-2">
                <div className="progress-bar bg-primary" style={{ width: "70%" }}></div>
              </div>
              <small className="text-muted">70% active</small>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={3}>
          <Card className="dashboard-card border-info fade-in-up delay-1s rounded">
            <Card.Body className="text-center">
              <FaUsers className="dashboard-icon text-info" size={40} />
              <Card.Title className="text-info mt-2">View Employees</Card.Title>
              <Card.Text className="display-6">200</Card.Text>
              <Card.Text>Registered employees</Card.Text>
              <div className="progress mt-2">
                <div className="progress-bar bg-info" style={{ width: "85%" }}></div>
              </div>
              <small className="text-muted">85% active</small>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={3}>
          <Card className="dashboard-card border-success fade-in-up delay-2s rounded">
            <Card.Body className="text-center">
              <FaMoneyCheckAlt className="dashboard-icon text-success" size={40} />
              <Card.Title className="text-success mt-2">Payslips</Card.Title>
              <Card.Text className="display-6">100</Card.Text>
              <Card.Text>Generated payslips this month</Card.Text>
              <div className="progress mt-2">
                <div className="progress-bar bg-success" style={{ width: "60%" }}></div>
              </div>
              <small className="text-muted">60% processed</small>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={3}>
          <Card className="dashboard-card border-danger fade-in-up delay-3s rounded">
            <Card.Body className="text-center">
              <FaEnvelopeOpenText className="dashboard-icon text-danger" size={40} />
              <Card.Title className="text-danger mt-2">Offer Letters</Card.Title>
              <Card.Text className="display-6">30</Card.Text>
              <Card.Text>Pending offer letters</Card.Text>
              <div className="progress mt-2">
                <div className="progress-bar bg-danger" style={{ width: "40%" }}></div>
              </div>
              <small className="text-muted">40% pending</small>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="charts-container">
        <Col xs={12} md={6} className="d-flex justify-content-center zoom-in">
          <Pie data={pieData} options={{ maintainAspectRatio: false, responsive: true }} width={300} height={300} />
        </Col>
        <Col xs={12} md={6} className="d-flex justify-content-center zoom-in delay-1s">
          <Bar data={barData} options={{ maintainAspectRatio: false, responsive: true }} width={300} height={300} />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;


 