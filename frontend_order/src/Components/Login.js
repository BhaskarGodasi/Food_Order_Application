import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/login.css'
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const nav = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/customer/login', { email, password }); // Assuming your API endpoint for login is '/api/login'
      const data = response.data;
      // Check if login was successful
      if (data.signature) {
        // Store token in local storage or cookies for authentication
        localStorage.setItem('token', data.signature);
       nav('/Home')
      } 
    } catch (error) {
      console.error('Login error:', error);
    
    }
  };
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin} className="login-form">
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="login-input" />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="login-input" />
        <button type="submit" className="login-button">Login</button>
      </form>
      <div className="login-links">
        <Link to="/signup" className="login-link">Don't have an account? Register</Link>
        <Link to="/vendorlogin" className="login-link">Vendor Login</Link>
      </div>
    </div>
  );
};

export default Login;
