import React from "react";
import GraphicAlzheimer from "./GraphicAlzheimer/GraphicAlzheimer";
import GraphicELA from "./GraphicELA/GraphicELA";
import GraphicEsclerosis from "./GraphicEsclerosis/GraphicEsclerosis";
import GraphicParkinson from "./GraphicParkinson copy 3/GraphicParkinson";
import "./GraphicsPage.scss";

const GraphicsPage = () => {
  return (
    <div className="graphics">
      <GraphicAlzheimer />
      <GraphicEsclerosis />
      <GraphicELA />
      <GraphicParkinson />
    </div>
  );
};

export default GraphicsPage;
