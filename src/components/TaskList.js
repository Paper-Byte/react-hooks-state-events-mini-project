import React from 'react';
import Task from './Task';

function TaskList({ tasks, handleTaskDelete, filteredCategory }) {
  return (
    <div className="tasks">
      {tasks.map((task, index) => {
        return (
          <Task
            key={index}
            text={task.text}
            category={task.category}
            handleTaskDelete={handleTaskDelete}
          />
        );
      })}
    </div>
  );
}

export default TaskList;
