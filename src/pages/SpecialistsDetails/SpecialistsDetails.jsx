import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getByIdSpecialists } from "../../redux/specialists/specialists.functions";
import "./SpecialistsDetails.scss";

const SpecialistsDetails = () => {
  const { id } = useParams();
  // console.log(id);
  const dispatch = useDispatch();
  const { specialists, isLoading, error } = useSelector(
    (state) => state.specialists
  );

  useEffect(() => {
    dispatch(getByIdSpecialists(id));
    console.log("Datos recogidos por id", specialists);
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
