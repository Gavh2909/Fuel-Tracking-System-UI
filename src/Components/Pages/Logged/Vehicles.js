import "./Styles/Vehicles.css";
const Vehicles = () => {
  return (
    <div className="vehicle-page">
      <div className="head-veh">
        <h2>My Vehicles</h2>
        <a href="#">Add New Vehicle</a>
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
        <tr>
          <td>1</td>
          <td>MH26L3433</td>
          <td>Hero Honda</td>
          <td>23565MH26KJH67</td>
          <td>Petrol</td>
          <td>12:23:2021</td>
          <td>2132</td>
          <td>23</td>
          <td>
            <a href="#">edit</a>
            <a href="#"> delete</a>
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td>MH26L3433</td>
          <td>Hero Honda</td>
          <td>23565MH26KJH67</td>
          <td>Petrol</td>
          <td>12:23:2021</td>
          <td>2132</td>
          <td>23</td>
          <td>
            <a href="#">edit</a>
            <a href="#"> delete</a>
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td>MH26L3433</td>
          <td>Hero Honda</td>
          <td>23565MH26KJH67</td>
          <td>Petrol</td>
          <td>12:23:2021</td>
          <td>2132</td>
          <td>23</td>
          <td>
            <a href="#">edit</a>
            <a href="#"> delete</a>
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td>MH26L3433</td>
          <td>Hero Honda</td>
          <td>23565MH26KJH67</td>
          <td>Petrol</td>
          <td>12:23:2021</td>
          <td>2132</td>
          <td>23</td>
          <td>
            <a href="#">edit</a>
            <a href="#"> delete</a>
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td>MH26L3433</td>
          <td>Hero Honda</td>
          <td>23565MH26KJH67</td>
          <td>Petrol</td>
          <td>12:23:2021</td>
          <td>2132</td>
          <td>23</td>
          <td>
            <a href="#">edit</a>
            <a href="#"> delete</a>
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td>MH26L3433</td>
          <td>Hero Honda</td>
          <td>23565MH26KJH67</td>
          <td>Petrol</td>
          <td>12:23:2021</td>
          <td>2132</td>
          <td>23</td>
          <td>
            <a href="#">edit</a>
            <a href="#"> delete</a>
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td>MH26L3433</td>
          <td>Hero Honda</td>
          <td>23565MH26KJH67</td>
          <td>Petrol</td>
          <td>12:23:2021</td>
          <td>2132</td>
          <td>23</td>
          <td>
            <a href="#">edit</a>
            <a href="#"> delete</a>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Vehicles;
