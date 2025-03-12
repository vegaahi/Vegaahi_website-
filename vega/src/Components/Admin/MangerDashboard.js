import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { PieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, LineChart, Line, ResponsiveContainer, Legend } from 'recharts';
import '../../css/MangerDashboard.css';

const MangerDashboard = () => {
  // Sample data for pie chart
  const pieData = [
    { name: 'Completed', value: 75 },
    { name: 'Pending', value: 25 },
  ];

  // Sample data for bar chart
  const barData = [
    { name: 'Jan', uv: 4000, pv: 2400 },
    { name: 'Feb', uv: 3000, pv: 1398 },
    { name: 'Mar', uv: 2000, pv: 9800 },
    { name: 'Apr', uv: 2780, pv: 3908 },
    { name: 'May', uv: 1890, pv: 4800 },
  ];

  // Sample data for line chart
  const lineData = [
    { name: 'Jan', value: 4000 },
    { name: 'Feb', value: 3000 },
    { name: 'Mar', value: 2000 },
    { name: 'Apr', value: 2780 },
    { name: 'May', value: 1890 },
  ];

  // Colors for pie chart
  const COLORS = ['#0088FE', '#00C49F'];

  return (
    <div className="p-4">
      <Row>
        <Col md={3}>
          <Card className="dashboard-card">
            <Card.Body>
              <Card.Title className="card-title">Employee Details</Card.Title>
              <div className="chart-container">
                <PieChart width={200} height={200}>
                  <Pie
                    data={pieData}
                    cx={100}
                    cy={100}
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {pieData.map((_entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="dashboard-card">
            <Card.Body>
              <Card.Title className="card-title">Work Status</Card.Title>
              <div className="chart-container">
                <PieChart width={200} height={200}>
                  <Pie
                    data={pieData}
                    cx={100}
                    cy={100}
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {pieData.map((_entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="dashboard-card">
            <Card.Body>
              <Card.Title className="card-title">Scheduling</Card.Title>
              <div className="chart-container">
                <PieChart width={200} height={200}>
                  <Pie
                    data={pieData}
                    cx={100}
                    cy={100}
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {pieData.map((_entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="dashboard-card">
            <Card.Body>
              <Card.Title className="card-title">Payments</Card.Title>
              <div className="chart-container">
                <PieChart width={200} height={200}>
                  <Pie
                    data={pieData}
                    cx={100}
                    cy={100}
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {pieData.map((_entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
      {/* Bar Chart and Line Chart below the cards */}
      <Row className="mt-4">
        <Col md={6}>
          <Card className="dashboard-card">
            <Card.Body>
              <Card.Title className="card-title">Monthly Bar Performance</Card.Title>
              <div className="chart-container">
                <BarChart width={500} height={300} data={barData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="pv" fill="#8884d8" />
                  <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="dashboard-card">
            <Card.Body>
              <Card.Title className="card-title">Monthly Line Performance</Card.Title>
              <div className="chart-container">
                <LineChart width={500} height={300} data={lineData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="value" stroke="#8884d8" />
                </LineChart>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default MangerDashboard;
