import React from "react";
import { Link } from "react-router-dom";
import Diseases from "../Diseases/Diseases";
import "./Home.scss";

const Home = () => {
  return (
    <div>
      <div>
        <Link to="/specialists">Especialistas</Link>
        <Link to="/centers">Centros</Link>
      </div>
      <div>
        <Diseases></Diseases>
      </div>
    </div>
  );
};

export default Home;
