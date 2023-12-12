import "../Styles/LoggedHome.css";

const LoggedHome = () => {
  return (
    <div className="logged-home">
      <h2>Hi {"Satish"}, Welcome back!</h2>
      <div className="boxes-mid">
        <p>{"Spendings(Rs) 3021"}</p>
        <p>{"Consumption(LTR): 29LTR"}</p>
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
