import React from "react";
import { useState } from "react";
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
  let currentComponent = null;
  if (currentPage === Pages.Alzheimer) currentComponent = <GraphicAlzheimer />;
  else if (currentPage === Pages.EsclerosisMultiple)
    currentComponent = <GraphicEsclerosis />;
  else if (currentPage === Pages.EslcerosisLateral)
    currentComponent = <GraphicELA />;
  else if (currentPage === Pages.Parkinson)
    currentComponent = <GraphicParkinson />;

  return (
    <div>
      <GraphicsPage setCurrentPage={setCurrentPage} />
      <section className="general-container">{currentComponent}</section>
    </div>
  );
};

export default GraphicsComponent;
