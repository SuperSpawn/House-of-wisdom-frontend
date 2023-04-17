import React from "react";

export const GenericSelect = ({ options, handlers }) => {
  const changeHandler = (e) => {
    handlers[e.target.value]();
  };

  return (
    <select onChange={changeHandler}>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};
