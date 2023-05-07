import React from "react";
import Nav from "../../components/Nav/Nav";
import "./s.css";
import Card from "../../components/Card/Card";
import Footer from "../../components/Footer/Footer";
import GoToTop from "../../components/GoToTop/GoToTop";

const Skills = () => {
  return (
    <div className="skills">
      <GoToTop />
      <Nav />

      <div className=" flex flex-col gap-10">
        <div className="head h-[40vh] md:h-[40vh] bg-red-100">
          <div className="flex flex-col px-[25px] sm:px-[30px] md:px-[70px] w-screen max-w-[1440px] justify-center align-center items-left h-full">
            <div className="landing-page-text flex flex-col gap-1 text-white justify-center items-center  w-full ">
              <span className="text-2xl imp font-bold">
                All courses on offer
              </span>
            </div>
          </div>
        </div>
        <div>
          <div className="w-[100vw] px-[25px] sm:px-[30px] md:px-[70px] justify-start flex flex-col gap-5">
            <div className="flex flex-col sm:flex-row gap-3 py-5 justify-center items-center">
              <div className="flex flex-col gap-3 bg-slate-200 p-3 rounded-md h-fit w-[100%] sm:max-w-[300px]">
                <h1 className="font-bold text-sm">Disclaimer</h1>
                <span className="text-sm text-black/50">
                  Registration for all courses will require a short assessment
                  to determine compatibility.
                </span>
              </div>
              <div className="flex flex-col gap-3 bg-slate-100/50 p-3 rounded-md h-fit w-[100%] sm:max-w-[300px]">
                <h1 className="font-bold text-sm">Incentives</h1>
                <span className="text-sm text-black/50">
                  Certificates will be awarded upon the successful completion of
                  a skill acquisition program.
                </span>
              </div>
              <div className="flex flex-col gap-3 bg-slate-200 p-3 rounded-md h-fit w-[100%] sm:max-w-[300px]">
                <h1 className="font-bold text-sm">Dedication</h1>
                <span className="text-sm text-black/50">
                  Instructors will be on ground, and if needed, participants can
                  easily reach out via various channels.
                </span>
              </div>
            </div>
            <div className=" py-5">
              <h1 className="text-center text-black/70 text-sm">
                Displaying all programs
              </h1>
              <div className=" py-8 w-full sm:w-[100%] flex flex-wrap align-left gap-5 justify-center md:justify-center">
                <Card />
                <Card />
                <Card />
                <Card />
              </div>
            </div>
            <button className="bg-slate-200 rounded-lg w-[30%] max-w-[300px] mx-auto mb-4 px-10 py-1">
              <span className="text-xs text-black/50">Load more</span>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Skills;
