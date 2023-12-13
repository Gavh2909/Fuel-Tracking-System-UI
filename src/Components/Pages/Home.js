import { React } from "react";
import Login from "./Login";
import "../Styles/Home.css";
import { connect } from "react-redux";

const Home = ({data,error}) => {

  
  return (
    <div className="home">
      <div className="home-content">
        <h1>FuelTrack</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
          commodi illum assumenda facilis, saepe quo voluptatem hic iusto
          nesciunt. Porro dicta laboriosam dolore nostrum doloribus dolorum
          laudantium optio autem eaque ipsa, quae pariatur illum fugit quod
          voluptas non, unde, quas accusamus maiores quo doloremque ipsum!
          Praesentium rem repellat similique illo voluptate minus corrupti
          corporis id debitis, animi consequatur doloribus adipisci accusantium
          non iste dolor incidci nemo nulla tempore impedit totam quae deserunt
          nesciunt rem doloremque, exercitationem, dolores voluptatem ducimus
          cum fugit qui commodi doloremque ex saepe id optio rerum! Veniam cum,
          vel ipsam autem, unde quos doloremque quidem dolores mollitia
          quisquam, nostrum distinctio? Aspernatur nesciunt temporibus explicabo
          commodi adipisci.
        </p>
      </div>

      <div className="form-home">
        <Login />
      </div>
    </div>
  );
};




export default Home;

