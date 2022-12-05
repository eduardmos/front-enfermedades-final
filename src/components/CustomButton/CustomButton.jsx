import React from "react";
import "./CustomButton.scss";

const CustomButton = ({
  text,
  buttonFunction,
  buttonTypeClass,
  buttonHeight,
  buttonWidth,
}) => {
  return (
    <button
      className={buttonTypeClass}
      onClick={buttonFunction}
      style={{
        height: buttonHeight,
        width:
          buttonWidth === "xl"
            ? "300px"
            : buttonWidth === "l"
            ? "170px"
            : buttonWidth === "xs"
            ? "50px"
            : "72px",
      }}
    >
      {text}
    </button>
  );
};

export default CustomButton;
