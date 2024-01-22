// TodoApp.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo, toggleTodo } from './action';

const TodoApp = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  localStorage.setItem("name", todos );

  const handleAddTodo = (text) => {
    dispatch(addTodo(text));
  };

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  return (
    <div>
      <h1>Todo App</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
             
            >
              {todo.text}
              <button  onClick={() => handleToggleTodo(todo.id)}>  Complete</button>
              
            </span>
            <button onClick={() => handleRemoveTodo(todo.id)}>  Remove</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Add a new todo"
        onKeyDown={(e) => {
          if (e.key === 'Enter' && e.target.value.trim() !== '') {
            handleAddTodo(e.target.value.trim());
            e.target.value = '';
          }
        }}
      />
    </div>
  );
};

export default TodoApp;
