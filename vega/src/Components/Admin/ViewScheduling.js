// ViewScheduling.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ViewScheduling = () => {
  const [employees, setEmployees] = useState([]);
  const [schedule, setSchedule] = useState({
    employeeId: '',
    date: '',
    startTime: '',
    endTime: '',
  });
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    // Fetch employee list for the manager to choose from
    axios.get('http://localhost:8080/api/employees')
      .then(response => {
        setEmployees(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching employees:', error);
      });

    // Fetch existing schedules
    axios.get('http://localhost:8080/api/schedules')
      .then(response => {
        setSchedules(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching schedules:', error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSchedule((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Post the new schedule data
    axios.post('http://localhost:8080/api/schedules', schedule)
      .then(response => {
        setSchedules([...schedules, response.data]); // Add the new schedule to the list
        setSchedule({ employeeId: '', date: '', startTime: '', endTime: '' }); // Clear form
      })
      .catch(error => {
        console.error('There was an error creating the schedule:', error);
      });
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Employee Scheduling</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-3">
            <label htmlFor="employeeId">Employee</label>
            <select
              id="employeeId"
              name="employeeId"
              value={schedule.employeeId}
              onChange={handleChange}
              className="form-control"
              required
            >
              <option value="">Select Employee</option>
              {employees.map((employee) => (
                <option key={employee.id} value={employee.id}>
                  {employee.fullName}
                </option>
              ))}
            </select>
          </div>

          <div className="col-md-3">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={schedule.date}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="col-md-3">
            <label htmlFor="startTime">Start Time</label>
            <input
              type="time"
              id="startTime"
              name="startTime"
              value={schedule.startTime}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="col-md-3">
            <label htmlFor="endTime">End Time</label>
            <input
              type="time"
              id="endTime"
              name="endTime"
              value={schedule.endTime}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
        </div>

        <button type="submit" className="btn btn-primary mt-3">Create Schedule</button>
      </form>

      <h3 className="mt-5">Existing Schedules</h3>
      <div className="table-responsive mt-3">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Employee Name</th>
              <th>Date</th>
              <th>Start Time</th>
              <th>End Time</th>
            </tr>
          </thead>
          <tbody>
            {schedules.length > 0 ? (
              schedules.map((scheduleItem) => (
                <tr key={scheduleItem.id}>
                  <td>{scheduleItem.employee.fullName}</td>
                  <td>{scheduleItem.date}</td>
                  <td>{scheduleItem.startTime}</td>
                  <td>{scheduleItem.endTime}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center">No schedules available.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewScheduling;
