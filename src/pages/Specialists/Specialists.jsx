import React, { useEffect, useState } from "react";
import "./Specialists.scss";
import { useDispatch, useSelector } from "react-redux";
import { getSpecialists } from "../../redux/specialists/specialists.functions";
import { Link, NavLink } from "react-router-dom";
import Select from "react-select";

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

  // const [query, setQuery] = useState("");
  const { user } = useSelector((state) => state.auth);
  const isAdmin = user && user.rol === "admin";

  const suppliers = [
    { name: "Fisioterapeuta" },
    { name: "Auxiliar de Enfermeria" },
    { name: "Terapeuta" },
    { name: "Psicologo Especializado" },
    { name: "Logopeda" },
  ];

  const [selectedSupplier, setSelectedSupplier] = useState();

  const handleSelectChange = ({ value }) => {
    console.log(value);
    setSelectedSupplier(value);
  };

  return (
    <div className="specialists-box">
      {isAdmin && (
        <div className="button-Specialist-Create">
          <NavLink to={"/specialistsCreate"}>+</NavLink>
        </div>
      )}
      <div className="search-specialist">
        <label>
          <h6 className="input-text">
            Encuentra al profesional que más se adapte a ti{" "}
          </h6>
          <div>
            <p>Especialista: {selectedSupplier}</p>
            <Select
              options={suppliers.map((sup) => ({ label: sup.name }))}
              onChange={handleSelectChange}
            />
          </div>
        </label>
      </div>
      {isLoading ? (
        <img
          src="https://i.pinimg.com/originals/3d/6a/a9/3d6aa9082f3c9e285df9970dc7b762ac.gif"
          alt="loading"
        />
      ) : !error ? (
        specialists.map((specialist) => {
          return (
            <div className="specialist-box-eachCard" key={specialist._id}>
              <h1>{specialist.name}</h1>
              <img src={specialist.img} alt="specialistImg"></img>
              <p>{specialist.specialistType}</p>
              {/* <button onClick={() => watchMore(specialist._id)}>
                Detalles
              </button> */}
              <div className="button-specialist">
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
