import { createBrowserRouter } from "react-router-dom";
import App from "./app";
import LoginForm from "./components/login-form";
import SignupForm from "./components/signup-form";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      { path: "/login", element: <LoginForm></LoginForm> },
      { path: "/signup", element: <SignupForm></SignupForm> },
    ],
  },
]);

export default routes;
