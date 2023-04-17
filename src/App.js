import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
//pages
import { AdminPage } from "./pages/AdminPage";
import { CreatePostPage } from "./pages/CreatePostPage";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { NoPage } from "./pages/NoPage";
import { PostPage } from "./pages/PostPage";
import { RegisterPage } from "./pages/RegisterPage";

//constants
import { sessionLimit } from "./constants";
//services
import { hoursToMilliseconds } from "./services/time-funcs";

function App() {
  useEffect(() => {
    const interval = setInterval(() => {
      localStorage.removeItem("user");
    }, hoursToMilliseconds(sessionLimit));
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/post" element={<PostPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/create-post" element={<CreatePostPage />} />
        <Route
          path="*"
          element={
            <NoPage errorCode={404} errorMessage="Oops! page not found" />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
