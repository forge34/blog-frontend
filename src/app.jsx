import React from "react";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <>
      <h1>Welcome</h1>
      <Outlet></Outlet>
    </>
  );
}
