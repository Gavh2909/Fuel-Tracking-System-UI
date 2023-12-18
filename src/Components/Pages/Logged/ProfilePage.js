// components/ProfilePage.js

import React from 'react';
import { useSelector } from 'react-redux';

const ProfilePage = () => {
 

  const myDetails=useSelector((state)=>state.auth).userData.userInfo
  console.log("Form Profile",myDetails)

  return (
    <div>
      <h1>Your Details</h1>
      <input type="text" name="" defaultValue={myDetails.firstName} />
      <input type="text" name="" defaultValue={myDetails.lastName} />
      <input type="text" name="" defaultValue={myDetails.email} />
      <input type="text" name="" defaultValue={myDetails.mobile} />
      <input type="text" name="" defaultValue={myDetails.state} />
      <input type="text" name="" defaultValue={myDetails.district} />
    </div>
  );
};



export default ProfilePage;
