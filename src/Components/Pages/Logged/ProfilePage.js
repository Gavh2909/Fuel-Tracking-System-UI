// components/ProfilePage.js

import React from 'react';
import { useSelector } from 'react-redux';

const ProfilePage = () => {
 

  const myDetails=useSelector((state)=>state.auth).userData.userInfo
  console.log("Form Profile",myDetails)

  return (
    <div>
      <h1>Your Details</h1>
      <input type="text" name="" value={myDetails.firstName} />
      <input type="text" name="" value={myDetails.lastName} />
      <input type="text" name="" value={myDetails.email} />
      <input type="text" name="" value={myDetails.mobile} />
      <input type="text" name="" value={myDetails.state} />
      <input type="text" name="" value={myDetails.district} />
    </div>
  );
};



export default ProfilePage;
