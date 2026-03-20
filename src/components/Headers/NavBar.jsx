import React from "react";
import { IoMenu } from "react-icons/io5";
import { NavLink } from "react-router";
import navLogo from "../../assets/logo.png";
import navButtonLogo from "../../assets/fi_2111432.svg";

const NavBar = () => {
  const navItem = (
    <>
      <li>
        <NavLink
          className="bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] py-2 px-4 rounded font-semibold text-white"
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className="bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] py-2 px-4 rounded font-semibold text-white"
          to="apps"
        >
          Apps
        </NavLink>
      </li>
      <li>
        <NavLink
          className="bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] py-2 px-4 rounded font-semibold text-white"
          to="installation"
        >
          Installation
        </NavLink>
      </li>
      <li>
        <NavLink
          className="bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] py-2 px-4 rounded font-semibold text-white"
          to="error"
        >
          Error
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="flex justify-between items-center mx-3 md:mx-6 lg:mx-16 py-2">
      <div className="flex items-center gap-2">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="lg:hidden text-3xl">
            <IoMenu />
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content bg-base-100 rounded z-1 mt-3 w-36 p-2 shadow flex flex-col justify-center gap-4"
          >
            {navItem}
          </ul>
        </div>
        <NavLink to="/" className="flex gap-1 items-center">
          <img className="h-8 w-8" src={navLogo} alt="" />
          <a className="bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] bg-clip-text text-transparent font-bold">
            HERO.IO
          </a>
        </NavLink>
      </div>
      <div className="hidden lg:flex">
        <ul className="flex gap-2 items-center">{navItem}</ul>
      </div>
      <div className="flex items-center gap-1 bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] py-2 px-4 rounded font-semibold">
        <img src={navButtonLogo} alt="" />
        <NavLink to="contribute" className="text-white">
          Contribute
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
