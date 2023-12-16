import { useState } from "react";
import Entries from "./Entries";
import axios from "axios";

const AddEntry = () => {
  const [click, setClick] = useState(false);
  const [vehicles, setVehicles] = useState([]);

  const vehc = async () => {
    const res = await axios.get(
      "http://localhost:8080/vehicle/allVehicles/" + 1
    );
    console.log("DB vehicles", res.data);
    setVehicles(res.data);
  };
  const vIds = vehicles.map((veh) => veh.vehicleId);
  console.log(vIds);

  const [entryData, setEntryData] = useState({
    rate: "",
    amount: "",
    volume: "",
    vehicleId: "",
  });

  const handleChange = (e) => {
    setEntryData({ ...entryData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const response = await axios.post(
      "http://localhost:8080/entry/newEntry",
      entryData
    );
    console.log(response.data);
    console.log(vehicles);
  };

  return (
    <div onClick={vehc}>
      {click && <Entries />}
      {!click && (
        <div className="new-entry">
          <h1>New Entry</h1>
          <input
            type="number"
            name="rate"
            onChange={handleChange}
            placeholder="Rate ..."
          />
          <input
            type="number"
            name="amount"
            onChange={handleChange}
            placeholder="Amount ..."
          />
          <input
            type="number"
            name="volume"
            onChange={handleChange}
            placeholder="Volume ..."
          />
          <select name="vehicleId" onChange={handleChange}>
            <option value="#">--select vehicle--</option>
            {vIds.map((id) => {
              return <option value={id}>{id}</option>;
            })}
          </select>
          <button onClick={handleSubmit}>ADD</button>
          <button onClick={() => setClick(true)}>Back to entries</button>
        </div>
      )}
    </div>
  );
};

export default AddEntry;
