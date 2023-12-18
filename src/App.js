import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Login from "./Components/Pages/Login";
import PasswordReset from "./Components/Pages/PasswordReset";
import UserRegister from "./Components/Pages/UserRegister";
import Navbar from "./Components/Pages/Navbar";
import Footer from "./Components/Pages/Footer";
import LandingPg from "./Components/Pages/Logged/LandingPg";

const App = () => (
  <div className="app">
    <LandingPg />
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="register" element={<UserRegister />} />
        <Route path="login" element={<Login />} />
        <Route path="pwdreset" element={<PasswordReset />} />
        <Route path="*" element={<h1>undefined path</h1>} />
      </Routes>
    </BrowserRouter>
    <Footer />
  </div>
);

export default App;
