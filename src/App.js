import "./App.css";
import ParentComponent from "./Components/ParentComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Login from "./Components/Pages/Login";
import PasswordReset from "./Components/Pages/PasswordReset";
import UserRegister from "./Components/Pages/UserRegister";

const App = () => (
  <div className="app">
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="register" element={<UserRegister />} />
        <Route path="login" element={<Login />} />
        <Route path="pwdreset" element={<PasswordReset />} />
        <Route path="*" element={<h1>undefined path</h1>} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
