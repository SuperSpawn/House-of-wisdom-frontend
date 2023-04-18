import React from "react";

//styles
import "../styles/reset.css";
import "../styles/utils.css";
import "../styles/GenericSelect.css";

export const GenericSelect = ({ options, handlers }) => {
  const changeHandler = (e) => {
    handlers[e.target.value]();
  };

  return (
    <select className="GenericSelect" onChange={changeHandler}>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};
