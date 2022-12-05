import React from "react";
import "./Footer.scss";
import { useState } from "react";

const Footer = () => {
  const [showAll, setShowAll] = useState(true);
  return (
    <div>
      <button onClick={() => setShowAll(!showAll)}>
        {" "}
        {showAll ? "ver" : "no"}
      </button>
      {showAll ? (
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
    </div>
  );
};

export default Footer;
