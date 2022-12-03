import React from "react";
import { useSelector } from "react-redux";

import Diseases from "../Diseases/Diseases";
import GraphicAlzheimer from "../Graphics/GraphicAlzheimer/GraphicAlzheimer";
import GraphicELA from "../Graphics/GraphicELA/GraphicELA";
import GraphicEsclerosis from "../Graphics/GraphicEsclerosis/GraphicEsclerosis";
import GraphicParkinson from "../Graphics/GraphicParkinson copy 3/GraphicParkinson";
import "./Home.scss";

const Home = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div>
      <Diseases />
      {user && (
        <>
          <GraphicAlzheimer />
          <GraphicEsclerosis />
          <GraphicELA />
          <GraphicParkinson />
        </>
      )}
    </div>
  );
};

export default Home;
