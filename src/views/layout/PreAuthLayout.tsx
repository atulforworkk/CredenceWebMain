import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../composites/header/Header";
import Footer from "../../composites/footer/Footer";

function PreAuthLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default PreAuthLayout;
