import React, { useEffect } from "react";
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

  const { user } = useSelector((state) => state.auth);
  const isAdmin = user && user.rol === "admin";

  return (
    <div>
      {isAdmin && (
        <div>
          <NavLink to={"/specialistsCreate"}>+</NavLink>
        </div>
      )}
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
              {/* <button onClick={() => watchMore(specialist._id)}>
                Detalles
              </button> */}

              <Link to={`/specialists/${specialist._id}`} key={specialist._id}>
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
