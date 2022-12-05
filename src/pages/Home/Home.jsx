import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CustomButton from "../../components/CustomButton/CustomButton";

import Diseases from "../Diseases/Diseases";
import "./Home.scss";

const Home = () => {
  // const { user } = useSelector((state) => state.auth);

  return (
    <div className="container-general">
      <div className="containerimg">
        <NavLink to="/specialists">
          <CustomButton text="Especialistas" />
        </NavLink>
        <NavLink to="/centers">
          <CustomButton text="Centers" />
        </NavLink>

        <img
          src="https://res.cloudinary.com/dt1kuzdty/image/upload/v1670196156/proyecto-diseases/change_ifoep6.jpg"
          alt="imagenentrada"
          width="100%"
          height="auto"
        />
      </div>
      <Diseases />
    </div>
  );
};

export default Home;
