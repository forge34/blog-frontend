import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../header";

export default function Index() {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
}
