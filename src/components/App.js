import React, { useState } from 'react';
import CategoryFilter from './CategoryFilter';
import NewTaskForm from './NewTaskForm';
import TaskList from './TaskList';

import { CATEGORIES, TASKS } from '../data';
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [taskList, setTaskList] = useState(TASKS);

  const handleTaskDelete = (taskText) => {
    const newTaskList = taskList.filter((task) => {
      return task.text !== taskText;
    });
    setTaskList(newTaskList);
  };

  const handleCategoryFilter = (categoryFiltered) => {
    setCategoryFilter(categoryFiltered);
  };

  const handleFormSubmit = (newTask) => {
    setTaskList([...taskList, newTask]);
  };

  const tasksToDisplay = taskList.filter((task) => {
    if (categoryFilter === 'All') {
      return true;
    } else {
      return task.category === categoryFilter;
    }
  });

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        handleCategoryFilter={handleCategoryFilter}
        selectedCategory={categoryFilter}
        categories={CATEGORIES}
      />
      <NewTaskForm
        categories={CATEGORIES}
        onTaskFormSubmit={handleFormSubmit}
      />
      <TaskList
        tasks={tasksToDisplay}
        handleTaskDelete={handleTaskDelete}
      />
    </div>
  );
}
export default App;
