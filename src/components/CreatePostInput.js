import React, { useState } from "react";

//styles
import "../styles/reset.css";
import "../styles/utils.css";

//components
import { MarkupInputTypes } from "./MarkupInputTypes";

//services
import toMarkup from "../services/toMarkup";

export const CreatePostInput = ({
  markdown,
  setMarkdown,
  setShowMarkdown,
  setShowTextMarkdown,
}) => {
  const [selectedValue, setSelectedValue] = useState("h1");
  const [firstInput, setFirstInput] = useState("");
  const [secondInput, setSecondInput] = useState("");

  const resetHandler = () => {
    setMarkdown("");
    setFirstInput("");
    setSecondInput("");
  };
  const addHandler = () => {
    setMarkdown(
      (markdown) => markdown + toMarkup(selectedValue, firstInput, secondInput)
    );
    setFirstInput("");
    setSecondInput("");
  };
  const toggleShowMarkdown = () => {
    setShowMarkdown((markdown) => !markdown);
  };
  const toggleShowTextMarkdown = () => {
    setShowTextMarkdown((markdown) => !markdown);
  };

  const handleSelectChange = (e) => {
    setSelectedValue(e.target.value);
  };

  return (
    <div>
      <div>
        <select name="options" onChange={handleSelectChange}>
          <option value="h1">Title</option>
          <option value="h2">Sub-title</option>
          <option value="p">Paragraph</option>
          <option value="bold">Bold</option>
          <option value="img">Image</option>
          <option value="a">Link</option>
          <option value="quote">Quote</option>
          <option value="code">Code</option>
          <option value="h3">h3</option>
          <option value="h4">h4</option>
          <option value="h5">h5</option>
          <option value="h6">h6</option>
          <option value="h7">h7</option>
        </select>
        <button onClick={addHandler}>Add</button>
        <button onClick={resetHandler}>Reset</button>
        <button onClick={toggleShowTextMarkdown}>Toggle markdown</button>
        <button onClick={toggleShowMarkdown}>Toggle final</button>
      </div>
      <MarkupInputTypes
        type={selectedValue}
        setFirstInput={setFirstInput}
        setSecondInput={setSecondInput}
        firstInput={firstInput}
        secondInput={secondInput}
      />
    </div>
  );
};
