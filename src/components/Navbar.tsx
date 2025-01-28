import Image from "next/image";
import React from "react";
import brandLogo from "../../public/images/logo.svg";
import dropdownArrow from "../../public/images/icon-arrow-down.svg";
import hamburger from "../../public/images/icon-menu.svg"

const Navbar = () => {
  return (
    <div className="w-full bg-white font-epilogueSemiBold text-mediumGray py-8 ">
      <div className=" hidden md:flex items-center justify-between">
        <div className="flex items-center gap-14">
          <span>
            <Image src={brandLogo} alt="brand logo" />
          </span>
          <div>
            <ul className="flex items-center gap-10">
              <li className="flex items-center gap-2">
                <span>Features </span>
                <span>
                  <Image src={dropdownArrow} alt="arrow down" />
                </span>
              </li>
              <li className="flex items-center gap-2">
                <span>Company </span>
                <span>
                  <Image src={dropdownArrow} alt="arrow down" />
                </span>
              </li>
              <li>Careers</li>
              <li>About</li>
            </ul>
          </div>
        </div>
        <div className="flex items-center gap-10">
          <span>Login</span>
          <span className="cursor-pointer border border-mediumGray py-2 px-6  bg-white rounded-xl">
            Register
          </span>
        </div>
      </div>
      <div className=" md:hidden flex items-center justify-between px-8">
        <span>
          <Image src={brandLogo} alt="brand logo" />
        </span>
        <span>
            <Image src={hamburger} alt="" />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
