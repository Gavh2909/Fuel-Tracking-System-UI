import { useState } from "react";
import AddEntry from "./AddEntry";
import axios from "axios";

const Entries = () => {

  const[entries,setEntries]=useState([]);
  
  const getEntries=async()=>{
    const res=await axios.get("http://localhost:8080/entry/allEntries");
    setEntries(res.data)
    console.log(res.data)
  }
  const[click,setClick]=useState(false)
  return (
    <div onClick={getEntries}>
      {click && <AddEntry/>}
      {!click &&
    <div className="entries">
      <h2>My Entries</h2>
      <button onClick={()=>setClick(true)}>New Entry</button>
      <table border={1}>
        <tr>
          <th>ID</th>
          <th>Date</th>
          <th>Rate</th>
          <th>Amount</th>
          <th>Volume</th>
          <th>Actions</th>
        </tr>
        {entries.map((post)=>{
         const {entryId,rate,amount,volume,entryDate,vehicleId}=post;
         console.log("POST:",post)
          return(
          <tr key={entryId}>
          <th>{entryId}</th>
          <th>{entryDate}</th>
          <th>{rate}</th>
          <th>{amount}</th>
          <th>{volume}</th>
          <th><button>Delete</button></th>
        </tr>)
        })}
        
      </table>
    </div>}
    </div>
  );
};


export default Entries;