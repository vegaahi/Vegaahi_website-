import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AccessAccountings = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    // Fetch expenses from the backend API
    axios.get('http://localhost:8080/api/expenses')
      .then(response => {
        setExpenses(response.data);
      })
      .catch(error => {
        console.error('Error fetching expenses:', error);
      });
  }, []);

  const handleClaimApproval = (expenseId, status) => {
    // Update expense claim status
    axios.put(`http://localhost:8080/api/expenses/${expenseId}/status`, { status })
      .then(response => {
        setExpenses(expenses.map(exp => 
          exp.id === expenseId ? { ...exp, status } : exp
        ));
      })
      .catch(error => {
        console.error('Error updating claim status:', error);
      });
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Employee Expense Management</h2>

      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Employee Name</th>
              <th>Expense Type</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Claim Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {expenses.length > 0 ? (
              expenses.map((expense) => (
                <tr key={expense.id}>
                  <td>{expense.employee.fullName}</td>
                  <td>{expense.type}</td>
                  <td>${expense.amount}</td>
                  <td>{expense.date}</td>
                  <td>
                    <span 
                      className={`badge ${expense.status === 'Approved' ? 'bg-success' : 
                      expense.status === 'Rejected' ? 'bg-danger' : 'bg-warning'}`}
                    >
                      {expense.status}
                    </span>
                  </td>
                  <td>
                    {expense.status === 'Pending' && (
                      <>
                        <button 
                          className="btn btn-success btn-sm me-2"
                          onClick={() => handleClaimApproval(expense.id, 'Approved')}
                        >
                          Approve
                        </button>
                        <button 
                          className="btn btn-danger btn-sm"
                          onClick={() => handleClaimApproval(expense.id, 'Rejected')}
                        >
                          Reject
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center">No expenses found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AccessAccountings;
