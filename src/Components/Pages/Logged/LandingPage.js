import { useState } from "react";
import LoggedHome from "./LoggedHome";
import VehicleRegister from "./VehicleRegister";
import ProfilePage from "./ProfilePage";
import Vehicles from "./Vehicles";

function LandingPage({ dispatchLoginFailure }) {
  const [click, setClick] = useState("home");
  return (
    <div className="landing-page">

      <a onClick={() => setClick("new-veh")}>Vehicle</a>
      <a onClick={() => setClick("new-ent")}>New Entry</a>
      <a onClick={() => setClick("home")}>Home</a>
      <a onClick={() => setClick("profile")}>Profile</a>
      {/* <a onClick={() => setClick("profile")}>LogOut</a> Implement this */}

      {click === "home" && <LoggedHome />}
      {click === "new-veh" && <Vehicles />}
      {click === "profile" && <ProfilePage />}
      {click === "new-ent" && <h1>This is Add new Entry page</h1>}

      <h1>THis is Footer</h1>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  dispatchLoginFailure: (error) => dispatch(loginFailure(error)),
});

export default connect(null, mapDispatchToProps)(LandingPage);