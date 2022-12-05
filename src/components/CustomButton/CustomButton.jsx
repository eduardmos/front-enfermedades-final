import React from "react";
import "./CustomButton.scss";

const CustomButton = ({ text, funcion, buttonTypeClass }) => {
  return (
    <button className={buttonTypeClass} onClick={funcion}>
      {text}
    </button>
  );
};

export default CustomButton;
