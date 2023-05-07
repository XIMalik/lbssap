import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer relative bg-gradient-to-r from-[#040715] to-black py-10 bottom-0 w-[100%] px-[25px] md:px-[50px] max-w-[1600px]">
      <div className="flex flex-col  justify-between items-start gap-5 text-sm  w-full">
        <NavLink to="/">
          <h1 className="text-2xl font-bold imp text-[#e95656]">misap</h1>
        </NavLink>
        <div className="text-sm font-light flex text-white/50 justify-evenly gap-3">
          <div>
            <NavLink to="/about">
              <h1 className="hover:text-white/80 ease-in-out duration-100">
                About
              </h1>
            </NavLink>
          </div>
          <div>
            <NavLink to="/support">
              <h1 className="hover:text-white/80 ease-in-out duration-100">
                Skills
              </h1>
            </NavLink>
          </div>

          <div>
            <NavLink to="/support">
              <h1 className="hover:text-white/80 ease-in-out duration-100">
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
