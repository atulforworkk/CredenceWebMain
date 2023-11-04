import React from "react";
import images from "../../assets/images/imageData/images";
type Props = {};

const Header = (props: Props) => {
  return (
    <div className="flex bg-pink-400">
      <img src={images.MainLogo} alt="" className="w-40 h-10  " />
      <input type="text" className="h-8 w-96 mx-2" />
    </div>
  );
};

export default Header;
