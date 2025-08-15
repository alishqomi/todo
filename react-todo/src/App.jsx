import React, { useState } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => setTasks([...tasks, newTask]);

  const removeTask = (index) =>
    setTasks(tasks.filter((_, i) => i !== index));

  return (
    <div className="App">
      <h1>لیست کارها</h1>
      <TaskInput onAdd={addTask} />
      <TaskList tasks={tasks} onRemove={removeTask} />
    </div>
  );
}

export default App;
