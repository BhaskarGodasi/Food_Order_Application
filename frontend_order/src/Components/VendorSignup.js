import React, { useState } from 'react';
import '../Stylings/VendorSignup.css'
import { useNavigate } from 'react-router-dom';

const VendorSignup = ({ onSignup }) => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    pincode: '',
    foodType: '',
    email: '',
    password: '',
    ownerName: '',
    phone: ''
  });
const nav = useNavigate()
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    fetch('http://localhost:5000/admin/vendor', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
      // Handle successful signup here, maybe show a success message
      console.log('Vendor signed up successfully:', data);
      // Optionally, you can redirect the user to another page
     nav('/vendorlogin')
    })
    .catch(error => {
      
      console.error('Signup failed:', error);
      return error
     
    });
  };

  return (
    <div className="vendor-signup-container">
      <h2>Vendor Signup</h2>
      <form onSubmit={handleSubmit} className="vendor-signup-form">
        <div className="form-group">
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-control" />
        </div>
        <div className="form-group">
          <label>Address:</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} className="form-control" />
        </div>
        <div className="form-group">
          <label>Pincode:</label>
          <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} className="form-control" />
        </div>
        <div className="form-group">
          <label>Food Type:</label>
          <input type="text" name="foodType" value={formData.foodType} onChange={handleChange} className="form-control" />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control" />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} className="form-control" />
        </div>
        <div className="form-group">
          <label>Owner Name:</label>
          <input type="text" name="ownerName" value={formData.ownerName} onChange={handleChange} className="form-control" />
        </div>
        <div className="form-group">
          <label>Phone:</label>
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">Signup</button>
      </form>
    </div>
  );
};

export default VendorSignup;
