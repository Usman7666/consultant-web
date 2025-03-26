import { ChevronDown, Menu } from "react-feather";
import logo from "../assets/images/logo.png";
import { useState } from "react";

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div
      className={`h-[1250px]  bg-[#1A1A1ABF] absolute w-full backdrop-blur-md p-10 ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="flex justify-between ">
        <img src={logo} height={32} width={149} alt="" />
        <Menu
          height={58}
          width={71}
          onClick={() => setIsOpen(!isOpen)}
          color="white"
          className=" cursor-pointer"
        />
      </div>

      <div className="flex  justify-end mt-10 text-right p-4">
        <ul className="text-white space-y-20">
          <li className="hover:font-bold text-4xl">
            <a href="">Home</a>
          </li>
          <li className="flex items-center  justify-end gap-2">
          <ChevronDown className="mt-2 cursor-pointer"/>
            <select name="" id="" className="outline-none appearance-none cursor-pointer hover:font-bold text-right text-4xl">
            
              <option value="" className="text-black">
                Services
              </option>
              <option value="" className="text-black">
                Option 2
              </option>
            </select>
          </li>
          <li className="hover:font-bold text-4xl">
            <a href="">Cases</a>
          </li>
          <li className="hover:font-bold text-4xl">
            <a href="">About Us</a>
          </li>
          <li className="hover:font-bold text-4xl">
            <a href="">Contact Us</a>
          </li>
          <div className="py-3 items-center justify-end flex gap-5 pt-20">
            <ChevronDown className="cursor-pointer"/>
            <select
              name=""
              id=""
              className="outline-none cursor-pointer appearance-none font-bold text-4xl "
            >
              <option value="" className="text-black ">
                Eng
              </option>
            </select>
          </div>
          <button className="bg-white rounded-full mt-20 font-bold text-[22px] text-black w-[266px] h-14 cursor-pointer  hover:text-white hover:bg-black transition-all duration-200 ">
            Book a call
          </button>
        </ul>
      </div>
    </div>
  );
}

export default MobileMenu;
