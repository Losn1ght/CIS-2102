import {Link} from 'react-router-dom'
import React from 'react';
import TodoList from './components/TodoList';

function SecondActivity() {
  return (
    <>
      <div className="App">
          <Link to="/">
            <button>Home</button>  
          </Link>
          <TodoList/>
      </div>
    </>
  )
}

export default SecondActivity
