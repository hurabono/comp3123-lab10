// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // react-router-dom 
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import TodoList from './components/TodoList';

const App = () => {
  const [isRegistering, setIsRegistering] = useState(false);  

  const handleRegisterClick = () => {
    setIsRegistering(true);
  };

  const handleBackToLoginClick = () => {
    setIsRegistering(false);
  };

  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={isRegistering ? (
            <>
              <RegisterForm />
              <button onClick={handleBackToLoginClick}> Go back to log in page</button>
            </>
          ) : (
            <LoginForm onRegisterClick={handleRegisterClick} />
          )}
        />
        <Route path="/todos" element={<TodoList />} />  
      </Routes>
    </Router>
  );
};

export default App;
