import React from "react";
import "./AboutUs.scss";

const Nosotros = () => {
  return (
    <div className="aboutus-box">
      <div className="about-project">
        <div className="container-img-nos">
          <img
          className="imgprincipalabout"
            src="./assets/groupImage.jpg"
            alt="foto de grupo"
          ></img>
        </div>

        <div className="twobox">
          <h2 className="titleAbout"> SimpleMente </h2>
          <p className="descripAbout">
            Este proyecto nace para facilitar información y orientación a las
            personas con síntomas de alzheimer y otras demencias, así como para
            sus familiares. Fomentamos la investigación de patologías
            neurodegenerativas y proporcionamos los mejores especialistas del
            ámbito de la salud para el cuidado de los pacientes
          </p>
        </div>
      </div>

      <div>
        <div className="about-us-box">
           <div className="titlecreadores">
          <h2 className="titlesectioncreadores"> Creadores</h2>
          </div>
          <div className="aboutus-box-eachCard">
            <img className="photosingleteam" src="https://res.cloudinary.com/dt1kuzdty/image/upload/v1670338456/proyecto-diseases/BEFB8849-0606-480F-A711-D3D825F6230B_rgcbhb.jpg" alt="face"/>
            <h1 className="nameteams">Francesc Greoles</h1>
            <div className="linksredes">
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
          </div>

          <div className="aboutus-box-eachCard">
          <img className="photosingleteam" src="https://res.cloudinary.com/dt1kuzdty/image/upload/v1670338482/proyecto-diseases/IMG_2374_hgpjbh.jpg" alt="face"/>
            <h1 className="nameteams">Marta Gil Cárdenas</h1>
            <div className="linksredes">
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
          </div>

          <div className="aboutus-box-eachCard">
          <img className="photosingleteam" src="https://res.cloudinary.com/dt1kuzdty/image/upload/v1670066908/proyecto-diseases/hwumsfkcuzs8d8crzdoo.jpg" alt="face"/>
            <h1 className="nameteams">Álvaro Ruiz Navarro</h1>
            <div className="linksredes">
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
          </div>

          <div className="aboutus-box-eachCard">
          <img className="photosingleteam" src="https://res.cloudinary.com/dt1kuzdty/image/upload/v1670338466/proyecto-diseases/7BE08331-2817-463A-9898-B6F74EE4E9AA_k1zfso.jpg" alt="face"/>
            <h1 className="nameteams">Edward Mosquera</h1>
            <div className="linksredes">
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
      </div>
    </div>
  );
};

export default Nosotros;
