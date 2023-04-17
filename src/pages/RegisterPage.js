import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

//styles
import "../styles/reset.css";
import "../styles/utils.css";
import "../styles/RegisterPage.css";

//components
import { UserInputBox } from "../components/UserInputBox";
import { Loading } from "../components/Loading";
import { NoPage } from "./NoPage";

//hooks
import usePostFunction from "../hooks/usePostFunction";

//constants
import { webLink } from "../constants";

export const RegisterPage = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();

  const { loading, error, response, makePostRequest } = usePostFunction(
    webLink + "users"
  );

  if (loading) return <Loading />;
  if (error)
    return <NoPage errorCode="500" errorMessage="Couldn't register user" />;
  if (response) {
    const data = response.data.data;
    if (response.data.success === false) {
      return <NoPage errorCode="500" errorMessage={response.data.error} />;
    }
    localStorage.setItem("user", JSON.stringify(data));
    navigate("/");
  }

  const registerHandler = () => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    if (!name || !email || !password) {
      //error
    }
    const user = { name, email, password };
    makePostRequest(user, null);
  };

  const inputArray = [
    { type: "text", placeholder: "Name", ref: nameRef },
    { type: "email", placeholder: "Email", ref: emailRef },
    { type: "password", placeholder: "Password", ref: passwordRef },
  ];
  const buttonArray = [
    { text: "Register", onClick: registerHandler, disabled: false },
  ];

  return (
    <div className="LoginPage">
      <UserInputBox inputArray={inputArray} buttonArray={buttonArray} />
    </div>
  );
};
