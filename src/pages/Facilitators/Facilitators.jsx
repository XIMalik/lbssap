import React from "react";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import GoToTop from "../../components/GoToTop/GoToTop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PersonCard from "../../components/PersonCard";

const Facilitators = () => {
  return (
    <div className="skills">
      <GoToTop />
      <Nav />

      <div className=" flex flex-col py-5 gap-10">
        <div className="flex flex-col gap-1">
          <span className="text-center text-blue-200">Meet our</span>
          <h1 className="text-center text-3xl text-[#040715] imp sticky top-10">
            Facilitators
          </h1>
        </div>
        <div className="profiles h-fit sm:h-fit flex flex-wrap sm:flex-row items-center gap-2 md:gap-0 justify-center md:justify-evenly align-center px-7 sm:px-[25px] md:px-11 w-screen max-w-[1440px]">
          <PersonCard />
          <PersonCard />
          <PersonCard />
          <PersonCard />
          <PersonCard />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Facilitators;
