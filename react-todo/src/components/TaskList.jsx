import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onRemove }) => {
  return (
    <ul className="task-list">
      {tasks.map((task, index) => (
        <TaskItem key={index} task={task} onRemove={() => onRemove(index)} />
      ))}
    </ul>
  );
};

export default TaskList;
