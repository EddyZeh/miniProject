"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddStudent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const addStudent = async () => {
    if (!name || !email) return;

    const res = await fetch("http://localhost:8081/students");
    const existing = await res.json();
    const emailExists = existing.some((student: any) => student.email === email);

    if (emailExists) {
      setError("A student with this email already exists.");
      return;
    }

    
    await fetch("http://localhost:8081/students", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email }),
    });
    setName("");
    setEmail("");
    setError("");
    router.push("/dashboard");
  };

  return (
    <div className="add-container">
      <div className="form-box">
        <h1 className="form-title">Add Student</h1>
        <div className="form-fields">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-input"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
          />
          {error && <p style={{ color: "red", fontSize: "0.9rem" }}>{error}</p>}
          <button onClick={addStudent} className="form-button">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}