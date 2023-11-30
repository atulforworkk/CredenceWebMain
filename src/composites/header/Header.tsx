import React from "react";
<<<<<<< HEAD

function Header() {
  return <div className="min-h-[7vh]">Header</div>;
}
=======
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
>>>>>>> 757bfa279db42a0db0b91b5fc7ddfa5e1ef96276

export default Header;
