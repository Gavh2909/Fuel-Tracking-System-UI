import { useState } from "react";
import LoggedHome from "./LoggedHome";
import Vehicles from "./Vehicles";
import ProfilePage from "./ProfilePage";
import "../../Styles/LandingPage.css";

export default function LandingPg() {
  const [click, setClick] = useState("home");
  return (
    <div className="landing-page">
      <div className="navbar-log">
        <a onClick={() => setClick("home")}>Home</a>
        <nav>
          <a onClick={() => setClick("new-veh")}>Vehicles</a>
          <a onClick={() => setClick("new-ent")}>Entries</a>
          <a onClick={() => setClick("profile")}>Profile</a>
          <a onClick={() => setClick("log-out")}>Log Out</a>
        </nav>
      </div>

      {click === "home" && <h1>Home</h1>}
      {click === "new-veh" && <h1>Vehicles</h1>}
      {click === "new-ent" && <h1>Entry</h1>}
      {click === "profile" && <h1>Profile</h1>}
    </div>
  );
}
