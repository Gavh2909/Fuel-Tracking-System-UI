import { React, useState } from "react";
import "../Styles/PasswordReset.css";
import axios from 'axios'

const PasswordReset = () => {
  const [formData, setFormData] = useState({
    email: "",
    mobile: "",
    newPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      await axios.post("http://localhost:8080/user/pwdreset", formData);
      console.log("PAssword Updated successfully");
    } catch (error) {
      console.error("Password Updatation Failed : " + error.message);
    }
  };

  return (
    <div className="pwdreset">
      <h1>Reset Password</h1>
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
        placeholder="mobile"
      />

      <input
        type="text"
        value={formData.newpassword}
        name="newPassword"
        onChange={handleChange}
        placeholder="New Password"
      />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default PasswordReset;
