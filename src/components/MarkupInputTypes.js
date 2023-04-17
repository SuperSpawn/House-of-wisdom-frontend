import React from "react";

//styles
import "../styles/reset.css";
import "../styles/utils.css";
import "../styles/CodeBlock.css";

export const MarkupInputTypes = ({
  type,
  setFirstInput,
  setSecondInput,
  firstInput,
  secondInput,
}) => {
  const changeFirst = (e) => {
    setFirstInput(e.target.value);
  };
  const changeSecond = (e) => {
    setSecondInput(e.target.value);
  };

  switch (type) {
    case "h1":
      return (
        <div>
          <input
            type="text"
            placeholder="Title"
            value={firstInput}
            onChange={changeFirst}
          />
        </div>
      );
    case "h2":
      return (
        <div>
          <input
            type="text"
            placeholder="Sub-title"
            value={firstInput}
            onChange={changeFirst}
          />
        </div>
      );
    case "p":
      return (
        <div>
          <textarea
            type="text"
            placeholder="paragraph"
            value={firstInput}
            onChange={changeFirst}
          />
        </div>
      );
    case "bold":
      return (
        <div>
          <input
            type="text"
            placeholder="Bold text"
            value={firstInput}
            onChange={changeFirst}
          />
        </div>
      );
    case "img":
      return (
        <div>
          <input
            type="text"
            placeholder="image link"
            value={firstInput}
            onChange={changeFirst}
          />
        </div>
      );
    case "a":
      return (
        <div>
          <input
            type="text"
            placeholder="text"
            value={firstInput}
            onChange={changeFirst}
          />
          <input
            type="text"
            placeholder="link"
            value={secondInput}
            onChange={changeSecond}
          />
        </div>
      );
    case "quote":
      return (
        <div>
          <input
            type="text"
            placeholder="quote"
            value={firstInput}
            onChange={changeFirst}
          />
        </div>
      );
    case "code":
      return (
        <div>
          <textarea
            className="CodeBlock"
            placeholder="Code"
            value={firstInput}
            onChange={changeFirst}
          />
        </div>
      );
    case "h3":
      return (
        <div>
          <input
            type="text"
            placeholder="h3"
            value={firstInput}
            onChange={changeFirst}
          />
        </div>
      );
    case "h4":
      return (
        <div>
          <input
            type="text"
            placeholder="h4"
            value={firstInput}
            onChange={changeFirst}
          />
        </div>
      );
    case "h5":
      return (
        <div>
          <input
            type="text"
            placeholder="h5"
            value={firstInput}
            onChange={changeFirst}
          />
        </div>
      );
    case "h6":
      return (
        <div>
          <input
            type="text"
            placeholder="h6"
            value={firstInput}
            onChange={changeFirst}
          />
        </div>
      );
    case "h7":
      return (
        <div>
          <input
            type="text"
            placeholder="h7"
            value={firstInput}
            onChange={changeFirst}
          />
        </div>
      );
    default:
      return <div></div>;
  }
};
