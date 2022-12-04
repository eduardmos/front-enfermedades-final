import React from "react";
import "./GraphicAlzheimer.scss";

import { Bar } from "react-chartjs-2";
// import { CategoryScale } from "chart.js";
// import Chart from "chart.js/auto";
// import { CategoryScale, Chart } from "chart.js";

// Chart.register(CategoryScale);
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const GraphicAlzheimer = () => {
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
        label: "PARKINSON",

        backgroundColor: "black",
        borderColor: "green",
        borderWith: 1,
        hoverBackgroundColor: "blue",
        hoverBackground: "green",
        data: [0, 40, 3550, 10045, 8890, 20019, 53450],
      },
    ],
  };

  const opciones = {
    maintainAspectRadio: false,
    responsive: true,
  };

  return (
    <div style={{ width: "100%", height: "500px" }}>
      <h2>AFECTADOS</h2>
      <Bar data={data} options={opciones} />
    </div>
  );
};

export default GraphicAlzheimer;
