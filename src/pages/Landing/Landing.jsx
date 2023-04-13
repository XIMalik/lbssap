import { faXmarkCircle } from "@fortawesome/free-regular-svg-icons";
import {
  faBrush,
  faCode,
  faComputer,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Form from "../../components/Form/Form";
import GoToTop from "../../components/GoToTop/GoToTop";
import Nav from "../../components/Nav/Nav";
import "./l.css";

const Landing = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <GoToTop />
      {open && (
        <div className="absolute z-50">
          <div className="py-2 px-10 bg-red-400/30 backdrop-blur-2xl w-screen flex justify-center md:justify-start">
            <button onClick={() => setOpen(false)}>
              <FontAwesomeIcon icon={faXmarkCircle} className="text-white" />
            </button>
          </div>
          <Form />
        </div>
      )}
      <div className="flex flex-col">
        <div className="introsection h-[80vh] md:h-[70vh] bg-red-100">
          <Nav />

          <div className="flex flex-col px-[25px] sm:px-[30px] md:px-[70px] w-screen max-w-[1440px] justify-center">
            <div className="landing-page-text flex flex-col gap-1 text-white w-[90%] py-5 ">
              <h1 className="imp text-[60px] sm:text-[60px] md:text-[70px] font-bold leading-tight sm:leading-tight">
                Skill Acquisition Program
              </h1>
              <span className="text-sm font-bold">For the youth</span>
              <span className="text-sm text-white md:text-white/80">
                Empowering the next generation through progressive and relevant
                education
              </span>
            </div>
            <button className="w-[150px]" onClick={() => setOpen(true)}>
              <div className="item text-white text-sm flex gap-3 justify-center p-3 h-fit rounded-lg hover:bg-[#e95656]  ease-in-out duration-150 bg-[#e95656]/70">
                Dive in
              </div>
            </button>
          </div>
        </div>
        <div className="courses w-screen py-5 px-[25px] md:px-[25px] lg:px-[50px] flex flex-col gap-5">
          <div className="gap-1 flex flex-col">
            <h1 className="px-5 py-1 text-[#e95656] text-md font-semibold">
              Offering skills essential in todays job market
            </h1>
            <p className="px-5 text-black/50 text-sm">
              Skills attainable within a fixed period of time under the tutelage
              of experienced individuals
            </p>
          </div>
          <div className="items bg-white w-full h-full px-5 flex flex-wrap gap-5">
            <div className="item text-black/50 text-sm flex gap-3 align-center items-center p-5 h-fit rounded-lg hover:bg-slate-200 ease-in-out duration-150 bg-slate-100  md:min-w-[20%]">
              <FontAwesomeIcon icon={faCode} className="text-[#e95656]" />
              <h1>Web Development</h1>
            </div>
            <div className="item text-black/50 text-sm flex gap-3 align-center items-center p-5 h-fit rounded-lg hover:bg-slate-200 ease-in-out duration-150 bg-slate-100 md:min-w-[20%]">
              <FontAwesomeIcon icon={faBrush} className="text-[#e95656]" />
              <h1>Design</h1>
            </div>
            <div className="item text-black/50 text-sm flex gap-3 align-center items-center p-5 h-fit rounded-lg hover:bg-slate-200 ease-in-out duration-150  bg-slate-100 md:min-w-[20%]">
              <FontAwesomeIcon icon={faComputer} className="text-[#e95656]" />
              <h1>Graphic Design</h1>
            </div>
            <div className="item text-black/50 text-sm flex gap-3 align-center items-center p-5 h-fit rounded-lg hover:bg-slate-200 ease-in-out duration-150 bg-slate-100 md:min-w-[20%]">
              <FontAwesomeIcon icon={faVideo} className="text-[#e95656]" />
              <h1>Videography</h1>
            </div>
            <Link to="/skills">
              <button className="see">
                <div className="item text-white text-sm flex gap-3 justify-center p-5 h-fit rounded-lg hover:bg-[#e95656]  ease-in-out duration-150 bg-[#e95656]/70 md:max-w-[100px] w-full ">
                  See all
                </div>
              </button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Landing;
