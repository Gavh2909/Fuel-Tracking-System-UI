import axios from "axios";
import "../Styles/UserRegister.css";
import { useState } from "react";

function UserRegister() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    state: "",
    district: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      await axios.post("http://localhost:8080/user/register", formData);
      console.log("User Registered successfully");
    } catch (error) {
      console.error("Registration Failed : " + error.message);
    }
  };

  return (
    <div className="register-home">
      <h2>Registration</h2>

      <input
        type="text"
        value={formData.firstName}
        name="firstName"
        onChange={handleChange}
        placeholder="First Name"
      />

      <input
        type="text"
        value={formData.lastName}
        name="lastName"
        onChange={handleChange}
        placeholder="Last Name"
      />

      <input
        type="text"
        value={formData.email}
        name="email"
        onChange={handleChange}
        placeholder="Email"
      />

      <input
        type="text"
        value={formData.mobile}
        name="mobile"
        onChange={handleChange}
        placeholder="Mobile"
      />

      <input
        type="text"
        value={formData.state}
        name="state"
        onChange={handleChange}
        placeholder="State"
      />

      <input
        type="text"
        value={formData.district}
        name="district"
        onChange={handleChange}
        placeholder="District"
      />

      <input
        type="password"
        value={formData.password}
        name="password"
        onChange={handleChange}
        placeholder="Password"
      />

      <input type="password" value="" placeholder="Confirn Password" />

      <button onClick={handleSubmit}>Submit</button>

      <a href="login">Login</a>
    </div>
  );
}

export default UserRegister;
