import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';



const TodoList = ({ tasks, deleteTask, editTask }) => {
  const handleEditClick = (index, task) => {
    const newTask = prompt('Edit task', task);
    if (newTask !== null) {
      editTask(index, newTask);

      // Update tasks in local storage
      const updatedTasks = [...tasks];
      updatedTasks[index] = newTask;
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    }
  };

  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          {task}
          <button className='list_btn' style={{paddingLeft: '20px'}} onClick={() => deleteTask(index)}><FontAwesomeIcon icon={faTrash}/> Delete</button>
          <button className='list_btn' onClick={() => handleEditClick(index, task)}>            <FontAwesomeIcon icon={faEdit} /> Edit
</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
