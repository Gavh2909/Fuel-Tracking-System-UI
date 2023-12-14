import ProfilePage from "./Pages/Logged/ProfilePage";
import LoggedHome from "./Pages/Logged/LoggedHome";
import VehicleRegister from "./Pages/Logged/VehicleRegister";
import { useState } from "react";

function ParentComponent() {
  const [click, setClick] = useState("");

  return (
    <div className="App">
      {click === "vehregister" && <VehicleRegister />}
      {click === "profile" && <ProfilePage />}
      {click === "logged" && <LoggedHome />}

      <button onClick={() => setClick("logged")}>LoggedHome</button>
      <button onClick={() => setClick("vehregister")}>VehRegister</button>
      <button onClick={() => setClick("profile")}>Profile</button>
    </div>
  );
}

export default ParentComponent;
