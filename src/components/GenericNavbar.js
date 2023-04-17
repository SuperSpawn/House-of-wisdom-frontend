import React from "react";

//styles
import "../styles/reset.css";
import "../styles/utils.css";
import "../styles/GenericNavbar.css";

export const GenericNavbar = (props) => {
  return (
    <div
      style={{ gap: `${props.gap}rem` }}
      className={"GenericNavbar " + props.align}
    >
      {props.children}
    </div>
  );
};
