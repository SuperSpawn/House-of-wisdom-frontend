import React from "react";

//styles
import "../styles/CodeBlock.css";

export function CodeBlock(props) {
  return <h1 className="CodeBlock">{props.children}</h1>;
}
