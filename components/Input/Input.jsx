import React from "react";
import Style from './Input.module.css';

const Input = ({ inputType, title, placeholder, value, onChange }) => {
  return (
    <div className={Style.input}>
      <p>{title}</p>
      {inputType === "text" ? (
        <div className={Style.input_box}>
          <input 
            type="text" 
            placeholder={placeholder} 
            className={Style.input_box_form} 
            value={value} // Set the input value
            onChange={onChange} // Handle change to update value
          />
        </div>
      ) : null}
    </div>
  );
};

export default Input;
