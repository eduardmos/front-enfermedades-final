import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <nav>
          <NavLink to="" activeclassname={"active"}>Icono</NavLink>
          <NavLink>Titulo</NavLink>
          <NavLink to="aboutus" activeclassname={"active"}>About Us</NavLink>
          <NavLink to="login" activeclassname={"active"}>Login</NavLink>
          <NavLink to="register" activeclassname={"active"}>Register</NavLink>
        </nav>

    </div>
  )
}

export default Navbar