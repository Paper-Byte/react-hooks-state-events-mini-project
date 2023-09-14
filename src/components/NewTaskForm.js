import React, { useState } from 'react';

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [newTaskInput, setNewTaskInput] = useState('');
  const [newTaskCategory, setNewTaskCategory] = useState('Code');

  const categoriesToDisplay = categories.filter((category) => {
    return category !== 'All';
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    const newTask = {
      text: newTaskInput,
      category: newTaskCategory,
    };
    onTaskFormSubmit(newTask);
    setNewTaskInput('');
    setNewTaskCategory('Code');
  };
  const handleTaskName = (event) => {
    setNewTaskInput(event.target.value);
  };

  const handleTaskCategory = (event) => {
    setNewTaskCategory(event.target.value);
  };
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          onChange={handleTaskName}
          value={newTaskInput}
        />
      </label>
      <label>
        Category
        <select name="category" onChange={handleTaskCategory}>
          {categoriesToDisplay.map((category) => {
            return <option key={category}>{category}</option>;
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
