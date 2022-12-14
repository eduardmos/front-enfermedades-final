import React, { useEffect } from "react";
import "./Diseases.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteDiseases,
  getDiseases,
} from "../../redux/diseases/diseases.functions";
import { Link, NavLink, useNavigate } from "react-router-dom";
import CustomButton from "../../components/CustomButton/CustomButton";

const Diseases = () => {
  // const { id } = useParams();

  let navigate = useNavigate();
  const dispatch = useDispatch();
  const { diseases, isLoading, error } = useSelector((state) => state.diseases);

  const toDeleteDiseases = (id) => {
    dispatch(deleteDiseases(id, navigate));
  };

  useEffect(() => {
    dispatch(getDiseases());
  }, []);

  const { user } = useSelector((state) => state.auth);
  const isAdmin = user && user.rol === "admin";

  return (
    <div className="diseases-box">
      {isAdmin && (
        <div>
          <NavLink to={"/diseasesCreate"}>
            <CustomButton
              text="Añadir Nueva Enfermedad"
              buttonTypeClass="normal custom"
              buttonHeight="60px"
              buttonWidth="xl"
            ></CustomButton>
          </NavLink>
        </div>
      )}
      {isLoading ? (
        <img
          className="loading-pic"
          src="https://cifras.unidadvictimas.gov.co/Cifras/images/loaderColores.gif"
          alt="loading"
        />
      ) : !error ? (
        diseases.map((disease) => {
          return (
            <div className="diseases-box-eachCard" key={disease._id}>
              <div>
                <h1 className="titleDiseases">{disease.name}</h1>
                <p>{disease.description}</p>

                <img
                  className="boximagediseases"
                  src={disease.img}
                  alt={disease.name}
                ></img>

                <p>{disease.symptoms}</p>
                <p>{disease.treatment}</p>
                <p>{disease.mortality}</p>
              </div>

              {isAdmin && (
                <>
                  <CustomButton
                    text="Eliminar"
                    buttonTypeClass="delete custom"
                    buttonFunction={() => toDeleteDiseases(disease._id)}
                    buttonHeight="60px"
                    buttonWidth="xl"
                  ></CustomButton>
                  {/* <button onClick={() => toDeleteDiseases(disease._id)}>
                    Eliminar
                  </button> */}
                  {/* <button onClick={() => putSpecialist(specialist._id)}>
                Edita
              </button> */}
                  <Link
                    to={`diseasesPut/edit/${disease._id}`}
                    key={disease._id}
                  >
                    <CustomButton
                      text="Editar"
                      buttonTypeClass="normal custom"
                      buttonHeight="60px"
                      buttonWidth="xl"
                    ></CustomButton>
                  </Link>
                </>
              )}
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

export default Diseases;
