import React, { useState } from "react";
import "./Navbar.scss";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Logout from "../Logout";
import BurguerButton from "../BurguerButton/BurguerButton";
import styled from "styled-components";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const [clicked, setCliked] = useState(false);
  // console.log(clicked);
  const handleClick = () => {
    if (window.innerWidth < 768) {
      //cuando esta true lo pasa a false y viceversa
      setCliked(!clicked);
    }
  };

  return (
    <>
      <NavContainer>
        <img
          src="https://res.cloudinary.com/dt1kuzdty/image/upload/v1670197905/proyecto-diseases/logooo_cbvz4q.png"
          alt="cerebro"
        ></img>
        <div className={`links ${clicked ? "active" : ""}`}>
          <NavLink to="" className={"ab"}></NavLink>
          <NavLink to="" className={"ab"}>
            SimpleMente
          </NavLink>

          <NavLink to="specialists" onClick={handleClick} className={"ab"}>
            Especialistas
          </NavLink>

          <NavLink onClick={handleClick} to="/centers" className={"ab"}>
            Centros
          </NavLink>
          <NavLink onClick={handleClick} to="aboutus" className={"ab"}>
            About Us
          </NavLink>
          {user && (
            <NavLink onClick={handleClick} to="graphics" className={"ab"}>
              Estadisticas
            </NavLink>
          )}

          {!user && (
            <>
              <NavLink onClick={handleClick} to="login" className={"ab"}>
                Entra
              </NavLink>
              <NavLink onClick={handleClick} to="register" className={"ab"}>
                Registrate
              </NavLink>
            </>
          )}
          {user && (
            <NavLink to="" className={"ab"}>
              <Logout />
            </NavLink>
          )}
        </div>

        <div className="burguer">
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? " active" : ""}`}></BgDiv>
      </NavContainer>
    </>
  );
};

export default Navbar;

const NavContainer = styled.nav`
  ${"" /* Barra en general, incluye el menu hamburguesa y lo que lo cierra */}
  background-color: #1D2233;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;

  h2 {
    color: white;
    font-weight: 400;

    span {
      font-weight: bold;
    }
  }

  .ab {
    color: white;
    text-decoration: none;
    margin-right: 1rem;
  }
  ${"" /* Links que se ven en el cuadro desplegable de la hamburguesa */}
  .links {
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all 0.5s ease;
    z-index: 2;

    .ab {
      color: white;
      font-size: 2rem;
      display: block;
    }
    @media (min-width: 768px) {
      position: initial;
      margin: 0;

      .ab {
        font-size: 1rem;
        color: white;
        display: inline;
      }
      display: block;
    }
  }
  .links.active {
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 10%;
    left: 0;
    right: 0;
    text-align: center;
    .ab {
      font-size: 1.5rem;
      margin-top: 1rem;
      color: white;
    }
  }
  .burguer {
    @media (min-width: 768px) {
      display: none;
    }
  }
`;

//Cuadro desplegable de la hamburguesa
const BgDiv = styled.div`
  background-color: #2a2c3a;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all 0.6s ease;

  &.active {
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
