import { Provider } from "react-redux";
import "./App.css";
import store from "./redux/store";
import ParentComponent from "./Components/ParentComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Login from "./Components/Pages/Login";
import UserRegister from "./Components/Pages/UserRegister";
import PasswordReset from "./Components/Pages/PasswordReset";
import VehicleRegister from "./Components/Pages/VehicleRegister";
import LoggedHome from "./Components/Pages/LoggedHome";
import ProfilePage from "./Components/Pages/ProfilePage";


const App = () => (
  <div className="app">
<BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="register" element={<UserRegister />} />
            <Route path="login" element={<Login />} />
            <Route path="pwdreset" element={<ParentComponent/>} />
            <Route path="vehicle/addvehicle" element={<VehicleRegister />} />
            <Route path="logged/home" element={<LoggedHome />} />
            <Route path="logged/profile" element={<ProfilePage />} />
  
            <Route path="*" element={<h1>undefined path</h1>} />
          </Routes>
        </BrowserRouter>
    
  </div>
);

export default App;
