import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

//styles
import "../styles/reset.css";
import "../styles/utils.css";
import "../styles/HomePage.css";

//components
import { PostBox } from "../components/PostBox";
import { Loading } from "../components/Loading";
import { NoPage } from "../pages/NoPage";
import { GenericNavbar } from "../components/GenericNavbar";
import { GenericSelect } from "../components/GenericSelect";

//hooks
import useFetchData from "../hooks/useFetchData";

//constants
import { webLink } from "../constants";

export const HomePage = () => {
  const navigate = useNavigate();
  const { loading, error, data, fetchData } = useFetchData(
    webLink + "posts/light"
  );
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    if (data) {
      setPosts(data.data);
    } else {
      fetchData();
    }
  }, [data, fetchData]);

  if (loading) return <Loading />;
  if (error)
    return <NoPage errorCode="404" errorMessage="Cannot fetch posts" />;

  const logoutHandler = () => {
    localStorage.removeItem("user");
    setUser(null);
  };
  const nameHandler = () => {};
  const options = user && [user.name, "logout"];
  const handlers = {};
  if (user) {
    handlers[user.name] = nameHandler;
    handlers["logout"] = logoutHandler;
  }

  const createHandler = () => {
    user ? navigate("/create-post") : navigate("/login");
  };

  return (
    <div className="HomePage">
      <GenericNavbar align="center" gap={3}>
        {!user && <button onClick={() => navigate("/login")}>Log In</button>}
        {!user && (
          <button onClick={() => navigate("/register")}>Register</button>
        )}
        {user && <GenericSelect options={options} handlers={handlers} />}
        <input />
        <button onClick={createHandler}>+ Create an article</button>
      </GenericNavbar>
      {posts &&
        posts.map((post, index) => (
          <PostBox
            key={post._id}
            data={post}
            index={index}
            posts={posts}
            setPosts={setPosts}
          />
        ))}
    </div>
  );
};
