import { useSelector } from "react-redux";
import "../../Styles/LoggedHome.css";

const LoggedHome = () => {
  const data = useSelector((state) => state.auth).userData.userInfo;
  console.log(data.userData);

  return (
    <div className="logged-home">
      <h2>Hi Satish, Welcome back!</h2>
      <div className="boxes-mid">
        <p> {data.totalConsumption}LTR</p>
        <p>{data.totalSpending} RS</p>
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
