import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Diseases from "../Diseases/Diseases";
import "./Home.scss";

const Home = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div>
      <Diseases />
    </div>
  );
};

export default Home;
