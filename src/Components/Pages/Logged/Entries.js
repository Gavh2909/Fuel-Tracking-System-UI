import { useState } from "react";
import AddEntry from "./AddEntry";
import axios from "axios";
import "./Styles/Entries.css"

const Entries = () => {

  const [entries, setEntries] = useState([]);

  const getEntries = async () => {
    const res = await axios.get("http://localhost:8080/entry/allEntries");
    setEntries(res.data)
  }
  const [click, setClick] = useState(false)

  // Delete the Entry
  const [delId, setDelId] = useState()
  const DeleteAPI=async(id)=>{
    const data = axios.post("http://localhost:8080/entry/deleteEntry/" + delId);
    console.log(data.data);
  }
 
  return (
    <div onMouseOver={getEntries}>
      {click && <AddEntry />}
      {!click &&
        <div className="entries">
          <h2>My Entries</h2>
          <table border={1}>
            <button onClick={() => setClick(true)}>New Entry</button>
            <tr>
              <th>ID</th>
              <th>Date</th>
              <th>Rate</th>
              <th>Amount</th>
              <th>Volume</th>
              <th>Actions</th>
            </tr>
            {entries.map((post) => {
              const { entryId, rate, amount, volume, entryDate, vehicleId } = post;
              console.log("POST:", post)
              return (
                <tr key={entryId}>
                  <th>{entryId}</th>
                  <th>{entryDate}</th>
                  <th>{rate}</th>
                  <th>{amount}</th>
                  <th>{volume}</th>
                  <th><button onClick={()=>{
                    setDelId(entryId);
                    DeleteAPI(delId);
                    getEntries()
                  }}>Delete</button></th>
                </tr>)
            })}

          </table>
        </div>}
    </div>
  );
};


export default Entries;