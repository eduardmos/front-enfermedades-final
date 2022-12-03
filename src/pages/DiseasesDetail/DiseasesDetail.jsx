import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  deleteDiseases,
  getByIdDiseases,
} from "../../redux/diseases/diseases.functions";

import "./DiseasesDetails.scss";

const DiseasesDetails = () => {
  const { id } = useParams();
  // console.log(id);
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const { disease, isLoading, error } = useSelector((state) => state.diseases);

  const deleteSpecialist = (id) => {
    dispatch(deleteDiseases(id, navigate));
  };

  // const putSpecialist = (id) => {
  //   dispatch(putSpecialists(id, navigate));
  // };

  useEffect(() => {
    dispatch(getByIdDiseases(id));
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
        <div key={disease._id}>
          <h1>{disease.name}</h1>
          <p>{disease.description}</p>
          <img src={disease.img} alt="imagen"></img>
          <p>{disease.symptoms}</p>
          <p>{disease.treatment}</p>
          <p>{disease.mortality}</p>

          <button onClick={() => deleteSpecialist(disease._id)}>
            Eliminar
          </button>
          {/* <button onClick={() => putSpecialist(specialist._id)}>
                Edita
              </button> */}
          <Link to={`/specialistsPut/edit/${disease._id}`} key={disease._id}>
            Edita
          </Link>
        </div>
      ) : (
        <div>
          <h3>{error}</h3>
        </div>
      )}
    </div>
  );
};

export default DiseasesDetails;
