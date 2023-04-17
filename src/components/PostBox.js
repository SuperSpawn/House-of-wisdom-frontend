import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

//styles
import "../styles/reset.css";
import "../styles/utils.css";
import "../styles/PostBox.css";

//hooks
import usePutAuthFunction from "../hooks/usePutAuthFunction";

//constants
import { webLink } from "../constants";

export const PostBox = ({ data, index, posts, setPosts }) => {
  const navigate = useNavigate();
  const { error, data: response, putData } = usePutAuthFunction();

  const clickHandler = () => {
    localStorage.setItem("post", data._id);
    navigate("/post");
  };
  const upvoteHandler = (e) => {
    e.stopPropagation();
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) return;
    putData(webLink + "posts/upvote/" + data._id, user.token, null).then(() => {
      posts[index].rating++;
      setPosts(posts);
    });
  };
  const downvoteHandler = (e) => {
    e.stopPropagation();
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) return;
    putData(webLink + "posts/downvote/" + data._id, user.token, null).then(
      () => {
        posts[index].rating--;
        setPosts(posts);
      }
    );
  };

  return (
    <div
      className="PostBox cursor-upon-hover box-border-dynamic"
      onClick={clickHandler}
    >
      <div className="PostBox-rating">
        <button className="green-text-upon-hover" onClick={upvoteHandler}>
          +
        </button>
        {data.rating}
        <button className="red-text-upon-hover" onClick={downvoteHandler}>
          -
        </button>
      </div>
      <div>
        <div className="PostBox-info">Posted {data.created_at}</div>
        <div className="PostBox-content">
          <h3>{data.title}</h3>
          <p>{data.description}</p>
        </div>
      </div>
      <div className="PostBox-actions">
        <button className="cursor-upon-hover">
          <FontAwesomeIcon icon={faEdit} />
        </button>
        <button className="cursor-upon-hover">
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
      </div>
    </div>
  );
};
