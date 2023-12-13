// components/ProfilePage.js

import React from 'react';
import { connect, useSelector } from 'react-redux';

const ProfilePage = () => {
 

  const Vehicl=useSelector((state)=>state.auth)
  console.log("Form Profile",Vehicl.userData.firstName)

  return (
    <div>
      <h1>Your Details</h1>
      <input type="text" name="" value={Vehicl.userData.firstName} />
      <input type="text" name="" value={Vehicl.userData.lastName} />
      <input type="text" name="" value={Vehicl.userData.email} />
      <input type="text" name="" value={Vehicl.userData.mobile} />
      <input type="text" name="" value={Vehicl.userData.state} />
      <input type="text" name="" value={Vehicl.userData.district} />
    </div>
  );
};



export default ProfilePage;
