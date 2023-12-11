import { useState } from "react";
import "../Styles/VehicleRegister.css";

const VehicleRegister = () => {
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

  const handleSubmit = (e) => {
    console.log(formData);
  };

  return (
    <div className="vehicle-register">
      <h1>Add new Vehicle</h1>
      <input
        type="text"
        name="vehicleNumber"
        value={formData.vehicleNumber}
        onChange={handleChange}
        placeholder="Enter Vehicle No"
      />
      <input
        type="text"
        name="brandName"
        value={formData.brandName}
        onChange={handleChange}
        placeholder="Enter BrandName"
      />
      <input
        type="text"
        name="modelNumber"
        value={formData.modelNumber}
        onChange={handleChange}
        placeholder="Enter Model No"
      />
      <input
        type="text"
        name="fuelType"
        value={formData.fuelType}
        onChange={handleChange}
        placeholder="Enter FuelType"
      />

      <input
        type="text"
        name="ownerId" //implement redux for this
        value={formData.ownerId}
        onChange={handleChange}
        placeholder="Enter OwnerId"
      />

      <button onClick={handleSubmit}>Add</button>
    </div>
  );
};

export default VehicleRegister;
