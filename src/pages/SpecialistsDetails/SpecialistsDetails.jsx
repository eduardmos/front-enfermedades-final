import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  deleteSpecialists,
  getByIdSpecialists,
} from "../../redux/specialists/specialists.functions";
import "./SpecialistsDetails.scss";

const SpecialistsDetails = () => {
  const { id } = useParams();
  // console.log(id);
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const { specialists, isLoading, error } = useSelector(
    (state) => state.specialists
  );

  const deleteSpecialist = (id) => {
    dispatch(deleteSpecialists(id, navigate));
  };

  useEffect(() => {
    dispatch(getByIdSpecialists(id));
    // console.log("Datos recogidos por id", specialists);
  }, []);

  return (
    <div>
      {isLoading ? (
        <img
          src="https://i.pinimg.com/originals/3d/6a/a9/3d6aa9082f3c9e285df9970dc7b762ac.gif"
          alt="loading"
        />
      ) : !error ? (
        specialists.map((specialist) => {
          return (
            <div key={specialist._id}>
              <h1>{specialist.name}</h1>
              <p>{specialist.surname}</p>
              <p>{specialist.img}</p>
              <p>{specialist.specialistType}</p>
              <p>{specialist.location}</p>
              <p>{specialist.schedule}</p>

              <button onClick={() => deleteSpecialist(specialist._id)}>
                Eliminar
              </button>
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

export default SpecialistsDetails;
