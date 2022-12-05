import React from "react";
import "./AboutUs.scss";

const Nosotros = () => {
  return (
    <div className="aboutus-box">
      <div className="about-project">
        <h1> SimpleMente </h1>
        <p>
          Este proyecto nace para facilitar información y orientación a las
          personas con síntomas de alzheimer y otras demencias, así como para
          sus familiares. Fomentamos la investigación de patologías
          neurodegenerativas y proporcionamos los mejores especialistas del
          ámbito de la salud para el cuidado de los pacientes
        </p>
      </div>

      <div className="about-us-box">
        <h3> Creado por </h3>
        <div className="aboutus-box-eachCard">
          <h4>Frances Greoles</h4>
          <a href="https://www.linkedin.com/in/francesc-greoles-a215a5152/">
            <img
              src="https://cdn-icons-png.flaticon.com/512/61/61109.png?w=360"
              alt="linkedin"
            />
          </a>
          <a href="https://github.com/cescgreoles">
            <img
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              alt="GitHub"
            />
          </a>
        </div>

        <div className="aboutus-box-eachCard">
          <h4>Marta Gil Cárdenas</h4>

          <a href="https://www.linkedin.com/in/marta-gil-desarrollofullstack/">
            <img
              src="https://cdn-icons-png.flaticon.com/512/61/61109.png?w=360"
              alt="linkedin"
            />
          </a>
          <a href="https://github.com/MartaGilC">
            <img
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              alt="GitHub"
            />
          </a>
        </div>

        <div className="aboutus-box-eachCard">
          <h4>Álvaro Ruiz Navarro</h4>
          <a href="https://www.linkedin.com/in/alvaro-ruiz-navarro/">
            <img
              src="https://cdn-icons-png.flaticon.com/512/61/61109.png?w=360"
              alt="linkedin"
            />
          </a>
          <a href="https://github.com/AlvaroUpgrade">
            <img
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              alt="GitHub"
            />
          </a>
        </div>

        <div className="aboutus-box-eachCard">
          <h4>Edward Mosquera</h4>
          <a href="https://www.linkedin.com/in/edwardmos/">
            <img
              src="https://cdn-icons-png.flaticon.com/512/61/61109.png?w=360"
              alt="linkedin"
            />
          </a>
          <a href="https://github.com/eduardmos">
            <img
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              alt="GitHub"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nosotros;
