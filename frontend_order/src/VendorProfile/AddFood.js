import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests
import '../styles/addfood.css';
import { useNavigate } from 'react-router-dom';

const AddFood = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [foodType, setFoodType] = useState('');
  const [readyTime, setReadyTime] = useState('');
  const [price, setPrice] = useState('');
  const [images, setImages] = useState(null);

  const nav = useNavigate()
  // useEffect(() => {
  //   // Fetch token from local storage and set it in axios headers
  //   const token = localStorage.getItem('token');
  //   if (token) {
  //     axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  //   } else {
  //     // Handle the case where token is not present in localStorage
  //   }
  // }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create form data object
    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('category', category);
    formData.append('foodType', foodType);
    formData.append('readyTime', readyTime);
    formData.append('price', price);
    formData.append('images', images);

    try {
      const token = localStorage.getItem('token');
      // Make a POST request to your backend endpoint
      console.log(token)
      const response = await axios.post('http://localhost:5000/vendor/food', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`
        }
      });
      
      console.log(response.data);
      nav('/vendorProfile')
      // Handle success
      // You might want to display a success message or redirect the user
    } catch (error) {
      // Handle error
      console.error('Error adding food:', error);
      // You might want to display an error message to the user
    }
  };

  return (
    <div className="add-food-form">
      <h2>Add Food</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Category:</label>
          <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Food Type:</label>
          <input type="text" value={foodType} onChange={(e) => setFoodType(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Ready Time:</label>
          <input type="text" value={readyTime} onChange={(e) => setReadyTime(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Price:</label>
          <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Image:</label>
          <input type="file" onChange={(e) => setImages(e.target.files[0])} name='images' required />
        </div>
        <button type="submit">Add Food</button>
      </form>
    </div>
  );
};

export default AddFood;
