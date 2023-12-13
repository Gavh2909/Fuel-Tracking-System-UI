import { useState } from "react";
import LoggedHome from "./LoggedHome";
import VehicleRegister from "./VehicleRegister";
import ProfilePage from "./ProfilePage";

export default function LandingPage() {
  const [click, setClick] = useState("home");
  return (
    <div className="landing-page">
      <a onClick={() => setClick("new-veh")}>New Vehicle</a>
      <a onClick={() => setClick("new-ent")}>New Entry</a>
      <a onClick={() => setClick("home")}>Home</a>
      <a onClick={() => setClick("profile")}>Profile</a>

      {click === "home" && <LoggedHome />}
      {click === "new-veh" && <VehicleRegister />}
      {click === "profile" && <ProfilePage />}
      {click === "new-ent" && <h1>This is Add new Entry page</h1>}

      <h1>THis is Footer</h1>
    </div>
  );
}
