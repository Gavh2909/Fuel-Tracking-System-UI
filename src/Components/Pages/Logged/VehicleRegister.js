import { useState } from "react";
import "../../Styles/VehicleRegister.css";
import axios from "axios";
import Vehicles from "./Vehicles";

const VehicleRegister = () => {
const[click,setClick]=useState(false)

  const [formData, setFormData] = useState({
    vehicleNumber: "",
    brandName: "",
    modelNumber: "",
    fuelType: "",
    ownerId: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const [err, setErr] = useState("");
  const handleSubmit = async () => {
    try {
      const res = await axios.post(
        "http://localhost:8080/vehicle/addvehicle",
        formData
      );

      console.log("Vehicle Added Successfully" + res.data);
     
      console.log(res.data);
      setErr(res.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      {click && <Vehicles/>}
      {!click &&
    <div className="vehicle-register">
      <h1>Add new Vehicle</h1>
      <input
        type="text"
        name="vehicleNumber"
        value={formData.vehicleNumber}
        onChange={handleChange}
        placeholder="Enter Vehicle No"
        required
      />
      <input
        type="text"
        name="brandName"
        value={formData.brandName}
        onChange={handleChange}
        placeholder="Enter BrandName"
        required
      />
      <input
        type="text"
        name="modelNumber"
        value={formData.modelNumber}
        onChange={handleChange}
        placeholder="Enter Model No"
        required
      />
      <input
        type="text"
        name="fuelType"
        value={formData.fuelType}
        onChange={handleChange}
        placeholder="Enter FuelType"
        required
      />

      <input
        type="text"
        name="ownerId" //implement redux for this
        value={formData.ownerId}
        onChange={handleChange}
        placeholder="Enter OwnerId"
        required
      />

      <button onClick={handleSubmit}>Add</button>
      <button onClick={()=> setClick(true)}>Vehicles</button>
      {err === "Vehicle Already Exists" && (
        <label>Vehicle Already Exists!!</label>
      )}
      {err === "Vehicle Registered Successfully" && (
        <label>Vehicle added successfully</label>
      )}
    </div>}
    </div>
  );
};

export default VehicleRegister;
