import React from "react";
import logo from "../assets/images/logo.png";

function Footer() {
  return (
    <div className="relative">
      <div className="bg-white w-full h-16 absolute -top-1 rounded-b-full "></div>
      <div className="bg-linear-to-tr lg:pb-16 pt-28  p-5 from-[#D9E1FF] to-[#DFF4FF] ">
        <div className="lg:flex justify-around space-y-20">
          <div className="space-y-5 lg:block flex justify-between">
            <img src={logo} alt="" height={32} width={150} />
            <div className="lg:block  flex   lg:gap-0 gap-10">
              <a href="">Privacy Policy</a> <br />
              <a href="">Terms of Use</a>
            </div>
          </div>

          <div className="flex justify-between lg:gap-96">
            <ul className="text-lg font-normal  space-y-4">
              <li className="lg:text-xl text-3xl font-semibold">
                <a href="">Services</a>
              </li>
              <li>
                <a href="">Complete iGaming SEO Solutions</a>
              </li>
              <li>
                <a href="">In-Depth SEO Audits</a>
              </li>
              <li>
                <a href="">SEO for Website Launch & Development</a>
              </li>
              <li>
                <a href="">Technical & On-Page SEO Optimization</a>
              </li>
              <li>
                <a href="">Search Engine Penalty Recovery</a>
              </li>
            </ul>

            <ul className="text-lg font-normal space-y-4 mx-auto ">
              <li className="lg:text-xl text-3xl font-semibold">
                <a href="">Company</a>
              </li>
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
              <li>
                <a href="">Cases</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
