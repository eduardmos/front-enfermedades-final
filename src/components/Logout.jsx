import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../redux/auth/auth.actions";
import CustomButton from "./CustomButton/CustomButton";
// import CustomButton from "../components/CustomButton/CustomButton";

const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(logoutUser(navigate));
  };
  return (
    // <button onClick={logOut} className="bn632-hover bn24">
    //   Log Out
    // </button>

    <CustomButton funcion={logOut} text="Log Out" />
  );
};

export default Logout;
