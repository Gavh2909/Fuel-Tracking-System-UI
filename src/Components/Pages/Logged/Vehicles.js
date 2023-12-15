import { useSelector } from "react-redux";
import "./Styles/Vehicles.css";
import { useState } from "react";
import VehicleRegister from "./VehicleRegister";
import axios from "axios";
import EditVehicle from "./EditVehicle";
const Vehicles = () => {
  const [click, setClick] = useState('false');
  const [vehicls, setVehicls] = useState(
    useSelector((st) => st.auth.userData).vehicles
  );
  const [delVehID, setDelVehID] = useState();
  const userId = useSelector((state) => state.auth).userData.userInfo.userId;

  const vehc = async () => {
    const res = await axios.get(
      "http://localhost:8080/vehicle/allVehicles/" + userId
    );
    setVehicls(res.data);
    console.log("DB vehicles", res.data);
  };

  //API for delete the vehicle
  const deleteVehicle = async (vId) => {
    const data = await axios.post(
      "http://localhost:8080/vehicle/deleteVehicle/" + vId
    );
    window.alert(data.data)

    
  };
 
  const[edVeh,setEdVeh]=useState();

  return (
    <div onMouseOver={vehc}>
      {click=='true' && <VehicleRegister  />}
      {click == 'edit' && <EditVehicle data={edVeh}/>}
      {click=='false' && (
        <div className="vehicle-page">
          <div className="head-veh">
            <h2>My Vehicles</h2>
            <button onClick={() => setClick('true')}>Add Vehicle</button>
          </div>
          {/* <h3>User ca perfom operations like update and delete operatiosn</h3>
      <h3>their should one button for adding new vehicle</h3> */}

          <table border={1}>
            <tr>
              <th>VehicleID</th>
              <th>VehicleNum</th>
              <th>Brand</th>
              <th>Model</th>
              <th>FuelType</th>
              <th>RegistrationDate</th>
              <th>Spending(RS)</th>
              <th>Consumption(LTR)</th>
              <th>Edit/Delete</th>
            </tr>
            {vehicls.map((post) => {
              const {
                brandName,
                fuelType,
                modelNumber,
                ownerId,
                registrationDate,
                totalConsumption,
                totalSpending,
                vehicleId,
                vehicleNumber,
              } = post;
              return (
                <tr key={vehicleId}>
                  <td>{vehicleId}</td>
                  <td>{vehicleNumber}</td>
                  <td> {brandName}</td>
                  <td>{modelNumber}</td>
                  <td>{fuelType}</td>
                  <td>{registrationDate}</td>
                  <td>{totalSpending}</td>
                  <td>{totalConsumption}</td>
                  <td>
                    <a onClick={()=>{setEdVeh(post);
                      setClick('edit')}}>edit</a>
                    <a onClick={()=>deleteVehicle(vehicleId)}> delete</a>
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      )}
    </div>
  );
};

export default Vehicles;
