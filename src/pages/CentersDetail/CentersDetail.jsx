import React from "react";
import "./CentersDetail";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  deleteCenters,
  getByIdCenters,
} from "../../redux/centers/centers.functions";
const CentersDetail = () => {
  const { id } = useParams();
  //Aqui llega la id
  // console.log(id);
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const { center, isLoading, error } = useSelector((state) => state.centers);
  console.log(center);
  //A esta funcion no llega
  const deleteCenter = (id) => {
    // console.log("Hola", id);
    dispatch(deleteCenters(id, navigate));
  };

  useEffect(() => {
    // console.log("a", id);
    dispatch(getByIdCenters(id));
  }, []);

  const { user } = useSelector((state) => state.auth);
  const isAdmin = user && user.rol === "admin";

  return (
    <div>
      {isLoading ? (
        <img
          src="https://i.pinimg.com/originals/3d/6a/a9/3d6aa9082f3c9e285df9970dc7b762ac.gif"
          alt="loading"
        />
      ) : !error ? (
        <div key={center._id}>
          <h1>{center.name}</h1>
          <p>Id:{center._id}</p>
          <img src={center.img} alt="imagen"></img>
          <p>{center.location}</p>
          <p>{center.schedule}</p>
          {isAdmin && (
            <>
              <button onClick={() => deleteCenter(center._id)}>Eliminar</button>
              <Link to={`/centersPut/edit/${center._id}`} key={center._id}>
                Edita
              </Link>
            </>
          )}
        </div>
      ) : (
        <div>
          <h3>{error}</h3>
        </div>
      )}
    </div>
  );
};

export default CentersDetail;
