import React from "react";

//styles
import "../styles/NoPage.css";

export const NoPage = ({ errorCode, errorMessage }) => {
  return (
    <div className="NoPage">
      <h1>{errorCode}</h1>
      <h3>{errorMessage}</h3>
    </div>
  );
};
