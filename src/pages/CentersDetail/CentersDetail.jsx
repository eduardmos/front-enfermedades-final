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
          className="loading-pic"
          src="https://cifras.unidadvictimas.gov.co/Cifras/images/loaderColores.gif"
          alt="loading"
        />
      ) : !error ? (
        <div className="center-box" key={center._id}>
          <img src={center.img} alt="imagen"></img>
          <h1 className="centerDetailsname">{center.name}</h1>
          <p className="centerDetaildescription">{center.description}</p>
          <div className="boxDateDetails">
            <p>📍 {center.ubication}</p>
            <p>📞 {center.number}</p>
            <p>🕐 {center.schedule}</p>
          </div>
          <div>
            {isAdmin && (
              <>
                <CustomButton
                  buttonFunction={() => deleteCenter(center._id)}
                  text={
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/58/58326.png"
                      alt="papelera"
                      className="papelera"
                    ></img>
                  }
                  buttonTypeClass="delete custom"
                  buttonHeight="50px"
                  buttonWidth="xs"
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
                    buttonTypeClass="normal custom"
                    buttonHeight="50px"
                    buttonWidth="xs"
                  />
                </Link>
              </>
            )}
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

export default CentersDetail;
