import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer relative bg-slate-100 py-5 bottom-0 w-[100%] px-[25px] md:px-[50px] max-w-[1600px] mt-[50px]">
      <div className="flex justify-between items-center text-sm  w-full">
        <NavLink to="/">
          <h1 className="text-2xl font-bold imp text-[#e95656]">sap</h1>
        </NavLink>
        <div className="text-sm font-light flex text-black/50 justify-evenly gap-5">
          <div>
            <NavLink to="/form">
              <h1 className="hover:text-black/80 ease-in-out duration-100">
                About
              </h1>
            </NavLink>
          </div>
          <div>
            <NavLink to="/skills">
              <h1 className="hover:text-black/80 ease-in-out duration-100">
                Skills
              </h1>
            </NavLink>
          </div>

          <div>
            <NavLink to="/skills">
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
