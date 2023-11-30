import React from "react";
<<<<<<< HEAD
import images from "../../../assets/images/imageData/ImageData";
=======
import images from "../../../assets/images/imageData/images";
>>>>>>> 757bfa279db42a0db0b91b5fc7ddfa5e1ef96276
import { Link } from "react-router-dom";
import navbar from "./HeaderData";
function AboutHeader() {
  return (
    <div className="container max-w-7xl mx-auto ">
      <div className="flex justify-between items-center">
        <div>
          <img
            src={images.logo}
            alt="website-logo"
            className="h-[50px] bg-purple-500"
          />
        </div>
        <div>
          <ul>
            <ul className="flex gap-4">
              {navbar.map((link, index) => (
                <li key={index} className="">
                  <Link to={link.route}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutHeader;
