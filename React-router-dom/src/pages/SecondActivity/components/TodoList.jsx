import TodoItem from './TodoItem';
import './TodoList.css';
import React, { useState, useEffect } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const isInvalidInput = /[^a-zA-Z\s]/.test(task); // Check for numbers or special characters
    if (isInvalidInput) {
      setError('Error: Numbers or special characters are not allowed.');
    } else {
      setError('');
    }
  }, [task]);

  const addTodo = () => {
    if (task.trim() !== '') {
      setTodos([...todos, task]);
      setTask('');
    }
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <div>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task"
          onKeyPress={(e) => {
            if (e.key === 'Enter' && !error) {
              addTodo();
            }
          }}
        />
        <button onClick={addTodo} disabled={error !== ''} style={{ backgroundColor: error ? 'red' : 'green' }}>
          Add
        </button>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            task={todo}
            onDelete={() => removeTodo(index)}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

