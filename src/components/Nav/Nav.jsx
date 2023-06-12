import React, { useState } from "react";
import "./n.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "/public/images/sqblackbold.png";
import graphic from "/public/images/skillsetPattern.png";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <>
      <div className={`mobile-navv ${open ? "mobile-navv--open" : ""}`}>
        {
          <div
            onClick={() => setOpen(!open)}
            className="hidden sm:block relative lg:hidden z-[100] w-[50vw] rounded-l-xl bg-white overflow-hidden h-screen shadow-xl"
          >
            <div className="absolute top-[-2px] w-full h-[50px] overflow-hidden">
              <img
                src={graphic}
                alt=""
                className="w-[20%] h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center absolute top-0 z-50 h-full w-full items-start py-[100px] overflow-scroll">
              <div className=" w-[200px] mx-auto p-[-20px]">
                <NavLink to="/">
                  <img src={logo} alt="" className="scale-[80%]" />
                </NavLink>
              </div>
              <div className="nav links imp flex flex-col px-6 w-full">
                <div className="navlinkk hover:bg-yellow-500/50 rounded-lg ease-in-out duration-[200ms]">
                  <NavLink
                    to="/"
                    style={({ isActive }) => ({
                      color: isActive ? "active" : "inactive",
                    })}
                  >
                    <h1 className="text-sm w-[100%] border-b-[0.5px] py-3 border-black/5 border-solid text-center">
                      Home
                    </h1>
                  </NavLink>
                </div>
                <div className="navlinkk  hover:bg-yellow-500/50 rounded-lg ease-in-out duration-[200ms]">
                  <NavLink
                    to="/skills"
                    style={({ isActive }) => ({
                      color: isActive ? "active" : "incative",
                    })}
                  >
                    <h1 className="text-sm w-[100%] border-b-[0.5px] py-3 border-black/5 border-solid text-center">
                      Courses
                    </h1>
                  </NavLink>
                </div>
                <div className="navlinkk  hover:bg-yellow-500/50 rounded-lg ease-in-out duration-[200ms]">
                  <NavLink
                    to="/leadership"
                    style={({ isActive }) => ({
                      color: isActive ? "active" : "inactive",
                    })}
                  >
                    <h1 className="text-sm w-[100%] border-b-[0.5px] py-3 border-black/5 border-solid text-center">
                      Leadership
                    </h1>
                  </NavLink>
                </div>
                <div className="navlinkk  hover:bg-yellow-500/50 rounded-lg ease-in-out duration-[200ms]">
                  <NavLink
                    to="/facilitators"
                    style={({ isActive }) => ({
                      color: isActive ? "active" : "incative",
                    })}
                  >
                    <h1 className="text-sm w-[100%] border-b-[0.5px] py-3 border-black/5 border-solid text-center">
                      Facilitators
                    </h1>
                  </NavLink>
                </div>
                <div className="navlinkk  hover:bg-yellow-500/50 rounded-lg ease-in-out duration-[200ms]">
                  <NavLink
                    to="/coordinators"
                    style={({ isActive }) => ({
                      color: isActive ? "active" : "inactive",
                    })}
                  >
                    <h1 className="text-sm w-[100%] border-b-[0.5px] py-3 border-black/5 border-solid text-center">
                      Cooridantors
                    </h1>
                  </NavLink>
                </div>
                <div className="navlinkk  hover:bg-yellow-500/50 rounded-lg ease-in-out duration-[200ms]">
                  <NavLink
                    to="/reachus"
                    style={({ isActive }) => ({
                      color: isActive ? "active" : "inactive",
                    })}
                  >
                    <h1 className="text-sm w-[100%] border-b-[0.5px] py-3 border-black/5 border-solid text-center">
                      Reach us
                    </h1>
                  </NavLink>
                </div>
                <div className="flex w-full mt-5 justify-center">
                  <NavLink to="/applynow">
                    <button className="imp w-full text-sm text-white bg-yellow-500/50 hover:bg-yellow-500 shadow-xl px-5 py-3 ease-in-out duration-150">
                      Apply Now
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 w-full h-[50px] overflow-hidden">
              <img
                src={graphic}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        }
      </div>
      <div className={`mobile-nav ${mobileOpen ? "mobile-nav--open" : ""}`}>
        {
          <div
            onClick={() => setMobileOpen(false)}
            className="w-screen flex sm:hidden lg:hidden bg-white shadow-xl rounded-xl overflow-hidden h-[65vh] relative flex-col yt justify-center items-center"
          >
            <div className="flex flex-col top-8 gap-5 absolute z-50 h-full w-full ">
              <div className="nav links imp flex flex-col px-6 w-full">
                <div className="navlinkk hover:bg-yellow-500/50 rounded-lg ease-in-out duration-[200ms]">
                  <NavLink
                    to="/"
                    style={({ isActive }) => ({
                      color: isActive ? "active" : "inactive",
                    })}
                  >
                    <h1 className="text-sm w-[100%] border-b-[0.5px] py-3 border-black/5 border-solid text-center">
                      Home
                    </h1>
                  </NavLink>
                </div>
                <div className="navlinkk  hover:bg-yellow-500/50 rounded-lg ease-in-out duration-[200ms]">
                  <NavLink
                    to="/skills"
                    style={({ isActive }) => ({
                      color: isActive ? "active" : "incative",
                    })}
                  >
                    <h1 className="text-sm w-[100%] border-b-[0.5px] py-3 border-black/5 border-solid text-center">
                      Courses
                    </h1>
                  </NavLink>
                </div>
                <div className="navlinkk  hover:bg-yellow-500/50 rounded-lg ease-in-out duration-[200ms]">
                  <NavLink
                    to="/leadership"
                    style={({ isActive }) => ({
                      color: isActive ? "active" : "inactive",
                    })}
                  >
                    <h1 className="text-sm w-[100%] border-b-[0.5px] py-3 border-black/5 border-solid text-center">
                      Leadership
                    </h1>
                  </NavLink>
                </div>
                <div className="navlinkk  hover:bg-yellow-500/50 rounded-lg ease-in-out duration-[200ms]">
                  <NavLink
                    to="/facilitators"
                    style={({ isActive }) => ({
                      color: isActive ? "active" : "incative",
                    })}
                  >
                    <h1 className="text-sm w-[100%] border-b-[0.5px] py-3 border-black/5 border-solid text-center">
                      Facilitators
                    </h1>
                  </NavLink>
                </div>
                <div className="navlinkk  hover:bg-yellow-500/50 rounded-lg ease-in-out duration-[200ms]">
                  <NavLink
                    to="/coordinators"
                    style={({ isActive }) => ({
                      color: isActive ? "active" : "inactive",
                    })}
                  >
                    <h1 className="text-sm w-[100%] border-b-[0.5px] py-3 border-black/5 border-solid text-center">
                      Cooridantors
                    </h1>
                  </NavLink>
                </div>
                <div className="navlinkk  hover:bg-yellow-500/50 rounded-lg ease-in-out duration-[200ms]">
                  <NavLink
                    to="/reachus"
                    style={({ isActive }) => ({
                      color: isActive ? "active" : "inactive",
                    })}
                  >
                    <h1 className="text-sm w-[100%] border-b-[0.5px] py-3 border-black/5 border-solid text-center">
                      Reach us
                    </h1>
                  </NavLink>
                </div>
                <div className="flex w-full mt-5 justify-center">
                  <NavLink to="/applynow">
                    <button className="imp w-full text-sm text-white bg-yellow-500/50 hover:bg-yellow-500 shadow-xl px-5 py-3 ease-in-out duration-150">
                      Apply Now
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="absolute graphic bottom-0 w-full h-[50px] overflow-hidden">
              <img
                src={graphic}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        }
      </div>
      <div className="navigation sticky bg-white top-0">
        <div className="hidden desktop lg:block">
          <div className="flex justify-center items-center w-screen max-w-[1440px] border-b-[0.5px] border-black/5">
            <div className="px-11 py-3 flex w-full justify-between align-center items-center bg-white shadow-sm">
              <div className=" w-[200px] p-[-20px]">
                <NavLink to="/">
                  <img src={logo} alt="" className="scale-[80%]" />
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
                <NavLink to="/applynow">
                  <button className="imp text-sm text-white bg-yellow-600 px-9 py-3 rounded-md ease-in-out duration-150">
                    Apply Now
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden sm:block tablet lg:hidden ">
          <div className="flex justify-center items-center w-screen max-w-[1440px]">
            <div className="px-5 py-3 flex w-[100%] justify-between align-center items-center">
              <div className="flex justify-between w-full align-center items-center">
                <div className=" w-[170px]">
                  <NavLink to="/">
                    <img src={logo} alt="" className="scale-[70%]" />
                  </NavLink>
                </div>
                <div>
                  <button
                    onClick={() => setOpen(!open)}
                    className="text-[#040715] text-xl hover:text-red-500 ease-in-out duration-400"
                  >
                    <FontAwesomeIcon icon={faBars} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="block sm:hidden">
          <div className="flex flex-col justify-center items-center w-screen max-w-[1440px]">
            <div className="px-5 py-3 flex w-[100%] justify-between align-center items-center bg-red">
              <div className="flex justify-between w-full align-center items-center">
                <div className=" w-[170px]">
                  <NavLink to="/">
                    <img src={logo} alt="" className="scale-[70%]" />
                  </NavLink>
                </div>
                <div>
                  <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="text-[#040715] text-2xl hover:text-red-500 ease-in-out duration-400"
                  >
                    <FontAwesomeIcon icon={faBars} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
