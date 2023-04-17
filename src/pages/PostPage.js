import React, { useEffect } from "react";
import ReactMarkdown from "react-markdown";

//styles
import "../styles/reset.css";
import "../styles/utils.css";
import "../styles/PostPage.css";

//components
import { NoPage } from "../pages/NoPage";
import { Loading } from "../components/Loading";
import { PostBox } from "../components/PostBox";

//hooks
import useFetchData from "../hooks/useFetchData";

//constants
import { webLink } from "../constants";

export const PostPage = () => {
  const id = localStorage.getItem("post");
  const { loading, error, data, fetchData } = useFetchData(
    webLink + "posts/" + id
  );

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (!id) {
    return <NoPage errorCode="404" errorMessage="No post was selected" />;
  }
  if (loading) return <Loading />;
  if (error)
    return <NoPage errorCode="500" errorMessage="Error getting post" />;

  let post = null;
  if (data) post = data.data;

  return (
    <div className="PostPage">
      {post && <PostBox data={post} />}
      {data && (
        <div className="Post">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      )}
    </div>
  );
};
