import React from 'react';

function TodoItem({ task, index, deleteTask, toggleTaskCompletion }) {
  return (
    <li style={{ textDecoration: task.completed ? 'line-through' : '' }}>
      {task.text}
      <button onClick={() => toggleTaskCompletion(index)}>
        {task.completed ? 'Unmark' : 'Complete'}
      </button>
      <button onClick={() => deleteTask(index)}>Delete</button>
    </li>
  );
}

export default TodoItem;
