import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Logout from "./Logout";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div>
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
              Login
            </NavLink>
            <NavLink to="register" activeclassname={"active"}>
              Register
            </NavLink>
          </>
        )}
        {user && (
          <NavLink to="" activeclassname={"active"}>
            <Logout />
          </NavLink>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
