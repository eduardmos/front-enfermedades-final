import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CustomButton from "../../components/CustomButton/CustomButton";
import Footer from "../../components/Footer/Footer";
import Diseases from "../Diseases/Diseases";
import "./Home.scss";

const Home = () => {
  // const { user } = useSelector((state) => state.auth);

  const { user } = useSelector((state) => state.auth);

  return (
    <div className="container-general">
      <div className="containerimg">
        <h2 className="textHomeInitial">
          somos un punto de informacion y de encuentro entre especilistas y
          pacientes en enfermedades neurodegenerativas
        </h2>
        {!user && (
          <>
            <NavLink to="/login" className="navlink-page">
              <CustomButton text="Especialistas" />
            </NavLink>
            <NavLink to="/centers" className="navlink-page">
              <CustomButton text="Centers" />
            </NavLink>
          </>
        )}
        {user && (
          <>
            <NavLink to="/specialists" className="navlink-page">
              <CustomButton text="Especialistas" />
            </NavLink>
            <NavLink to="/centers" className="navlink-page">
              <CustomButton text="Centers" />
            </NavLink>
          </>
        )}
      </div>
      <Diseases />
      <Footer />
    </div>
  );
};

export default Home;
