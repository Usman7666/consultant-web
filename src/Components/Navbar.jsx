import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { Menu } from "react-feather";
import MobileMenu from "../Components/MobileMenu.jsx";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="">
      {isOpen ? <MobileMenu /> : ""}

      <div className="flex items-center justify-between p-10 lg:px-20 lg:py-10">
        <img src={logo} alt="Logo" height={32} width={150} />
        {/* Mobile Menu */}
        <div className="lg:hidden block cursor-pointer">
          <Menu onClick={() => setIsOpen(!isOpen)} height={58} width={71} />
        </div>
        <ul className=" lg:flex hidden  items-center justify-around text-[16px] text-black/60 max-w-[493px] w-full">
          <li>
            <a href="" className="hover:text-black">
              Home
            </a>
          </li>
          <li>
            <select
              name=""
              id=""
              className="outline-none hover:text-black cursor-pointer"
            >
              <option value="">Services</option>
              <option value="">Option 1</option>
              <option value="">Option 2</option>
            </select>
          </li>
          <li>
            <a href="" className="hover:text-black">
              Cases
            </a>
          </li>
          <li>
            <a href="" className="hover:text-black">
              About Us
            </a>
          </li>
          <li>
            <a href="" className="hover:text-black">
              Contact Us
            </a>
          </li>
        </ul>

        <select
          name=""
          id=""
          className="lg:block hidden cursor-pointer outline-none"
        >
          <option value="">Eng</option>
          <option value="">fra</option>
          <option value="">Ger</option>
        </select>

        <button className="bg-black rounded-full lg:block hidden text-white w-40 h-10 cursor-pointer  hover:text-black hover:bg-white transition-all duration-200 ">
          Book a call
        </button>
      </div>
    </div>
  );
}

export default Navbar;
