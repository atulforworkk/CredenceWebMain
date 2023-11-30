import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../composites/header/Header";
import Footer from "../../composites/footer/Footer";

function PreAuthLayout() {
  return (
    <div>
<<<<<<< HEAD
      <Outlet />
=======
      <Header />
      <Outlet />
      <Footer />
>>>>>>> 757bfa279db42a0db0b91b5fc7ddfa5e1ef96276
    </div>
  );
}

export default PreAuthLayout;
