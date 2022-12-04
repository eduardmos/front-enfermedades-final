import React, { useEffect, useState } from "react";
import "./Specialists.scss";
import { useDispatch, useSelector } from "react-redux";
import { getSpecialists } from "../../redux/specialists/specialists.functions";
import { Link, NavLink } from "react-router-dom";

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

  const [query, setQuery] = useState("");
  const { user } = useSelector((state) => state.auth);
  const isAdmin = user && user.rol === "admin";

  return (
    <div>
      {isAdmin && (
        <div>
          <NavLink to={"/specialistsCreate"}>+</NavLink>
        </div>
      )}
      <div className="search-specialist">
        <input
          type="text"
          placeholder="Search..."
          className="button-search-on"
          onChange={(e) => setQuery(e.target.value)}
        ></input>
      </div>
      {isLoading ? (
        <img
          src="https://i.pinimg.com/originals/3d/6a/a9/3d6aa9082f3c9e285df9970dc7b762ac.gif"
          alt="loading"
        />
      ) : !error ? (
        specialists
          .filter((specialist) =>
            (specialist.name + specialist.specialistType)
              .toLowerCase()
              .includes(query)
          )
          .map((specialist) => {
            return (
              <div key={specialist._id}>
                <h1>{specialist.name}</h1>
                <img src={specialist.img} alt="specialistImg"></img>
                <p>{specialist.specialistType}</p>
                {/* <button onClick={() => watchMore(specialist._id)}>
                Detalles
              </button> */}

                <Link
                  to={`/specialists/${specialist._id}`}
                  key={specialist._id}
                >
                  Ver Mas
                </Link>
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
