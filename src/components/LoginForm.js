import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../actions/authActions';
import axios from 'axios';  // Axios
import { useNavigate } from 'react-router-dom';  // react-router-dom 
import './LoginForm.css';

const LoginForm = ({ onRegisterClick }) => {
  const [email, setEmail] = useState('');  
  const [password, setPassword] = useState('');  
  const dispatch = useDispatch();  
  const navigate = useNavigate(); 

  // log in fucntion
  const handleLogin = async (e) => {
    e.preventDefault();  // prevent reload

    try {
      const response = await axios.post('http://localhost:5000/login', { email, password });

      //JWT save token in storage
      localStorage.setItem('token', response.data.token);

      // Redux JWT token save
      dispatch(loginUser(response.data.token));

    
      navigate('/todos');  // move to do after log in
    } catch (error) {
      console.error('Login error:', error);
      alert('login failed please try again');
    }
  };

  return (
    <div className='container'>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}  
        />
        <button type="submit">Login</button>
        {/* sign up button */}
      <button onClick={onRegisterClick}>Sign up </button>
      </form>
    </div>
  );
};

export default LoginForm;
