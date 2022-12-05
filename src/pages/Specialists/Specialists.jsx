import React, { useEffect, useState } from "react";
import "./Specialists.scss";
import { useDispatch, useSelector } from "react-redux";
import { getSpecialists } from "../../redux/specialists/specialists.functions";
import { Link, NavLink } from "react-router-dom";
import Select from "react-select";
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
            <CustomButton text="CREAR ESPECIALISTA" />
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
              <option>Fisioterapeuta</option>
              <option>Auxiliar de Enfermeria</option>
              <option>Psicologo Especializado</option>
              <option>Terapeuta</option>
              <option>Logopeda</option>
            </select>
          </div>
        </label>
      </div>
      {isLoading ? (
        <img
          src="https://i.pinimg.com/originals/3d/6a/a9/3d6aa9082f3c9e285df9970dc7b762ac.gif"
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
                  {/* <button onClick={() => watchMore(specialist._id)}>
                Detalles
              </button> */}
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
