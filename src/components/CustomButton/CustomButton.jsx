import React from "react";
import "./CustomButton.scss";

const CustomButton = ({
  text,
  funcion,
  buttonTypeClass,
  buttonHeight,
  size,
}) => {
  return (
    <button
      className={buttonTypeClass}
      onClick={funcion}
      height={buttonHeight}
      width={size === "xl" ? "300px" : size === "l" ? "200px" : "100px"}
    >
      {text}
    </button>
  );
};

export default CustomButton;
