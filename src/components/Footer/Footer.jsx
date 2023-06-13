import React from "react";
import { NavLink } from "react-router-dom";
import logo from "/public/images/sqblackbold.png";

const Footer = () => {
  return (
    <footer className="footer relative bg-black/5 border-t-[0.5px] border-black/5 py-3 bottom-0 w-[100%] px-[25px] md:px-[50px] max-w-[1600px]">
      <div className="flex  justify-between items-center align-center gap-5 text-sm  w-full">
        <div className=" w-[150px]">
          <NavLink to="/">
            <img src={logo} alt="" className="scale-[80%]" />
          </NavLink>
        </div>
        <div className="text-sm font-semibold flex text-black/50 justify-evenly gap-3">
          <div>
            <NavLink to="/about">
              <h1 className="hover:text-black/80 ease-in-out duration-100">
                About
              </h1>
            </NavLink>
          </div>
          <div>
            <NavLink to="/support">
              <h1 className="hover:text-black/80 ease-in-out duration-100">
                Skills
              </h1>
            </NavLink>
          </div>

          <div>
            <NavLink to="/support">
              <h1 className="hover:text-black/80 ease-in-out duration-100">
                Support
              </h1>
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
