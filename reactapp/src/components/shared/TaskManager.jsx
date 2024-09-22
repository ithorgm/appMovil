import React, { useState } from 'react';
import { FaPlus, FaTrashAlt, FaCheck } from 'react-icons/fa'; 
import './TaskManager.css'; 

function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '' && !tasks.some(task => task.text === newTask)) {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    } else {
      alert('La tarea ya existe o está vacía.');
    }
  };

  const handleToggleTask = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="task-manager">
      <h1>Gestión de Tareas</h1>
      <div className="task-input">
        <input
          type="text"
          placeholder="Nueva tarea"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={handleAddTask}>
          <FaPlus /> Agregar Tarea
        </button>
      </div>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className={task.completed ? 'completed' : ''}>
            <span onClick={() => handleToggleTask(index)}>
              {task.completed && <FaCheck />} {task.text}
            </span>
            <button onClick={() => handleDeleteTask(index)}>
              <FaTrashAlt /> Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskManager;
