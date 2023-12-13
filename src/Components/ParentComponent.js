import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import UserRegister from "./Pages/UserRegister";
import Login from "./Pages/Login";
import PasswordReset from "./Pages/PasswordReset";
import ProfilePage from "./Pages/ProfilePage";
import LoggedHome from "./Pages/LoggedHome";
import VehicleRegister from "./Pages/VehicleRegister";
import { connect, useSelector } from "react-redux";
import { loginFailure, loginSuccess } from "../redux/actions/userActions";
import { useState } from "react";

function ParentComponent() {
  const[click,setClick]=useState('')

  return (
    <div className="App">
      {click === "home" && <Home />}
      {click === "userregister" && <UserRegister />}
      {click === "login" && <Login />}
      {click === "pwdreset" && <PasswordReset />}
      {click === "vehregister" && <VehicleRegister />}
      {click === "profile" && <ProfilePage />}
      {click === "logged" && <LoggedHome />}

      <button onClick={()=>setClick('home')}>Home</button>
      <button onClick={()=>setClick('userregister')}>UserRegister</button>
      <button onClick={()=>setClick('login')}>Login</button>
      <button onClick={()=>setClick('pwdreset')}>PWDRESET</button>
      <button onClick={()=>setClick('logged')}>LoggedHome</button>
      <button onClick={()=>setClick('vehregister')}>VehRegister</button>
      <button onClick={()=>setClick('profile')}>Profile</button>
    </div>
  );
}

export default ParentComponent;
