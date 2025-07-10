"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddStudent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();

  const addStudent = async () => {
    if (!name || !email) return;
    await fetch("http://localhost:8081/students", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email }),
    });
    setName("");
    setEmail("");
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
          <button onClick={addStudent} className="form-button">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}