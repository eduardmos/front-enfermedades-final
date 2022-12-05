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

    <CustomButton
      buttonFunction={logOut}
      text="Log Out"
      buttonTypeClass="normal custom"
      buttonHeight="60px"
      buttonWidth="l"
    />
  );
};

export default Logout;
