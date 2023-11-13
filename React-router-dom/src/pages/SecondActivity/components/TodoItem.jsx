import React from 'react';

function TodoItem({ task, onDelete }) {
  const isInvalidInput = /[^a-zA-Z\s]/.test(task); // Check for numbers or special characters

  return (
    <li>
      {task}
      <button onClick={onDelete} disabled={isInvalidInput}>
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
