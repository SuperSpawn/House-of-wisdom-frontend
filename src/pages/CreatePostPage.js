import React, { useState, useRef } from "react";
import ReactMarkdown from "react-markdown";
import { useNavigate } from "react-router-dom";

//styles
import "../styles/reset.css";
import "../styles/utils.css";

//components
import { CreatePostInput } from "../components/CreatePostInput";
import { Loading } from "../components/Loading";
import { NoPage } from "./NoPage";

//hooks
import usePostFunction from "../hooks/usePostFunction";

//constants
import { webLink } from "../constants";

//render components
import { CodeBlock } from "../services/CodeBlock";

export const CreatePostPage = () => {
  const [markdown, setMarkdown] = useState("");
  const [showMarkdown, setShowMarkdown] = useState(true);
  const [showTextMarkdown, setShowTextMarkdown] = useState(false);
  const navigate = useNavigate();
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const { loading, error, response, makePostRequest } = usePostFunction(
    webLink + "posts"
  );

  const renderers = {
    code: CodeBlock,
  };

  const user = localStorage.getItem("user");
  if (!user) {
    navigate("/login");
  }

  const postHandler = () => {
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    if (title === "" || description === "") {
      //error
      return;
    }
    const post = { title, description, content: markdown };
    const token = JSON.parse(user).token;
    makePostRequest(post, token);
  };

  if (loading) return <Loading />;
  if (error) return <NoPage errorCode="500" errorMessage="Failed to post" />;
  if (response) {
    navigate("/post");
  }

  return (
    <div className="CreatePostPage">
      <input ref={titleRef} placeholder="Title" />
      <div>
        <textarea ref={descriptionRef} placeholder="Description" />
      </div>
      <div className="">
        <CreatePostInput
          markdown={markdown}
          setMarkdown={setMarkdown}
          setShowMarkdown={setShowMarkdown}
          setShowTextMarkdown={setShowTextMarkdown}
        />
        {showTextMarkdown && (
          <textarea
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
          />
        )}
        <div className="Markdown">
          {showMarkdown && (
            <ReactMarkdown components={renderers}>{markdown}</ReactMarkdown>
          )}
        </div>
        <button onClick={postHandler}>Post</button>
      </div>
    </div>
  );
};
