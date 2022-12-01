import React, { useEffect } from "react";
import "./Diseases.scss";
import { useDispatch, useSelector } from "react-redux";
import { getDiseases } from "../../redux/diseases/diseases.functions";

const Diseases = () => {
  const dispatch = useDispatch();
  const { diseases, isLoading, error } = useSelector((state) => state.diseases);

  useEffect(() => {
    dispatch(getDiseases());
  }, []);

  return (
    <div>
      {isLoading ? (
        <img
          src="https://i.pinimg.com/originals/3d/6a/a9/3d6aa9082f3c9e285df9970dc7b762ac.gif"
          alt="loading"
        />
      ) : !error ? (
        diseases.map((disease) => {
          return (
            <div>
              <h1>{disease.name}</h1>
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
