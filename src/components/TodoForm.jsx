import React, { useState } from 'react';

const TodoForm = ({ addTask }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      addTask(inputValue);
      setInputValue('');

      // Store tasks in local storage
      const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
      localStorage.setItem('tasks', JSON.stringify([...storedTasks, inputValue]));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder='Write the task here' value={inputValue} onChange={handleChange} />
      <button className='add_btn' type="submit">Add Task</button>
    </form>
  );
};

export default TodoForm;
