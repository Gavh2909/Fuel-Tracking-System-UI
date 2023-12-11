import { React, useState } from "react";
import "../Styles/PasswordReset.css";

const PasswordReset = () => {
  const [formData, setFormData] = useState({
    email: "",
    mobile: "",
    newpassword: "",
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
        name="newpassword"
        onChange={handleChange}
        placeholder="New Password"
      />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default PasswordReset;
