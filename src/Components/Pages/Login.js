import { useState } from "react";
import "../Styles/Login.css";
import axios from "axios";
import { loginFailure, loginSuccess } from "../../redux/actions/userActions";
import { connect } from "react-redux";
import React from "react";

const Login = ({ data, error,cpage, loginStatus, dispatchLoginSuccess, dispatchLoginFailure }) => {


  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  console.log("userDate - Login", data);
  console.log("error - Login", error);
  console.log("error - Status", loginStatus);
  console.log("Page CURR", cpage);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/user/login",
        formData
      );
      dispatchLoginSuccess(response.data);
    } catch (error) {
      dispatchLoginFailure(error);
    }
  };

  // console.log("Data from Redux:", data);
  // console.log("Error from Redux:", error);

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
        <a href="/pwdreset">Forgot password?</a>
      </label>
      
    </div>
  );
};

const mapStateToProps = (state) => ({
  data: state.auth.userData,
  error: state.auth.error,
  loginStatus:state.auth.loginStatus,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchLoginSuccess: (userData) => dispatch(loginSuccess(userData)),
  dispatchLoginFailure: (error) => dispatch(loginFailure(error)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
