// import React, { useEffect, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import "../Stylings/Register.css";
// import axios from 'axios';

// const Register = () => {
//   const [email, setEmail] = useState('');
//   const [phoneNum , setPhoneNum] = useState('');
//   const [password, setPassword] = useState('');
//   const [err , setErr] = useState("")
//   const nav = useNavigate()

//   const handleRegister = async(e) => {
//     try {
//       const response = await axios.post('http://localhost:5000/customer/signup', {
//         email,
//         phone: phoneNum,
//         password
//       });
      
//       console.log(response?.data);
//       nav('/')
//     } catch (error) {
//       // Handle error, maybe show an error message to the user
//       console.error('Registration failed:', error.response.data);
//       setErr(error)
//     }
//     const formData = new FormData();
//     formData.append('email',email)
//     formData.append('phone',phoneNum)
//     formData.append('password',password)
//     // fetch('http://localhost:5000/customer/signup', {
//     //   method: 'POST',
//     //   headers: {
//     //     'Content-Type': 'application/json',
//     //   },
//     //   body: JSON.stringify(formData),
//     // })
//     // .then(response => response.json())
//     // .then(data => {
//     //   // Handle successful signup here, maybe show a success message
//     //   console.log('Custermor signed up successfully:', data);
//     //   // Optionally, you can redirect the user to another page
//     //   nav('/')
//     // })
//     // .catch(error => {
      
//     //   console.error('Signup failed:', error);
//     //   return error
     
//     // });
//   };
 

//   return (
//     <div className="register-container">
//     <h2>Register</h2>
//     {err && <h1>{err}</h1>}
//     <form  className="register-form">
//       <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="register-input" />
//       <input type='tel' placeholder='Phone Number' value={phoneNum} onChange={(e)=> setPhoneNum(e.target.value)} className= "register-input"/>
//       <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="register-input" />
//       <button type="submit" className="register-button" onClick={handleRegister}>Register</button>
//     </form>
//     <div className="register-links">
//       <Link to="/" className="register-link">Already have an account? Login</Link>
//       <Link to="/vendorSignup" className="register-link">Vendor Signup</Link>
//     </div>
//   </div>
//   );
// };

// export default Register;


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Stylings/Register.css';

const Register = () => {
  const [email, setEmail] = useState('');
  const [phoneNum, setPhoneNum] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/customer/signup', {
        email,
        phone: phoneNum,
        password,
      });
      console.log(response?.data);
      navigate('/');
    } catch (error) {
      console.error('Registration failed:', error.response.data);
      setError(error.response.data.message);
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      {error && <h1>{error}</h1>}
      <form className="register-form" onSubmit={handleRegister}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="register-input"
          required
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={phoneNum}
          onChange={(e) => setPhoneNum(e.target.value)}
          className="register-input"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="register-input"
          required
        />
        <button type="submit" className="register-button">
          Register
        </button>
      </form>
      <div className="register-links">
        <Link to="/" className="register-link">
          Already have an account? Login
        </Link>
        <Link to="/vendorSignup" className="register-link">
          Vendor Signup
        </Link>
      </div>
    </div>
  );
};

export default Register;

