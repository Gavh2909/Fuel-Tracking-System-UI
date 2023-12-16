import { useState } from "react";
import LoggedHome from "./LoggedHome";
import VehicleRegister from "./VehicleRegister";
import ProfilePage from "./ProfilePage";
import Vehicles from "./Vehicles";
import Entries from "./Entries";

export default function LandingPage() {
  const [click, setClick] = useState("home");
  return (
    <div className="landing-page">

      <a onClick={() => setClick("new-veh")}>Vehicle</a>
      <a onClick={() => setClick("new-ent")}>Entries</a>
      <a onClick={() => setClick("home")}>Home</a>
      <a onClick={() => setClick("profile")}>Profile</a>
      {/* <a onClick={() => setClick("profile")}>LogOut</a> Implement this */}

      {click === "home" && <LoggedHome />}
      {click === "new-veh" && <Vehicles />}
      {click === "profile" && <ProfilePage />}
      {click === "new-ent" && <Entries/>}

      <h1>THis is Footer</h1>
    </div>
  );
}
