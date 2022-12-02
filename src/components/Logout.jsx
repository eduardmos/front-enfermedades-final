import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../redux/auth/auth.actions";
//import ReusableButton from './ReusableButton';

const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(logoutUser(navigate));
  };
  return <button onClick={logOut}>Log Out</button>;
};

export default Logout;
