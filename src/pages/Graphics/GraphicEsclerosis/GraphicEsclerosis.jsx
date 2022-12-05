import React from "react";

import { Bar } from "react-chartjs-2";
// import { CategoryScale } from "chart.js";
// import Chart from "chart.js/auto";
// import { CategoryScale, Chart } from "chart.js";

// Chart.register(CategoryScale);
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const GraphicEsclerosis = () => {
  const data = {
    labels: [
      "25 a 44 años",
      "45 a 64 años",
      "65 a 79 años",
      "70 a 74 años",
      "75 a 79 años",
      "80 o más",
    ],
    datasets: [
      {
        label: "Afectados",
        backgroundColor: "black",
        borderColor: "green",
        borderWith: 1,
        hoverBackgroundColor: "blue",
        hoverBackground: "green",
        data: [530, 2010, 3339, 3050, 3270, 3970],
      },
    ],
  };

  const opciones = {
    maintainAspectRadio: false,
    responsive: true,
  };

  return (
    <div className="general-graphic">
      <h2>ESCLEROSIS MULTIPLE</h2>
      <div style={{ width: "75%" }}>
        <Bar data={data} options={opciones} />
      </div>
    </div>
  );
};

export default GraphicEsclerosis;
