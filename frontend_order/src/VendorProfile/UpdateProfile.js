import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const UpdateProfile = () => {
  const [vendor, setVendor] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
    foodType: ''
  });
  const { name, email, address, phone, foodType } = vendor;
  const history = useNavigate();

  useEffect(() => {
    // Fetch vendor details
    const token = localStorage.getItem('token');
    axios.get('http://localhost:5000/vendor/profile', { headers: { 'Authorization': `Bearer ${token}` } })
      .then(response => {
        setVendor(response.data);
      })
      .catch(error => {
        console.error('Error fetching vendor profile:', error);
      });
  }, []);

  const handleSave = () => {
    const token = localStorage.getItem('token');
    axios.patch('http://localhost:5000/vendor/profile', {
      name,
      address,
      phone,
      foodType
    }, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => {
      // Assuming the response contains the updated vendor details
      history(`/vendorProfile`);
    })
    .catch(error => {
      console.error('Error updating vendor profile:', error);
    });
  };

  return (
    <div>
      <h2>Vendor Details</h2>
      <form>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setVendor({ ...vendor, name: e.target.value })}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            disabled // Assuming email is not editable
          />
        </div>
        <div>
          <label>Address:</label>
          <textarea
            value={address}
            onChange={(e) => setVendor({ ...vendor, address: e.target.value })}
          />
        </div>
        <div>
          <label>Phone:</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setVendor({ ...vendor, phone: e.target.value })}
          />
        </div>
        <div>
          <label>Food Type:</label>
          <input
            type="text"
            value={foodType}
            disabled // Assuming foodType is not editable
          />
        </div>
        <button type="button" onClick={handleSave}>
          Save
        </button>
      </form>
    </div>
  );
};

export default UpdateProfile;
