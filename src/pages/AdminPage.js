import React from "react";

//styles
import "../styles/reset.css";
import "../styles/utils.css";

//components
import { NoPage } from "./NoPage";

export const AdminPage = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user)
    return <NoPage errorCode="403" errorMessage="Cannot access admin page" />;
  //Get users

  //display users
};
