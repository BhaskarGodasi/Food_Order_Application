import React, { useEffect, useState } from 'react';
import {  Routes, Route  } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import Navbar from './Components/Navbar';
import HomePage from './Components/Home';
import Login from './Components/Login';
import VendorLogin from './Components/VendorLogin';
import VendorSignup from './Components/VendorSignup';
import Register from './Components/Register';
import AddFood from './VendorProfile/AddFood';
import VendorPro from './VendorProfile/VendorPro';
import UpdateProfile from './VendorProfile/UpdateProfile';
import Restaurtant from './Components/Restaurtant';
import Invaild from './Components/Invaild';



const App = () => {
  const [isAuthenticated, setIsAuthenticated]= useState('')
  const token = localStorage.getItem('token');
 
useEffect(()=>{
 
 
  setIsAuthenticated(token)
},[token])
  return (
    <>
      <Navbar />
      <div className='background-img'>
    <Routes>
    <Route path="/" element={<Login />} />
        <Route path='/signup' element={<Register/>}/>
         <Route path='/vendorSignup' element={<VendorSignup/>}/>
         <Route path='/vendorlogin' element={<VendorLogin/>}/>
   
    
     {isAuthenticated ? (
        <>
          <Route path='/Home' element={<HomePage />} />
          <Route path='/vendorProfile' element={<VendorPro />} />
          <Route path='/update-profile' element={<UpdateProfile />} />
          <Route path="/add-food" element={<AddFood />} />
         <Route path='/restrauants' element={<Restaurtant/>}/>
        </>
      ) : (
        <>
       <Route path='/invlidUser' element={<Invaild/>}/>
          
        </>
       
      )}
        
    </Routes>
    </div>
    </>
  );
};

export default App;
