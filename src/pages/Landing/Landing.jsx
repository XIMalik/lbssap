import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import GoToTop from "../../components/GoToTop/GoToTop";
import Nav from "../../components/Nav/Nav";
import "./l.css";
import bg from "/public/images/bg.jpg";
import { NavLink } from "react-router-dom";
import Card from "../../components/Card/Card";
import { faPerson } from "@fortawesome/free-solid-svg-icons";
import { faFaceSmileBeam } from "@fortawesome/free-regular-svg-icons";

const Landing = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <GoToTop />

      <div className="flex flex-col">
        <Nav />

        <div className="introsection h-[67vh] md:h-[100vh] bg-red-100">
          <div className="flex flex-col gap-5 px-[25px] sm:px-[30px] md:px-[70px] w-screen max-w-[1440px] justify-center items-center align-center h-full">
            <div className="landing-page-text text-center flex flex-col gap-1 mb-10 text-white w-[90%]">
              <h1 className="imp text-[60px] sm:text-[60px] md:text-[70px] font-bold leading-tight sm:leading-tight">
                Skill Acquisition Program
              </h1>
              <span className="text-sm text-white md:text-white/80">
                Empowering the next generation through progressive and relevant
                education
              </span>
            </div>
            <div className="hidden lg:block">
              <div className="flex justify-between gap-5">
                <div className="rectangle w-[300px] flex flex-col items-center bg-white h-[150px]">
                  <h1 className="text-[80px] text-blue-500">
                    <strong>20</strong>
                  </h1>
                  <span>Robust Courses</span>
                </div>
                <div className="rectangle w-[300px] flex flex-col items-center bg-white h-[150px]">
                  <h1 className="text-[80px] text-blue-500">
                    <strong>70</strong>
                  </h1>
                  <span>Professional Facilitators</span>
                </div>
                <div className="rectangle w-[300px] flex flex-col items-center bg-white h-[150px]">
                  <h1 className="text-[80px] text-blue-500">
                    <strong>0</strong>
                  </h1>
                  <span>Students taught</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="introtocourses w-screen py-5 px-[25px] md:px-[25px] lg:px-[50px] flex flex-col gap-[100px]">
          <div className="w-full flex justif-between items-center gap-10">
            <div className="w-full lg:w-[60%] flex flex-col gap-8 ">
              <div className="text flex flex-col gap-5">
                <h1 className="text-xl md:text-4xl leading-5 w-full lg:w-[60%] font-bold">
                  MI Skill Acquisition Programme
                </h1>
                <p className="text-black/50 ">
                  Established since November 2009 to discover, develop and
                  release a new generation of Financial Role Model Entrepreneurs
                  through basic specialized hands-on skills training who will
                  genuinely create wealth through ethically run businesses.
                </p>
              </div>
              <div className="text flex flex-col items-start gap-5">
                <h1 className="text-lg font-medium">MISAP is reputed for:</h1>
                <ul className="text-black/50 list-disc flex flex-col gap-3 w-[80%] px-5">
                  <li>
                    Having trained and graduated over 13,890 individuals many of
                    whom are running profitable businesses within and outside
                    Nigeria.
                  </li>
                  <li>
                    Having trained and graduated over 13,890 individuals many of
                    whom are running profitable businesses within and outside
                    Nigeria.
                  </li>
                  <li>
                    Having trained and graduated over 13,890 individuals many of
                    whom are running profitable businesses within and outside
                    Nigeria.
                  </li>
                  <li>
                    Having trained and graduated over 13,890 individuals many of
                    whom are running profitable businesses within and outside
                    Nigeria.
                  </li>
                </ul>
                <NavLink to="/courses">
                  <button className="text-sm bg-[#040715] px-3 py-2 imp rounded-sm uppercase text-white">
                    Learn more
                  </button>
                </NavLink>
              </div>
              {/* <div className="gap-1 flex flex-col">
                <h1 className=" py-1 text-[#e95656] text-md font-semibold">
                  Offering skills essential in todays job market
                </h1>
                <p className=" text-black/50 text-sm">
                  Skills attainable within a fixed period of time under the
                  tutelage of experienced individuals
                </p>
              </div>
              <div className="items bg-white w-full h-full flex flex-wrap gap-5">
                <div className="item text-black/50 text-sm flex gap-3 align-center items-center p-5 h-fit rounded-lg hover:bg-slate-200 ease-in-out duration-150 bg-slate-100  md:min-w-[20%]">
                  <FontAwesomeIcon icon={faCode} className="text-[#e95656]" />
                  <h1>Web Development</h1>
                </div>
                <div className="item text-black/50 text-sm flex gap-3 align-center items-center p-5 h-fit rounded-lg hover:bg-slate-200 ease-in-out duration-150 bg-slate-100 md:min-w-[20%]">
                  <FontAwesomeIcon icon={faBrush} className="text-[#e95656]" />
                  <h1>Design</h1>
                </div>
                <div className="item text-black/50 text-sm flex gap-3 align-center items-center p-5 h-fit rounded-lg hover:bg-slate-200 ease-in-out duration-150  bg-slate-100 md:min-w-[20%]">
                  <FontAwesomeIcon
                    icon={faComputer}
                    className="text-[#e95656]"
                  />
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
              </div> */}
            </div>
            <div className="hidden lg:block lg:w-[40%] h-fit rounded-lg overflow-hidden shadow-black shadow-2xl bg-red-300">
              <img src={bg} alt="" />
            </div>
          </div>
          <div className="skillsoffered mb-8 sm:bg-blue-100 items-center p-5">
            <div className="container flex flex-col justify-center items-center min-w-[100%]">
              <h6 className="text-xs mb-2 text-black/30">
                Skills offered by MISAP
              </h6>
              <h1 className="imp text-4xl mb-8 font-semibold">Our Courses</h1>
              <div className="flex flex-wrap justify-center overflow-scroll scrollbar-hide mb-8 gap-5">
                <Card />
                <Card />
                <Card />
                <Card />
              </div>
              <NavLink to="/courses">
                <button className="text-sm bg-[#040715] px-5 py-2 imp rounded-sm uppercase text-white">
                  See all{" "}
                </button>
              </NavLink>{" "}
            </div>
          </div>
        </div>
        <div className="testimonials h-[80vh] flex justify-center py-5">
          <div className="container flex flex-col justify-center items-center">
            <h6 className="text-xs mb-2 text-white">Reviews by students</h6>
            <h1 className="imp text-4xl mb-8 text-white font-semibold">
              Student testimonials
            </h1>
            <div className="flex max-w-full justify-between overflow-scroll scrollbar-hide mb-5 gap-3">
              <div className="testimonial w-[300px] h-[180px] bg-white/50 rounded-sm">
                <FontAwesomeIcon className="icon" icon={faFaceSmileBeam} />
                <span>Reviews soon coming</span>
              </div>
              <div className="testimonial w-[300px] h-[180px] bg-white/50 rounded-sm">
                {" "}
                <FontAwesomeIcon className="icon" icon={faFaceSmileBeam} />
                <span>Reviews soon coming</span>
              </div>
              <div className="testimonial w-[300px] h-[180px] bg-white/50 rounded-sm">
                {" "}
                <FontAwesomeIcon className="icon" icon={faFaceSmileBeam} />
                <span>Reviews soon coming</span>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Landing;
