import React from "react";
import { useState } from "react";
import "./GraphicsComponent.scss";
import GraphicAlzheimer from "../pages/Graphics/GraphicAlzheimer/GraphicAlzheimer";
import GraphicELA from "../pages/Graphics/GraphicELA/GraphicELA";
import GraphicEsclerosis from "../pages/Graphics/GraphicEsclerosis/GraphicEsclerosis";
import GraphicParkinson from "../pages/Graphics/GraphicParkinson copy 3/GraphicParkinson";
import GraphicsPage from "../pages/Graphics/GraphicsPage";

export const Pages = {
  Alzheimer: "Alzheimer",
  EsclerosisMultiple: "Esclerosis Multiple",
  EslcerosisLateral: "Esclerosis Lateral",
  Parkinson: "Parkinson",
};

const GraphicsComponent = () => {
  const [currentPage, setCurrentPage] = useState(Pages.Alzheimer);
  console.log(setCurrentPage);
  const renderGraphic = () => {
    if (currentPage === Pages.Alzheimer) return <GraphicAlzheimer />;
    else if (currentPage === Pages.EsclerosisMultiple)
      return <GraphicEsclerosis />;
    else if (currentPage === Pages.EslcerosisLateral) return <GraphicELA />;
    else if (currentPage === Pages.Parkinson) return <GraphicParkinson />;
  };

  console.log(currentPage);
  return (
    <div>
      <section className="general-container-graphics">
        {renderGraphic()}
        <GraphicsPage setCurrentPage={setCurrentPage} />
      </section>
    </div>
  );
};

export default GraphicsComponent;
