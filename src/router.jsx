import { createBrowserRouter } from "react-router-dom";
import Index from "./pages/index";
import LoginForm from "./pages/login-page";
import SignupForm from "./pages/signup-page";
import { Navigate } from "react-router-dom";
import Home from "./pages/home";
import AllPosts from "./pages/all-posts";
import PostPage from "./pages/post-page";
import * as PostLoader from "./loaders/post-loader";

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
        loader: PostLoader.fetchPostAll,
        element: <AllPosts></AllPosts>,
      },
      {
        path: "posts/:postid",
        loader: PostLoader.fetchPostOne,
        element: <PostPage></PostPage>,
      },
      { path: "profile", element: <h1>Yet to be implemented </h1> },
    ],
  },
]);

export default routes;
