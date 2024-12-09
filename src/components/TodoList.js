// src/components/TodoList.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos, addTodo, deleteTodo, toggleTodo } from '../actions/todoActions';
import './LoginForm.css'; 

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  const token = useSelector((state) => state.auth.token); // Tocken from Redux

 
  useEffect(() => {
    if (token) {
      dispatch(fetchTodos(token));
    }
  }, [token, dispatch]);

  const handleAddTodo = () => {
    const newTodo = { id: Date.now(), text: 'New Todo', completed: false };
    dispatch(addTodo(newTodo)); 
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id)); 
  };

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id)); 
  };

  return (
    <div className='container'>
      <h2>Todo List</h2>
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
              onClick={() => handleToggleTodo(todo.id)}
            >
              {todo.text}
            </span>
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
