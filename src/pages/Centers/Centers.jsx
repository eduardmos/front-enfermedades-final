import React, { useEffect, useState } from "react";
import "./Centers.scss";
import { useDispatch, useSelector } from "react-redux";
import { getCenters } from "../../redux/centers/centers.functions";
import { Link, NavLink } from "react-router-dom";
import CustomButton from "../../components/CustomButton/CustomButton";
const Centers = () => {
  const dispatch = useDispatch();
  const { centers, isLoading, error } = useSelector((state) => state.centers);

  useEffect(() => {
    dispatch(getCenters());
  }, []);

  const [query, setQuery] = useState("");
  const { user } = useSelector((state) => state.auth);
  const isAdmin = user && user.rol === "admin";

  return (
    <div className="center-box">
      {isAdmin && (
        <div className="button-center-Create">
          <NavLink to={"/centersCreate"}>
            <CustomButton text="CREAR CENTRO" />
          </NavLink>
        </div>
      )}
      <div className="search-center">
        <input
          type="text"
          placeholder="Busca tu provincia..."
          className="button-search-on"
          onChange={(e) => setQuery(e.target.value)}
        ></input>
      </div>
      {isLoading ? (
        <img
          className="imgCentersCard"
          src="https://i.pinimg.com/originals/3d/6a/a9/3d6aa9082f3c9e285df9970dc7b762ac.gif"
          alt="loading"
        />
      ) : !error ? (
        centers
          .filter((center) =>
            (center.name + center.ubication).toLowerCase().includes(query)
          )
          .map((center) => {
            return (
              <div className="center-box-eachCard" key={center._id}>
                <img src={center.img} alt="center-img"></img>
                <h1>{center.name}</h1>
                <p>{center.ubication}</p>
                <div className="button-center">
                  <Link to={`/centers/${center._id}`} key={center._id}>
                    Ver más
                  </Link>
                </div>
              </div>
            );
          })
      ) : (
        <div>
          <h3>{error}</h3>
        </div>
      )}
    </div>
  );
};

export default Centers;
