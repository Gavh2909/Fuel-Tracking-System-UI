import "./App.css";
import Home from "./Components/Pages/Home";
import Login from "./Components/Pages/Login";
import PasswordReset from "./Components/Pages/PasswordReset";
import UserRegister from "./Components/Pages/UserRegister";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import VehicleRegister from "./Components/Pages/VehicleRegister";
import LoggedHome from "./Components/Pages/LoggedHome";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="register" element={<UserRegister />} />
          <Route path="login" element={<Login />} />
          <Route path="pwdreset" element={<PasswordReset />} />
          <Route path="vehicle/addvehicle" element={<VehicleRegister />} />
          <Route path="logged/home" element={<LoggedHome />} />
          <Route path="*" element={<h1>undefined path</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
