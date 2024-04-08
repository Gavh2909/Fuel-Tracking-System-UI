import { useState } from "react";
import "../Styles/Navbar.css";
const Navbar = () => {
  const [click, setClick] = useState();

  return (
    <div className="nav-home">
      <h3>App</h3>
      <nav>
        <a href="/">FuelTrack</a>
        <a href="/about">About Us</a>
        <a href="/login">Login</a> <a href="/register">Register</a>
      </nav>
    </div>
  );
};

export default Navbar;
