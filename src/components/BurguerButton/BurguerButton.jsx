import React from "react";
import "./BurguerButton.scss";

function BurguerButton(props) {
  return (
    <div
      onClick={props.handleClick}
      className={`nav-icon ${props.clicked ? "open" : ""}`}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

export default BurguerButton;
