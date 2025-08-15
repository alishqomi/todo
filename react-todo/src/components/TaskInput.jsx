import React, { useState } from 'react';

const TaskInput = ({ onAdd }) => {
  const [task, setTask] = useState('');

  const handleAdd = () => {
    if (task.trim() !== '') {
      onAdd(task.trim());
      setTask('');
    }
  };

  const handleEnter = (e) => {
    if (e.key === 'Enter') handleAdd();
  };

  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="کار جدید..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={handleEnter}
      />
      <button onClick={handleAdd}>اضافه کردن</button>
    </div>
  );
};

export default TaskInput;
