import React from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import './TaskManager.css';

const TaskManager = () => {
  return (
    <div className="task-manager">
      <div className="container">
        <TaskForm />
        <TaskList />
      </div>
    </div>
  );
};

export default TaskManager;