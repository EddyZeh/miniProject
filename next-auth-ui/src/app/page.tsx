"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Student Management System</h1>
      <div style={styles.navButtons}>
        <button onClick={() => router.push("/add")} style={styles.button}>
          ➕ Add Student
        </button>
        <button onClick={() => router.push("/dashboard")} style={styles.button}>
          📋 View Dashboard
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    backgroundColor: "#f5f5f5",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "2rem",
  },
  navButtons: {
    display: "flex",
    gap: "1.5rem",
  },
  button: {
    padding: "1rem 2rem",
    fontSize: "1rem",
    backgroundColor: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
  },
};
