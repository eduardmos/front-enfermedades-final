import React from "react";
import "./CentersDetail";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  deleteCenters,
  getByIdCenters,
} from "../../redux/centers/centers.functions";
import "./CentersDetail.scss";
import CustomButton from "../../components/CustomButton/CustomButton";
const CentersDetail = () => {
  const { id } = useParams();

  let navigate = useNavigate();
  const dispatch = useDispatch();

  const { center, isLoading, error } = useSelector((state) => state.centers);

  const deleteCenter = (id) => {
    dispatch(deleteCenters(id, navigate));
  };

  useEffect(() => {
    dispatch(getByIdCenters(id));
  }, []);

  const { user } = useSelector((state) => state.auth);
  const isAdmin = user && user.rol === "admin";

  return (
    <div className="first-center-box">
      {isLoading ? (
        <img
          src="https://i.pinimg.com/originals/3d/6a/a9/3d6aa9082f3c9e285df9970dc7b762ac.gif"
          alt="loading"
        />
      ) : !error ? (
        <div className="center-box" key={center._id}>
          <h1>{center.name}</h1>
          <img src={center.img} alt="imagen"></img>
          <p>{center.location}</p>
          <p>{center.schedule}</p>
          {isAdmin && (
            <>
              <CustomButton
                funcion={() => deleteCenter(center._id)}
                text={
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/58/58326.png"
                    alt="papelera"
                    className="papelera"
                  ></img>
                }
              ></CustomButton>

              <Link to={`/centersPut/edit/${center._id}`} key={center._id}>
                <CustomButton
                  text={
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/3597/3597088.png"
                      alt="papelera"
                      className="papelera"
                    ></img>
                  }
                />
              </Link>
            </>
          )}
        </div>
      ) : (
        <div>
          <h3>{error}</h3>
        </div>
      )}
    </div>
  );
};

export default CentersDetail;
