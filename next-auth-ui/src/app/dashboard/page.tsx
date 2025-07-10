"use client";

import { useEffect, useState } from "react";

export default function Dashboard() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8081/students")
      .then((res) => res.json())
      .then(setStudents);
  }, []);

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Student Dashboard</h1>
      <table className="student-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s: any, i) => (
            <tr key={i}>
              <td>{s.name}</td>
              <td>{s.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}