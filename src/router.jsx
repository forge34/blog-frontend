import { createBrowserRouter } from "react-router-dom";
import App from "./app";
import LoginForm from "./components/authentication/login-form";
import SignupForm from "./components/authentication/signup-form";
import { Navigate } from "react-router-dom";
import Home from "./home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: localStorage.getItem("jwt") ? (
      <Navigate to="/home" replace={true}></Navigate>
    ) : (
      <App></App>
    ),
    children: [
      { path: "/login", element: <LoginForm></LoginForm> },
      { path: "/signup", element: <SignupForm></SignupForm> },
    ],
  },
  {
    path: "/home",
    element: <Home></Home>,
  },
]);

export default routes;
