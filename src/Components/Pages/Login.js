import { useState } from "react";
import "../Styles/Login.css";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      console.log(formData);
    } catch (error) {
      console.log("Error Registering");
    }
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <input
        type="text"
        value={formData.email}
        name="email"
        onChange={handleChange}
        placeholder="Email"
      />

      <input
        type="text"
        value={formData.password}
        name="password"
        onChange={handleChange}
        placeholder="Password"
      />

      <button onClick={handleSubmit}>Login</button>
      <label>
        <a href="/register">Sign Up</a>
        <a href="/pwdreset">forgot password?</a>
      </label>
    </div>
  );
}
