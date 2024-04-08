import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import Vehicles from "./Vehicles";
import "./Styles/EditVehicle.css"

const EditVehicle = (vcls) => {
  const [click, setClick] = useState(false);

  const [userData, setUserData] = useState({
    vehicleNumber: "",
    brandName: "",
    modelNumber: "",
    fuelType: "",
    ownerId: useSelector((state) => state.auth).userData.userInfo.userId,
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const pVehicle=vcls.data;
  const vehId = pVehicle.vehicleId;
  
  const handleSubmit = async () => {
    const data = await axios.post(
      "http://localhost:8080/vehicle/editVehicle/" + vehId,
      userData
    );
    setClick(true);
    console.log(data.data);
  };

  return (
    <div>
        {click && <Vehicles/>}
      {!click && (
        <div className="edit-vehicle">
          <h1>Update Vehicle </h1>
          <h3>Owner ID = {pVehicle.ownerId}</h3>
          <input type="text" name="vehicleNumber" onChange={handleChange} defaultValue={pVehicle.vehicleNumber}/>
          <input type="text" name="brandName" onChange={handleChange} defaultValue={pVehicle.brandName}/>
          <input type="text" name="modelNumber" onChange={handleChange} defaultValue={pVehicle.modelNumber}/>
          <input type="text" name="fuelType" onChange={handleChange} defaultValue={pVehicle.fuelType}/>
           <button onClick={handleSubmit}>SUBMIT</button>
           <p>{}</p>
        </div>
      )}
    </div>
  );
};

export default EditVehicle;
