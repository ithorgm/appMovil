import React, { useState } from "react";

export function Tareas() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  return (
    <div style={{ backgroundColor: "blue", height: "100vh", padding: "20px" }}>
      <h1 style={{ color: "white" }}>Lista de Tareas</h1>
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          value={task}
          onChange={handleInputChange}
          placeholder="Escribe una tarea"
          style={{ padding: "10px", fontSize: "16px" }}
        />
        <button type="submit" style={{ marginLeft: "10px", padding: "10px", fontSize: "16px" }}>
          Agregar
        </button>
      </form>
      <ul style={{ color: "white", marginTop: "20px", listStyleType: "none" }}>
        {tasks.map((task, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tareas;
