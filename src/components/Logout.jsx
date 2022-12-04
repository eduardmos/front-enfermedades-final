import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../redux/auth/auth.actions";
import CustomButton from "../components/CustomButton/CustomButton";

const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(logoutUser(navigate));
  };
  return (
     <button onClick={logOut}>Log Out</button>
    // <CustomButton text="Log Out" onClick={logOut}></CustomButton>
  );
};

export default Logout;
