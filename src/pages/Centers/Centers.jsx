import React, { useEffect } from "react";
import "./Centers.scss";
import { useDispatch, useSelector } from "react-redux";
import { getCenters } from "../../redux/centers/centers.functions";

const Centers = () => {
  const dispatch = useDispatch();
  const { centers, isLoading, error } = useSelector((state) => state.centers);

  useEffect(() => {
    dispatch(getCenters());
  }, []);

  return (
    <div>
      {isLoading ? (
        <img
          src="https://i.pinimg.com/originals/3d/6a/a9/3d6aa9082f3c9e285df9970dc7b762ac.gif"
          alt="loading"
        />
      ) : !error ? (
        centers.map((center) => {
          return (
            <div>
              <h1>{center.name}</h1>
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

export default Centers;