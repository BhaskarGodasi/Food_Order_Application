import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/vendorProfile.css'; // Import CSS file for styling
import { Link } from 'react-router-dom';

function VendorPro() {
  const [vendor, setVendor] = useState(null);
  const [foods, setFoods] = useState([]);
  const [showImageUpload, setShowImageUpload] = useState(false);
  const [images, setImages] = useState(null);

  const handleImageUpload = async () => {
    
    const formData = new FormData();
    formData.append('images', images);
    // Send formData to backend using fetch or axios
    const token = localStorage.getItem('token');
    // Make a POST request to your backend endpoint
    console.log(token)
    const response = await axios.patch('http://localhost:5000/vendor/coverimage', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`
      }
    });

    if(response.data){
        setShowImageUpload(!showImageUpload)
    }
   
  };

//   const handleImageChange = (event) => {
//     setImageFile(event.target.files[0]);
//   };


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

    // Fetch food items
    axios.get('http://localhost:5000/vendor/foods', { headers: { 'Authorization': `Bearer ${token}` } })
      .then(response => {
        setFoods(response.data);
      })
      .catch(error => {
        console.error('Error fetching food items:', error);
      });
  }, []);

  return (
    <div className="vendor-profile-container">
      <div className="vendor-profile">
        {vendor && (
          <div>
            <h2>Vendor Profile</h2>
            <p>Name: {vendor.name}</p>
            <p>Email: {vendor.email}</p>
            {/* Other vendor details */}
            
            <Link to="/update-profile">Update Profile</Link>
            <button onClick={() => setShowImageUpload(!showImageUpload)}>Upload Image</button>
          {showImageUpload && (
            <div>
              <input type="file" onChange={(e) => setImages(e.target.files[0])} name='images' required/>
              <button onClick={handleImageUpload}>Upload</button>
            </div>
          )}
          </div>
        )}
      </div>
      <div className="add-food">
        <h2>Add Food</h2>
        <a href="/add-food" className="add-food-button">Add Food</a>
      </div>
      <div className="food-items">
        <h2>Food Items</h2>
        <div className="food-cards">
          {foods.map(food => (
            <div key={food._id} className="food-card">
              <div className="food-image" style={{ backgroundImage: `url(${food.images[0]})` }}></div>
              <div className="food-details">
                <h3>{food.name}</h3>
                <p>{food.description}</p>
                <p>Price: ${food.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default VendorPro;
