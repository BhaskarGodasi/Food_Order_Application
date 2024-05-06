import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../Stylings/Register.css";
import axios from 'axios';

const Register = () => {
  const [email, setEmail] = useState('');
  const [phoneNum , setPhoneNum] = useState('');
  const [password, setPassword] = useState('');
  const [err , setErr] = useState("")
  const nav = useNavigate()

  const handleRegister = async(e) => {
    try {
      const response = await axios.post('http://localhost:5000/customer/signup', {
        email: email,
        phone: phoneNum,
        password: password
      });
      
      console.log(response.data);
      nav('/')
    } catch (error) {
      // Handle error, maybe show an error message to the user
      console.error('Registration failed:', error.response.data);
      setErr(error)
    }
  };
 

  return (
    <div className="register-container">
    <h2>Register</h2>
    {err && <h1>{err}</h1>}
    <form onSubmit={handleRegister} className="register-form">
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="register-input" />
      <input type='tel' placeholder='Phone Number' value={phoneNum} onChange={(e)=> setPhoneNum(e.target.value)} className= "register-input"/>
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="register-input" />
      <button type="submit" className="register-button">Register</button>
    </form>
    <div className="register-links">
      <Link to="/" className="register-link">Already have an account? Login</Link>
      <Link to="/vendorSignup" className="register-link">Vendor Signup</Link>
    </div>
  </div>
  );
};

export default Register;
