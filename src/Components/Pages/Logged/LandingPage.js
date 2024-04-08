import { useState } from "react";
import LoggedHome from "./LoggedHome";
import VehicleRegister from "./VehicleRegister";
import ProfilePage from "./ProfilePage";
import Vehicles from "./Vehicles";
import {loginFailure} from "../../../redux/actions/userActions"
import "../../Styles/LandingPage.css";
import { connect } from "react-redux";
import Entries from "./Entries";


function LandingPage({ dispatchLoginFailure }) {
  const [click, setClick] = useState("home1");
  return (
    <div className="landing-page">
    <div className="navbar-log">
      <a onClick={() => setClick("home1")}>FuelTrack</a>
      <nav>
        <a onClick={() => setClick("new-veh")}>Vehicles</a>
        <a onClick={() => setClick("new-ent")}>Entries</a>
        <a onClick={() => setClick("profile")}>Profile</a>
        <a onClick={dispatchLoginFailure}>Log Out</a>
      </nav>
    </div>

    {click === "home1" && <LoggedHome/>}
    {click === "new-veh" && <Vehicles/>}
    {click === "new-ent" && <Entries/>}
    {click === "profile" && <ProfilePage/>}
  </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  dispatchLoginFailure: (error) => dispatch(loginFailure(error)),
});

export default connect(null, mapDispatchToProps)(LandingPage);