import React from "react";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import GoToTop from "../../components/GoToTop/GoToTop";
import { NavLink } from "react-router-dom";
import "./c.css";

const Coordinators = () => {
  return (
    <div className="skills">
      <GoToTop />
      <Nav />

      <div className=" flex flex-col py-5 gap-10">
        <div className="flex flex-col gap-1">
          <span className="text-center text-blue-200">Meet our</span>
          <h1 className="text-center text-3xl text-[#040715] imp sticky top-10">
            Coordinators
          </h1>
        </div>
        <div className="grid"></div>
      </div>
      <Footer />
    </div>
  );
};

export default Coordinators;
