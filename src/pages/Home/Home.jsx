import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Diseases from "../Diseases/Diseases";
import "./Home.scss";

const Home = () => {
  const { user } = useSelector((state) => state.auth);
  console.log("User: ",user.rol);

  return (
    <div>
      <div>
        <Link to="/specialists">Especialistas</Link>
        <Link to="/centers">Centros</Link>
      </div>
      <div>
        {/* {user.rol === "admin" && (
          <>
            <Link to={`/diseasesCreate`}>+</Link>
            <Diseases></Diseases>
          </>
        )}
        {user.rol === "user" && <Diseases></Diseases>}
        {user === null && <Diseases></Diseases>} */}
      </div>
    </div>
  );
};

export default Home;
