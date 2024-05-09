import { createBrowserRouter } from "react-router-dom";
import App from "./app";
import LoginForm from "./components/authentication/login-form";
import SignupForm from "./components/authentication/signup-form";
import { Navigate, json } from "react-router-dom";
import Home from "./home";
import AllPosts from "./components/blog/all-posts";

const routes = createBrowserRouter([
  {
    path: "/",
    element: localStorage.getItem("jwt") ? (
      <Navigate to="/home" replace={true}></Navigate>
    ) : (
      <App></App>
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
      { path: "profile", element: <h1>Yet to be implemented </h1> },
    ],
  },
]);

export default routes;
