import React, { useState } from "react";
import "./n.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "/public/images/sqblackbold.png";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <>
      <div className={`mobile-navv ${open ? "mobile-navv--open" : ""}`}>
        {
          <div
            onClick={() => setOpen(!open)}
            className="hidden sm:block relative lg:hidden z-[100] w-[50vw] h-screen shadow-xl"
          >
            <div className="flex flex-col absolute top-0 z-50 h-full w-full items-start py-[100px] overflow-scroll">
              <div className=" w-[200px] p-[-20px]">
                <NavLink to="/">
                  <img src={logo} alt="" className="scale-[80%]" />
                </NavLink>
              </div>
              <div className="nav links imp flex flex-col px-6 gap-3 justify-start items-start w-full">
                <div className="navlinkk hover:text-blue-500 ease-in-out duration-[200ms]">
                  <NavLink
                    to="/locations"
                    style={({ isActive }) => ({
                      color: isActive ? "active" : "inactive",
                    })}
                  >
                    <h1 className="text-md ">Home</h1>
                  </NavLink>
                </div>
                <div className="navlinkk  hover:text-blue-500 ease-in-out duration-[200ms]">
                  <NavLink
                    to="/thingstodo"
                    style={({ isActive }) => ({
                      color: isActive ? "active" : "incative",
                    })}
                  >
                    <h1 className="text-md ">Courses</h1>
                  </NavLink>
                </div>
                <div className="navlinkk  hover:text-blue-500 ease-in-out duration-[200ms]">
                  <NavLink
                    to="/wheretostay"
                    style={({ isActive }) => ({
                      color: isActive ? "active" : "inactive",
                    })}
                  >
                    <h1 className="text-md ">Leadership</h1>
                  </NavLink>
                </div>
                <div className="navlinkk  hover:text-blue-500 ease-in-out duration-[200ms]">
                  <NavLink
                    to="/visitorinformation"
                    style={({ isActive }) => ({
                      color: isActive ? "active" : "incative",
                    })}
                  >
                    <h1 className="text-md ">Facilitators</h1>
                  </NavLink>
                </div>
                <div className="navlinkk  hover:text-blue-500 ease-in-out duration-[200ms]">
                  <NavLink
                    to="/articles"
                    style={({ isActive }) => ({
                      color: isActive ? "active" : "inactive",
                    })}
                  >
                    <h1 className="text-md ">Cooridantors</h1>
                  </NavLink>
                </div>
                <div className="navlinkk  hover:text-blue-500 ease-in-out duration-[200ms]">
                  <NavLink
                    to="/articles"
                    style={({ isActive }) => ({
                      color: isActive ? "active" : "inactive",
                    })}
                  >
                    <h1 className="text-md ">Reach us</h1>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
      <div className={`mobile-nav ${mobileOpen ? "mobile-nav--open" : ""}`}>
        {
          <div
            onClick={() => setMobileOpen(false)}
            className="w-screen h-[60vh] flex flex-col yt justify-center items-center my-auto rounded-b-md"
          >
            <div className="flex flex-col justify-center gap-5 absolute top-0 z-50 h-full w-full items-center ">
              <div className="nav links imp flex flex-col px-6 gap-5 justify-center items-center w-full">
                <div className="navlinkk hover:text-blue-500 ease-in-out duration-[200ms]">
                  <NavLink
                    to="/locations"
                    style={({ isActive }) => ({
                      color: isActive ? "active" : "inactive",
                    })}
                  >
                    <h1 className="text-md ">Home</h1>
                  </NavLink>
                </div>
                <div className="navlinkk  hover:text-blue-500 ease-in-out duration-[200ms]">
                  <NavLink
                    to="/thingstodo"
                    style={({ isActive }) => ({
                      color: isActive ? "active" : "incative",
                    })}
                  >
                    <h1 className="text-md ">Courses</h1>
                  </NavLink>
                </div>
                <div className="navlinkk  hover:text-blue-500 ease-in-out duration-[200ms]">
                  <NavLink
                    to="/wheretostay"
                    style={({ isActive }) => ({
                      color: isActive ? "active" : "inactive",
                    })}
                  >
                    <h1 className="text-md ">Leadership</h1>
                  </NavLink>
                </div>
                <div className="navlinkk  hover:text-blue-500 ease-in-out duration-[200ms]">
                  <NavLink
                    to="/visitorinformation"
                    style={({ isActive }) => ({
                      color: isActive ? "active" : "incative",
                    })}
                  >
                    <h1 className="text-md ">Facilitators</h1>
                  </NavLink>
                </div>
                <div className="navlinkk  hover:text-blue-500 ease-in-out duration-[200ms]">
                  <NavLink
                    to="/articles"
                    style={({ isActive }) => ({
                      color: isActive ? "active" : "inactive",
                    })}
                  >
                    <h1 className="text-md ">Cooridantors</h1>
                  </NavLink>
                </div>
                <div className="navlinkk  hover:text-blue-500 ease-in-out duration-[200ms]">
                  <NavLink
                    to="/articles"
                    style={({ isActive }) => ({
                      color: isActive ? "active" : "inactive",
                    })}
                  >
                    <h1 className="text-md ">Reach us</h1>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
      <div className="navigation sticky bg-white top-0">
        <div className="hidden desktop lg:block">
          <div className="flex justify-center items-center w-screen max-w-[1440px] border-b-[0.5px] border-black/5">
            <div className="px-11 py-2 flex w-full justify-between align-center items-center bg-white shadow-sm">
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
                <NavLink to="/apply">
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
            <div className="px-5 py-2 flex w-[100%] justify-between align-center items-center">
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
          <div className="flex justify-center items-center w-screen max-w-[1440px]">
            <div className="px-5 py-2 flex w-[100%] justify-between align-center items-center bg-red">
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
