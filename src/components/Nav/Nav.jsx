import React, { useState } from "react";
import "./n.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-regular-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <div className="navigation sticky top-0">
        <div className="hidden md:block">
          <div className="flex justify-center items-center w-screen max-w-[1440px] border-b-[0.5px] border-black/5">
            <div className="px-11 py-5 flex w-full justify-between align-center items-center bg-white/90 backdrop-blur-3xl">
              <div>
                <NavLink to="/">
                  <h1 className="text-xl font-bold text-red-400 imp">misap</h1>
                </NavLink>
              </div>
              <div className="links flex h-full gap-5 justify-evenly align-center items-center">
                <div className="navlink imp">
                  <NavLink
                    to="/"
                    style={({ isActive }) => ({
                      color: isActive ? "active" : "inactive",
                    })}
                  >
                    <h1>Home</h1>
                  </NavLink>
                </div>
                <div className="navlink imp">
                  <NavLink
                    to="/skills"
                    style={({ isActive }) => ({
                      color: isActive ? "active" : "inactive",
                    })}
                  >
                    <h1>Courses</h1>
                  </NavLink>
                </div>
                <div className="navlink imp">
                  <NavLink
                    to="/leadership"
                    style={({ isActive }) => ({
                      color: isActive ? "active" : "inactive",
                    })}
                  >
                    <h1>Leadership</h1>
                  </NavLink>
                </div>
                <div className="navlink imp">
                  <NavLink
                    to="/facilitators"
                    style={({ isActive }) => ({
                      color: isActive ? "active" : "inactive",
                    })}
                  >
                    <h1>Facilitators</h1>
                  </NavLink>
                </div>
                <div className="navlink imp">
                  <NavLink
                    to="/coordinators"
                    style={({ isActive }) => ({
                      color: isActive ? "active" : "inactive",
                    })}
                  >
                    <h1>Coordinators</h1>
                  </NavLink>
                </div>
                <div className="navlink imp">
                  <NavLink
                    to="/footer"
                    style={({ isActive }) => ({
                      color: isActive ? "active" : "inactive",
                    })}
                  >
                    <h1>Reach us</h1>
                  </NavLink>
                </div>
                <NavLink to="/apply">
                  <button className="imp text-sm text-white bg-[#040715] px-5 py-2 rounded-sm shadow-md hover:shadow-xl ease-in-out duration-150">
                    Apply Now
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>

        <div className="block md:hidden ">
          <div className="flex justify-center items-center w-screen max-w-[1440px]">
            <div className="px-5 py-5 flex w-[100%] justify-between align-center items-center bg-white backdrop-blur-3xl">
              <div className="flex justify-between w-full align-center items-center">
                <div>
                  <NavLink to="/">
                    <h1 className="text-xl font-bold text-black imp">misap</h1>
                  </NavLink>
                </div>
                <div>
                  <button
                    onClick={() => setMenu(!menu)}
                    className="text-[#040715] text-xl hover:text-red-500 ease-in-out duration-400"
                  >
                    <FontAwesomeIcon icon={faBars} />
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
      </div>
    </>
  );
};

export default Nav;
