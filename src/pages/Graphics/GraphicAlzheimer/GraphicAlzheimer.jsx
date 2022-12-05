import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const GraphicAlzheimer = () => {
  const data = {
    labels: [
      "25-44 años",
      "45-64 años",
      "65-79 años",
      "70-74 años",
      "75-79 años",
      "80-más",
    ],
    datasets: [
      {
        label: "Afectados",

        backgroundColor: "#1D2233",
        borderColor: "green",
        borderWith: 1,
        hoverBackgroundColor: "blue",
        hoverBackground: "green",
        data: [0, 40, 3550, 10045, 8890, 20019, 53450],
      },
    ],
  };



  const data3 = {
    labels: [
      "2015",
      "2016",
      "2017",
      "2018",
      "2019",
      "2020",
    ],
    datasets: [
      {
        label: "Mortalidad",

        backgroundColor: "#1D2233",
        borderColor: "green",
        borderWith: 1,
        hoverBackgroundColor:  "#793cae",
        hoverBackground: "green",
        data: [8973, 9050, 9923, 10045, 11006, 10345, 10876],
      },
    ],
  };


  const opciones = {
    maintainAspectRadio: false,
    responsive: true,
  };

  return (
    <div className="general-graphic">
      <h2>ALZHEIMER</h2>
      <div>  
        <Bar data={data} options={opciones} />
        <div className="bottom--lit"> <Bar data={data3} options={opciones} /></div>
        
        </div>
     
       
       
      
    </div>
  );
};

export default GraphicAlzheimer;
