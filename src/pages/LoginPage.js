import React, { useRef, useState } from "react";
import axios from "axios";

//styles
import "../styles/reset.css";
import "../styles/utils.css";
import "../styles/LoginPage.css";

//components
import { UserInputBox } from "../components/UserInputBox";
import { Loading } from "../components/Loading";
import { NoPage } from "./NoPage";

//hooks
import { useNavigate } from "react-router-dom";

//constants
import { webLink } from "../constants";

export const LoginPage = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <NoPage errorCode="404" errorMessage="Failed to login" />;
  }

  const inputArray = [
    { type: "email", placeholder: "Email", ref: emailRef },
    { type: "password", placeholder: "Password", ref: passwordRef },
  ];
  const linkArray = [
    { to: "/register", text: "don't have an account? register a new one" },
  ];

  const loginHandler = () => {
    setLoading(true);
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    axios
      .post(webLink + "users/login", {
        email,
        password,
      })
      .then((res) => res.data)
      .then((data) => {
        setLoading(false);
        if (data.success === false) {
          setError(true);
        } else {
          localStorage.setItem("user", JSON.stringify(data.data));
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
        setError(true);
        setLoading(false);
      });
  };

  const buttonArray = [
    { text: "Login", onClick: loginHandler, disabled: false },
  ];

  return (
    <div className="LoginPage">
      <UserInputBox
        inputArray={inputArray}
        linkArray={linkArray}
        buttonArray={buttonArray}
      />
    </div>
  );
};
