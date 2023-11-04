import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./composites/header/Header";
import Footer from "./composites/footer/Footer";
interface Props {}

const PreauthLayout = (props: Props) => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default PreauthLayout;
