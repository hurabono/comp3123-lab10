// src/actions/todoActions.js
import { SET_TODOS, ADD_TODO, DELETE_TODO, TOGGLE_TODO } from './actionTypes';
import axios from 'axios';

// JWT를 이용한 할 일 목록 가져오기
export const fetchTodos = (token) => {
  return async (dispatch) => {
    try {
      const response = await axios.get('https://api.example.com/todos', {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch(setTodos(response.data));
    } catch (error) {
      console.error('Error fetching todos', error);
    }
  };
};

export const setTodos = (todos) => ({
  type: SET_TODOS,
  payload: todos,
});

export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo,
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id,
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: id,
});
