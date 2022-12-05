import React from "react";
import "./Footer.scss";
import { useState } from "react";

const Footer = () => {
  const [showfirst, setShowFirst] = useState(true);
  const [showsecond, setShowSecond] = useState(true);
  const [showthird, setShowThird] = useState(true);
  const [showfourth, setShowFourth] = useState(true);
  return (
    <div className="footer-box">
      {showfirst ? (
        <div>
          <h4>¿Demencia y Alzheimer son lo mismo?</h4>
        </div>
      ) : (
        <div>
          <h4>¿Demencia y Alzheimer son lo mismo?</h4>
          <p>
            La demencia engloba a diferentes tipos de enfermedades que suponen
            la pérdida gradual de la memoria y las habilidades en general. La
            enfermedad de Alzheimer es, actualmente, la causa más común de
            demencia. La esperanza de vida de un paciente con demencia no se ve
            alterada por sufrir este deterioro; en cambio, una persona con
            Alzheimer si la ve reducida.
          </p>
        </div>
      )}
      <button onClick={() => setShowFirst(!showfirst)}>
        {showfirst ? "▼" : "▲"}
      </button>

      {showsecond ? (
        <div>
          <h4>¿El Alzheimer es hereditario?</h4>
        </div>
      ) : (
        <div>
          <h4>¿El Alzheimer es hereditario?</h4>
          <p>
            Un porcentaje muy pequeño de personas que desarrollan Alzheimer lo
            hacen por causas genéticas hereditarias (1%). El Alzheimer
            hereditario es causado por mutaciones genéticas muy raras y nada
            frecuentes. Por tanto, tener padres con la enfermedad no implica que
            los hijos la sufran.
          </p>
        </div>
      )}
      <button onClick={() => setShowSecond(!showsecond)}>
        {showsecond ? "▼" : "▲"}
      </button>
      {showthird ? (
        <div>
          <h4>¿Cual es la causa del Parkinson?</h4>
        </div>
      ) : (
        <div>
          <h4>¿Cual es la causa del Parkinson?</h4>
          <p>
            Lo que causa el Parkinson sigue siendo en gran parte desconocido. La
            genética causa alrededor de un 10 a 15 por ciento de todo el
            Parkinson. El 85 a 90 por ciento restante de los casos se clasifican
            como esporádicos (u ocasionales). Aunque no hay cura, las opciones
            de tratamiento varían e incluyen medicamentos y cirugía.
          </p>
        </div>
      )}
      <button onClick={() => setShowThird(!showthird)}>
        {showthird ? "▼" : "▲"}
      </button>

      {showfourth ? (
        <div>
          <h4>¿Qué diferencias hay entre la ELA y la EM?</h4>
        </div>
      ) : (
        <div>
          <h4>¿El Alzheimer es hereditario?</h4>
          <p>
            Tanto la Esclerosis Múltiple (EM) como la ELA son enfermedades
            afectan el sistema nervioso central, el cerebro y la médula espinal.
            A pesar de sus similitudes, podemos observar que la ELA es más común
            en los hombres que en las mujeres y aparece en cualquier rango de
            edad entre los 4 y los 70 años. Por el contrario, la esclerosis
            múltiple es más común en las mujeres y generalmente ocurre entre los
            20-50 años.
          </p>
        </div>
      )}
      <button onClick={() => setShowFourth(!showfourth)}>
        {showfourth ? "▼" : "▲"}
      </button>
    </div>
  );
};

export default Footer;
