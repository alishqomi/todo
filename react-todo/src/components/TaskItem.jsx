import React from 'react';

const TaskItem = ({ task, onRemove }) => {
  return (
    <li className="task-item">
      <span>{task}</span>
      <button onClick={onRemove}>حذف</button>
    </li>
  );
};

export default TaskItem;
