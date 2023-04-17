import React from "react";
import { Outlet, Link } from "react-router-dom";

//styles
import "../styles/reset.css";
import "../styles/utils.css";
import "../styles/UserInputBox.css";

export const UserInputBox = ({ inputArray, linkArray, buttonArray }) => {
  return (
    <div className="UserInputBox">
      <div className="UserInputBox-inputs">
        {inputArray &&
          inputArray.map((input) => {
            return (
              <input
                key={input.placeholder}
                type={input.type}
                ref={input.ref}
                placeholder={input.placeholder}
              />
            );
          })}
      </div>
      <div className="UserInputBox-buttons">
        {buttonArray &&
          buttonArray.map((button) => {
            return (
              <button
                key={button.text}
                disabled={button.disabled}
                onClick={button.onClick}
              >
                {button.text}
              </button>
            );
          })}
      </div>
      <div className="UserInputBox-links">
        {linkArray &&
          linkArray.map((link) => {
            return (
              <Link key={link.text} to={link.to}>
                {link.text}
              </Link>
            );
          })}
      </div>
      <Outlet />
    </div>
  );
};
