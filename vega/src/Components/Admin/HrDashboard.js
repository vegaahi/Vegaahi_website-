import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const HrDashboard = () => {
  const dashboardData = [
    {
      title: "Employee Management",
      features: [
        "Add, update, and delete employee profiles.",
        "View detailed employee information (e.g., name, designation, department, contact, address).",
        "Categorize employees by department, role, or location.",
        "Track employee status (active, on leave, terminated).",
      ],
    },
    {
      title: "Attendance and Leave Management",
      features: [
        "Monitor daily attendance records.",
        "Track employee check-in and check-out times.",
        "Generate attendance reports (monthly/yearly).",
        "Leave application and approval process.",
        "Leave balance tracking for employees.",
      ],
    },
    {
      title: "Recruitment and Onboarding",
      features: [
        "Manage job postings and applications.",
        "Track recruitment stages (shortlisted, interviewed, hired).",
        "Employee onboarding progress (e.g., document submission, training).",
        "Automate offer letters and onboarding checklists.",
      ],
    },
    {
      title: "Performance Tracking",
      features: [
        "View employee performance metrics (KPIs, goals achieved).",
        "Feedback and review system for appraisals.",
        "Track training and development activities.",
        "Generate performance reports.",
      ],
    },
    {
      title: "Payroll Management",
      features: [
        "Manage salaries, bonuses, and deductions.",
        "View payroll history for employees.",
        "Integration with tax systems and benefits.",
        "Automated payslip generation and distribution.",
      ],
    },
    {
      title: "Analytics and Reporting",
      features: [
        "Visualize employee data using charts and graphs.",
        "Generate reports on hiring trends, attrition rates, and engagement levels.",
        "View real-time updates on metrics like attendance, leave usage, and payroll.",
      ],
    },
    {
      title: "Communication and Notifications",
      features: [
        "Company-wide announcements and notices.",
        "Notifications for birthdays, work anniversaries, and important events.",
        "Automated email and SMS notifications (e.g., leave approval, payroll updates).",
      ],
    },
    {
      title: "Security and Role-Based Access",
      features: [
        "Role-based access control (e.g., HR, Admin, Employee).",
        "Secure data storage and encryption.",
        "Audit logs to track activity within the dashboard.",
      ],
    },
    {
      title: "Integration Capabilities",
      features: [
        "Integration with third-party systems (e.g., payroll software, job boards, Slack).",
        "Sync with calendars for leave and event scheduling.",
        "API for connecting with other platforms.",
      ],
    },
    {
      title: "Employee Self-Service Portal",
      features: [
        "Employees can view and update their profiles.",
        "Access payslips, attendance, and leave details.",
        "Submit leave requests and track approval status.",
      ],
    },
    {
      title: "Customization Options",
      features: [
        "Customize dashboard layout based on user preferences.",
        "Filter and export data (Excel, PDF, etc.).",
        "Configure organizational policies (e.g., leave policies, work hours).",
      ],
    },
    {
      title: "Mobile Accessibility",
      features: [
        "Responsive design for mobile and tablet devices.",
        "Mobile app or progressive web app (PWA) for on-the-go access.",
      ],
    },
  ];

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">HR Dashboard</h1>
      <div className="row">
        {dashboardData.map((section, index) => (
          <div className="col-md-6 mb-4" key={index}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{section.title}</h5>
                <ul className="list-group list-group-flush">
                  {section.features.map((feature, idx) => (
                    <li className="list-group-item" key={idx}>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HrDashboard;