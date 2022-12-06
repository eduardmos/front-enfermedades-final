import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import CustomButton from "../../components/CustomButton/CustomButton";
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
    <div className="first-box-specialist">
      {isLoading ? (
        <img
          className="loading-pic"
          src="https://cifras.unidadvictimas.gov.co/Cifras/images/loaderColores.gif"
          alt="loading"
        />
      ) : !error ? (
        <div className="specialist-box">
          <div className="imgdivdetails">
            <img
              className="imgSpecialist"
              src={specialist.img}
              alt="imagen"
              
            ></img>
         </div>
          <div key={specialist._id}>
            <h1> {specialist.name}</h1>
            <h1>{specialist.surname}</h1>
            <p> {specialist.age} años</p>
            <p>{specialist.specialistType}</p>
            <p>{specialist.location}</p>
            <p>Horario: {specialist.schedule}</p>
            <div className="specialist-admin-buttons">
              {isAdmin && (
                <>
                  <CustomButton
                    buttonFunction={() => deleteSpecialist(specialist._id)}
                    text={
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/58/58326.png"
                        alt="papelera"
                        className="papelera"
                      ></img>
                    }
                    buttonTypeClass="delete custom"
                    buttonHeight="50px"
                    buttonWidth=""
                  ></CustomButton>
                  {/* <button onClick={() => deleteSpecialist(specialist._id)}>
                  Eliminar
                </button> */}

                  <Link
                    to={`/specialistsPut/edit/${specialist._id}`}
                    key={specialist._id}
                  >
                    <CustomButton
                      text={
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/3597/3597088.png"
                          alt="papelera"
                          className="papelera"
                        ></img>
                      }
                      buttonTypeClass="normal custom"
                      buttonHeight="50px"
                      buttonWidth="xs"
                    />
                  </Link>
                </>
              )}
            </div>
          </div>
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
