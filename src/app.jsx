import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function App() {
  return (
    <>
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup </Link>
      <Outlet></Outlet>
    </>
  );
}
