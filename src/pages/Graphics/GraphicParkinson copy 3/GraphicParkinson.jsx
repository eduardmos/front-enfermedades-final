import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const GraphicParkinson = () => {
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

        backgroundColor: "#1D2233",
        borderColor: "green",
        borderWith: 1,
        hoverBackgroundColor:  "#793cae",
        hoverBackground: "green",
        data: [1100, 8500, 8580, 3440, 8220, 14900, 29400],
      },
    ],
  };


  const data3 = {
    labels: [
      "2016",
      "2017",
      "2018",
      "2019",
      "2020",
      "2021",
    ],
    datasets: [
      {
        label: "Mortalidad",

        backgroundColor: "#1D2233",
        borderColor: "green",
        borderWith: 1,
        hoverBackgroundColor: "#793cae",
        hoverBackground: "green",
        data: [3133, 4500, 4591, 3440, 3220, 2900, 4400],
      },
    ],
  };


  const opciones = {
    maintainAspectRadio: false,
   
  };

  return (
    <div className="general-graphic">
      <h2>PARKINSON</h2>
     
    <div>     
      <Bar data={data} options={opciones} />
    </div>
   <div className="bottom--lit">  

        <Bar data={data3} options={opciones} />
       
    
    </div>
        
  </div>
    

    
  );
};

export default GraphicParkinson;
