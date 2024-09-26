import React from "react";
import Style from "./Button.module.css";

const Button = ({ btnName, title, handleClick }) => (
  <button className={Style.button} type="button" onClick={handleClick} title={title}>
    {btnName}
  </button>
);

export default Button;
