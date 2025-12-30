import React, { useState } from "react";

function App() {
  const [page, setPage] = useState("home");

  const students = [
    { id: 1, name: "Alice", age: 20, course: "B.Tech" },
    { id: 2, name: "Bob", age: 22, course: "MBA" },
    { id: 3, name: "Charlie", age: 19, course: "B.Sc" },
    { id: 4, name: "Diana", age: 21, course: "B.Com" },
  ];

  const renderPage = () => {
    switch (page) {
      case "home":
        return <h2>Welcome to Student Management Dashboard</h2>;

      case "students":
        return (
          <div>
            <h2>Student List</h2>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Course</th>
                </tr>
              </thead>
              <tbody>
                {students.map((s) => (
                  <tr key={s.id}>
                    <td>{s.id}</td>
                    <td>{s.name}</td>
                    <td>{s.age}</td>
                    <td>{s.course}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );

      case "about":
        return <p>This dashboard helps to manage student data efficiently.</p>;

      default:
        return null;
    }
  };

  return (
    <div style={styles.container}>
      <h1>🎓 Student Management Dashboard</h1>

      <nav style={styles.nav}>
        <button onClick={() => setPage("home")} style={styles.navBtn}>Home</button>
        <button onClick={() => setPage("students")} style={styles.navBtn}>Students</button>
        <button onClick={() => setPage("about")} style={styles.navBtn}>About</button>
      </nav>

      <div style={styles.content}>{renderPage()}</div>
    </div>
  );
}

const styles = {
  container: {
    width: "800px",
    margin: "30px auto",
    fontFamily: "Arial",
    textAlign: "center",
  },
  nav: {
    marginBottom: "20px",
  },
  navBtn: {
    padding: "10px 20px",
    margin: "0 5px",
    cursor: "pointer",
    border: "1px solid #007bff",
    backgroundColor: "#007bff",
    color: "white",
    borderRadius: "5px",
  },
  content: {
    textAlign: "left",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  th: {
    border: "1px solid #ccc",
    padding: "8px",
    background: "#f2f2f2",
  },
  td: {
    border: "1px solid #ccc",
    padding: "8px",
  },
};

export default App;

Main.jsx

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
