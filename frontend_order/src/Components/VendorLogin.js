import React, { useState } from 'react';
 // Import useHistory
import "../Stylings/vendorLogin.css";
import { useNavigate } from 'react-router-dom';

const VendorLogin = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const nav = useNavigate(); // Get history object from react-router

  const handleLogin = () => {
    if (email && password) {
      fetch('http://localhost:5000/vendor/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })
      .then(response => response.json())
      .then(data => {
        const { signature } = data;
        console.log(data)
        localStorage.setItem('token', signature );
       
        if(signature){
          nav('/vendorProfile');
        }
      })
      .catch(error => {
        console.error('Login failed:', error);
      });
    } else {
      console.error('Email and password are required');
    }
  };

  return (
    <div className="vendor-login-container">
      <h2>Vendor Login</h2>
      <form onSubmit={e => { e.preventDefault(); handleLogin(); }} className="vendor-login-form">
        <div className="form-group">
          <label>Email:</label>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="form-control" />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="form-control" />
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
};

export default VendorLogin;
