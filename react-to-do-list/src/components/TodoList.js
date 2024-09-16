import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ tasks, deleteTask, toggleTaskCompletion }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <TodoItem
          key={index}
          task={task}
          index={index}
          deleteTask={deleteTask}
          toggleTaskCompletion={toggleTaskCompletion}
        />
      ))}
    </ul>
  );
}

export default TodoList;
