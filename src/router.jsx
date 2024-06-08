import { createBrowserRouter } from "react-router-dom";
import LoginForm from "./pages/login-page";
import SignupForm from "./pages/signup-page";
import { Navigate } from "react-router-dom";
import Home from "./pages/home";
import AllPosts from "./pages/all-posts";
import PostPage from "./pages/post-page";
import * as PostLoader from "./utils/loaders/post-loader";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/home" replace={true}></Navigate>
  },

  {
    path: "/login", element: <LoginForm></LoginForm>
  },

  {
    path: "/signup", element: <SignupForm></SignupForm>
  },

  {
    path: "/home",
    element: <Home></Home>,
    loader: PostLoader.fetchPostAll,
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
    ],
  },
]);

export default routes;
