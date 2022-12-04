import React, { useState } from "react";
import "./Navbar.scss";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Logout from "../Logout";
import BurguerButton from "../BurguerButton/BurguerButton";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const [clicked, setCliked] = useState(false);
  console.log(clicked);
  const handleClick = () => {
    //cuando esta true lo pasa a false y viceversa
    setCliked(!clicked);
  };

  return (
    <>
      <nav>
        <div className={`links ${clicked ? "active" : ""}`}>
          <NavLink to="" activeclassname={"active"}>
            Icono
          </NavLink>
          <NavLink>Titulo</NavLink>

          <NavLink onClick={handleClick} to="/specialists">
            Especialistas
          </NavLink>
          <NavLink onClick={handleClick} to="/centers">
            Centros
          </NavLink>
          <NavLink
            onClick={handleClick}
            to="aboutus"
            activeclassname={"active"}
          >
            About Us
          </NavLink>
          {user && (
            <NavLink
              onClick={handleClick}
              to="graphics"
              activeclassname={"active"}
            >
              Estadisticas
            </NavLink>
          )}

          {!user && (
            <>
              <NavLink
                onClick={handleClick}
                to="login"
                activeclassname={"active"}
              >
                Entra
              </NavLink>
              <NavLink
                onClick={handleClick}
                to="register"
                activeclassname={"active"}
              >
                Registrate
              </NavLink>
            </>
          )}
          {user && (
            <NavLink to="" activeclassname={"active"}>
              <Logout />
            </NavLink>
          )}
        </div>

        <div className="burguer">
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
