import { createBrowserRouter } from "react-router-dom";
import Index from "./pages/index";
import LoginForm from "./pages/login-page";
import SignupForm from "./pages/signup-page";
import { Navigate } from "react-router-dom";
import Home from "./pages/home";
import AllPosts from "./pages/all-posts";
import PostPage from "./pages/post-page";

const routes = createBrowserRouter([
  {
    path: "/",
    element: localStorage.getItem("jwt") ? (
      <Navigate to="/home" replace={true}></Navigate>
    ) : (
      <Index></Index>
    ),
    children: [
      { path: "login", element: <LoginForm></LoginForm> },
      { path: "signup", element: <SignupForm></SignupForm> },
    ],
  },
  {
    path: "/home",
    element: <Home></Home>,
    children: [
      {
        path: "posts",
        loader: () => {
          const data = fetch("http://localhost:3000/api/posts", {
            mode: "cors",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            },
          });

          return data;
        },
        element: <AllPosts></AllPosts>,
      },
      {
        path: "posts/:postid",
        loader: ({ params }) => {
          const data = fetch(
            `http://localhost:3000/api/posts/${params.postid}`,
            {
              mode: "cors",
              headers: {
                Authorization: `Bearer ${localStorage.getItem("jwt")}`,
              },
            }
          );

          return data;
        },
        element: <PostPage></PostPage>,
      },
      { path: "profile", element: <h1>Yet to be implemented </h1> },
    ],
  },
]);

export default routes;
