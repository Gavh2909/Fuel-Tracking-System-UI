import { useState } from "react";
import LoggedHome from "./LoggedHome";
import VehicleRegister from "./VehicleRegister";
import ProfilePage from "./ProfilePage";
import Vehicles from "./Vehicles";
import { Connect, connect } from "react-redux";
import { loginFailure } from "../../../redux/actions/userActions";

function LandingPage({ dispatchLoginFailure }) {
  const [click, setClick] = useState("home");
  return (
    <div className="landing-page">
      <div className="navbar-log">
        <a onClick={() => setClick("home")}>Home</a>
        <nav>
          <a onClick={() => setClick("new-veh")}>Vehicles</a>
          <a onClick={() => setClick("new-ent")}>Entries</a>
          <a onClick={() => setClick("profile")}>Profile</a>
          <a onClick={dispatchLoginFailure}>Log Out</a>
        </nav>
      </div>

      {click === "home" && <h1>Home</h1>}
      {click === "new-veh" && <h1>Vehicles</h1>}
      {click === "new-ent" && <h1>Entry</h1>}
      {click === "profile" && <h1>Profile</h1>}
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  dispatchLoginFailure: (error) => dispatch(loginFailure(error)),
});

export default connect(null, mapDispatchToProps)(LandingPage);