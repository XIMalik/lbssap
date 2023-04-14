import React, { useState } from "react";
import "./n.css";
import { BrowserRouter, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faXmarkCircle,
} from "@fortawesome/free-regular-svg-icons";

const Nav = () => {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <div className="hidden md:block">
        <div className="flex sticky top-0 justify-center items-center w-screen max-w-[1440px]">
          <div className="px-5 py-3 flex w-full justify-between align-center items-center shadow-2xl bg-white backdrop-blur-3xl">
            <div>
              <NavLink to="/">
                <h1 className="text-2xl font-bold imp text-[#e95656]">sap</h1>
              </NavLink>
            </div>
            <div className="text-sm font-light flex text-black/50 justify-evenly gap-5">
              <div>
                <NavLink to="/aboutsap">
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
                <NavLink to="/aboutsap">
                  <h1 className="hover:text-black/80 ease-in-out duration-100">
                    Support
                  </h1>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="block md:hidden ">
        <div className="flex justify-center items-center w-screen max-w-[1440px]">
          <div className="px-5 py-3 flex w-[100%] justify-between align-center items-center shadow-xl bg-white backdrop-blur-3xl">
            <div className="flex justify-between w-full align-center items-center">
              <div>
                <NavLink to="/">
                  <h1 className="text-2xl font-bold imp text-[#e95656]">sap</h1>
                </NavLink>
              </div>
              <div>
                <button
                  onClick={() => setMenu(!menu)}
                  className="text-red-500/50 hover:text-red-500 ease-in-out duration-400"
                >
                  <FontAwesomeIcon icon={faLightbulb} />
                </button>
              </div>
            </div>
          </div>
          {menu && (
            <div className="absolute top-[60px] w-full ">
              <div className="flex justify-center items-center w-screen max-w-[1440px] py-5">
                <div className="bg-white/30 shadow-xl backdrop-blur-2xl shadow-t-none py-5 px-5 w-[90%] rounded-lg text-sm font-light flex text-white/50 justify-evenly gap-5">
                  <div>
                    <NavLink to="/aboutsap">
                      <h1 className="hover:text-white/100 ease-in-out duration-100">
                        About
                      </h1>
                    </NavLink>
                  </div>
                  <div>
                    <NavLink to="/skills">
                      <h1 className="hover:text-white/100 ease-in-out duration-100">
                        Skills
                      </h1>
                    </NavLink>
                  </div>

                  <div>
                    <NavLink to="/aboutsap">
                      <h1 className="hover:text-white/100 ease-in-out duration-100">
                        Support
                      </h1>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Nav;
