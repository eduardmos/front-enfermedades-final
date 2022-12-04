import React from "react";
import "./Navbar.scss"
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Logout from "../Logout";
import BurguerButton from "../BurguerButton/BurguerButton";


const Navbar = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <nav>
      <NavLink to="" activeclassname={"active"}>
        Icono
      </NavLink>
      <NavLink>Titulo</NavLink>

      <NavLink to="/specialists">Especialistas</NavLink>
      <NavLink to="/centers">Centros</NavLink>
      <NavLink to="aboutus" activeclassname={"active"}>
        About Us
      </NavLink>

      {!user && (
        <>
          <NavLink to="login" activeclassname={"active"}>
            Entra
          </NavLink>
          <NavLink to="register" activeclassname={"active"}>
            Registrate
          </NavLink>
        </>
      )}
      {user && (
        <NavLink to="" activeclassname={"active"}>
          <Logout />
        </NavLink>
      )}
      <BurguerButton/>
    </nav>
  );
};

export default Navbar;
