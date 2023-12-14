import { useSelector } from "react-redux";
import "../../Styles/LoggedHome.css";

const LoggedHome = () => {
  const data = useSelector((state) => state.auth);
  console.log(data.userData);

  return (
    <div className="logged-home">
      <h2>Hi {data.userData.firstName}, Welcome back!</h2>
      <div className="boxes-mid">
        <p>{Number(data.userData.totalConsumption) + 23} LTR</p>
        <p>{Number(data.userData.totalSpending) + 3687} RS</p>
      </div>

      <div className="boxes-bottom">
        <a href="/entry/new">New Entry</a>
        <a href="/vehicle/vehicles">Vehicles</a>
        <a href="/entry/entries">Entries</a>
      </div>
      
    </div>
  );
};

export default LoggedHome;
