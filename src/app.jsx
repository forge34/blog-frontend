import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";

export default function App() {
  return (
    <div>
      <Header loggedIn={false}></Header>
      <Outlet></Outlet>
    </div>
  );
}
