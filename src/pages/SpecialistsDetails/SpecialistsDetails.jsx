import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  deleteSpecialists,
  getByIdSpecialists,
  // putSpecialists,
} from "../../redux/specialists/specialists.functions";
import "./SpecialistsDetails.scss";

const SpecialistsDetails = () => {
  const { id } = useParams();
  // console.log(id);
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const { specialist, isLoading, error } = useSelector(
    (state) => state.specialists
  );

  const deleteSpecialist = (id) => {
    dispatch(deleteSpecialists(id, navigate));
  };

  // const putSpecialist = (id) => {
  //   dispatch(putSpecialists(id, navigate));
  // };

  useEffect(() => {
    dispatch(getByIdSpecialists(id));
    // console.log("Datos recogidos por id", specialists);
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
        <div key={specialist._id}>
          <h1>{specialist.name}</h1>
          <p>{specialist.surname}</p>
          <p>{specialist.age}</p>
          <img src={specialist.img} alt="imagen"></img>
          <p>{specialist.specialistType}</p>
          <p>{specialist.location}</p>
          <p>{specialist.schedule}</p>

          {isAdmin && (
            <>
              <button onClick={() => deleteSpecialist(specialist._id)}>
                Eliminar
              </button>
              {/* <button onClick={() => putSpecialist(specialist._id)}>
                Edita
              </button> */}
              <Link
                to={`/specialistsPut/edit/${specialist._id}`}
                key={specialist._id}
              >
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

export default SpecialistsDetails;
