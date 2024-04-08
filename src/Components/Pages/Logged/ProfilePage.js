// components/ProfilePage.js

import React, { useState } from 'react';
import "./Styles/ProfileUser.css"
import { useSelector } from 'react-redux';

const ProfilePage = () => {
 

  const myDetails=useSelector((state)=>state.auth).userData.userInfo
  const data = useSelector((state) => state.auth).userData.userInfo;

  console.log(data)
  // service for updating the user details
  const[formData,setFormData]=useState({
    firstName: myDetails.firstName,
    lastName: myDetails.lastName,
    email: myDetails.email,
    mobile: myDetails.mobile,
    state: myDetails.state,
    district: myDetails.district,
  })


const handleChange=(e)=>{
  setFormData({...formData,[e.target.name]:e.target.defaultValue})
};

// PUT : http://localhost:8080/user/updateuser/{userID}
const handleSubmit=async()=>{
  console.log(formData)
}
  return (
    <div className='profile'>
      <h1>Your Details</h1>
      <input type="text" onChange={handleChange} defaultValue={formData.firstName}/>
      <input type="text" onChange={handleChange} defaultValue={formData.lastName} />
      <input type="text" onChange={handleChange} defaultValue={formData.email} />
      <input type="text" onChange={handleChange} defaultValue={formData.mobile} />
      <input type="text" onChange={handleChange} defaultValue={formData.state} />
      <input type="text" onChange={handleChange} defaultValue={formData.district} />
      
      <button onClick={handleSubmit}>Update</button>
    </div>
  );
};



export default ProfilePage;
