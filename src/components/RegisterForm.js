import React, { useState } from 'react';
import axios from 'axios';
import './LoginForm.css'; 

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      // proxy local host settings
      const response = await axios.post('http://localhost:5000/register', { email, password });

      alert('sign up successful!');
    } catch (error) {
      console.error('sign up failed :', error);
      alert('sign up failed,');
    }
  };

  return (
    <div className='container'>
      <h2>sign up</h2>
      <form onSubmit={handleRegister}>
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
        <button type="submit">sign up</button>
      </form>
    </div>
  );
};

export default RegisterForm;
