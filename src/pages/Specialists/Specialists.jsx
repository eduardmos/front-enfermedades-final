import React, { useEffect, useState } from "react";
import "./Specialists.scss";
import { useDispatch, useSelector } from "react-redux";
import { getSpecialists } from "../../redux/specialists/specialists.functions";
import { Link, NavLink } from "react-router-dom";

import CustomButton from "../../components/CustomButton/CustomButton";

const Specialists = () => {
  const dispatch = useDispatch();
  const { specialists, isLoading, error } = useSelector(
    (state) => state.specialists
  );

  // const watchMore = (id) => {
  //   dispatch(getByIdSpecialists(id));
  // };

  useEffect(() => {
    dispatch(getSpecialists());
  }, []);

  const { user } = useSelector((state) => state.auth);
  const isAdmin = user && user.rol === "admin";

  const [query, setQuery] = useState("");
  return (
    <div className="specialists-box">
      {isAdmin && (
        <div className="button-Specialist-Create">
          <NavLink to={"/specialistsCreate"}>
            <CustomButton
              text="CREAR ESPECIALISTA"
              buttonTypeClass="normal custom"
              buttonHeight="50px"
              buttonWidth="xl"
            />
          </NavLink>
        </div>
      )}
      <div className="search-specialist">
        <label>
          <h2 className="input-text">
            Encuentra al profesional que más se adapte a ti
          </h2>
          <div className="search-specialist-select">
            <select
              type="text"
              defaultValue={"Default"}
              className="button-search-on"
              onChange={(e) => setQuery(e.target.value.toLowerCase())}
            >
              <option>fisioterapeuta</option>
              <option>auxiliar de Enfermeria</option>
              <option>psicologo Especializado</option>
              <option>terapeuta</option>
              <option>logopeda</option>
            </select>
          </div>
        </label>
      </div>
      {isLoading ? (
        <img
          className="loading-pic"
          src="https://cifras.unidadvictimas.gov.co/Cifras/images/loaderColores.gif"
          alt="loading"
        />
      ) : !error ? (
        specialists
          .filter((specialist) =>
            specialist.specialistType.toLowerCase().includes(query)
          )
          .map((specialist) => {
            return (
              <div className="specialist-box-eachCard" key={specialist._id}>
                <img
                  className="imgCardSpecialist"
                  src={specialist.img}
                  alt="specialistImg"
                ></img>
                <div className="boxInfoCard">
                  <p>{specialist.specialistType}</p>

                  <h1>{specialist.name}</h1>
                  <div className="button-specialist"></div>
                  <Link
                    to={`/specialists/${specialist._id}`}
                    key={specialist._id}
                  >
                    Ver Mas
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

export default Specialists;
