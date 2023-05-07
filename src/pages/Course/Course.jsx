import {
  faCalendar,
  faClock,
  faXmarkCircle,
} from "@fortawesome/free-regular-svg-icons";
import {
  faLocation,
  faLocationPin,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Nav from "../../components/Nav/Nav";
import "./c.css";
import Form from "../../components/Form/Form";
import Footer from "../../components/Footer/Footer";
import GoToTop from "../../components/GoToTop/GoToTop";

const Course = () => {
  const [open, setOpen] = useState(false);

  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  return (
    <div>
      <GoToTop />
      <Nav />

      <div className="web h-[60vh] bg-red-100">
        {open && (
          <div className="sticky top-0 z-50">
            <div className="absolute z-50">
              <div className="py-2 px-10 bg-black/30 backdrop-blur-lg w-screen flex justify-center md:justify-start">
                <button onClick={() => setOpen(false)}>
                  <FontAwesomeIcon
                    icon={faXmarkCircle}
                    className="text-white"
                  />
                </button>
              </div>
              <Form />
            </div>
          </div>
        )}
      </div>
      <div className="contain px-[20px] sm:px-[30px] md:px-[70px] py-5 w-screen max-w-[1440px] justify-center">
        <div className=" bg-white shadow-xl stick fixed flex flex-col gap-3 bottom-5 border-[0.5px] border-solid border-red-400/20 rounded-xl h-fit w-[150px] p-1 right-5">
          <button
            className="w-full"
            type="submit"
            onClick={() => setOpen(true)}
          >
            <div className="w-fit text-white text-sm justify-center p-3 h-fit rounded-lg hover:bg-[#e95656] ease-in-out duration-150 bg-[#e95656]/70 ">
              Register
            </div>
          </button>
        </div>
        <div className="stick">
          <div className="maincontent flex flex-col rounded-lg w-[100%] md:w-[85%] gap-10 p-5">
            <div className="flex flex-col gap-1">
              <span className="text-xs text-red-400">{date}</span>
              <h1 className="text-[50px] sm:text-[60px] font-extrabold text-red-400 imp">
                Web Development
              </h1>
              <span className="text-sm text-black/50">
                LDMT '23 Get a taste of all the digital marketing magic tricks
                we can show you this March 18th at the LAGOS DIGITAL MARKETING
                TRAINING 2023.
              </span>
            </div>
            <div className="when flex flex-col gap-5">
              <h3 className="tex-md font-bold text-black">When and where</h3>
              <div className="icons flex flex-col md:flex-row md:gap-8 gap-5  ">
                <div className=" rounded-lg flex gap-3 max-w-[400px]">
                  <div className="p-3 rounded-lg bg-slate-200 flex justify-center items-center h-fit align-center">
                    <FontAwesomeIcon
                      icon={faCalendar}
                      className="text-red-500 text-sm"
                    />
                  </div>
                  <div>
                    <h1 className="font-bold text-sm">Date and time</h1>
                    <span className="text-sm text-black/70">
                      Starts on Saturday, April 29 · 11am WAT
                    </span>
                  </div>
                </div>
                <div className=" rounded-lg flex gap-3 max-w-[400px]">
                  <div className="p-3 rounded-lg bg-slate-200 flex justify-center items-center h-fit align-center">
                    <FontAwesomeIcon
                      icon={faLocationPin}
                      className="text-red-500 text-sm"
                    />
                  </div>
                  <div>
                    <h1 className="font-bold text-sm">Location</h1>
                    <span className="text-sm text-black/70">
                      Coca-Cola Classroom, Lagos Business School
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="about flex flex-col gap-3">
              <h3 className="tex-md font-bold text-black">
                About this program
              </h3>
              <span className="text-sm leading-relaxed text-black/50">
                A web development course in a skill acquisition program is an
                excellent opportunity for individuals to learn the technical
                skills necessary to create dynamic and functional websites. The
                course typically covers topics such as HTML, CSS, JavaScript,
                and other programming languages that are essential for building
                websites. Participants in the course will learn how to design,
                develop, and deploy websites that are both user-friendly and
                visually appealing. By the end of the course, students will have
                acquired the necessary skills to pursue a career in web
                development or to create their own websites for personal or
                business use.
              </span>
              <div className="iconsabout flex gap-5">
                <div className=" rounded-lg flex gap-3 max-w-[400px] align-center items-center">
                  <div className="p-3 rounded-lg bg-slate-200 flex justify-center items-center h-fit align-center">
                    <FontAwesomeIcon
                      icon={faClock}
                      className="text-red-500 text-sm"
                    />
                  </div>
                  <h1 className="font-bold text-sm text-red-400">5 weeks</h1>
                </div>
                <div className=" rounded-lg flex gap-3 max-w-[400px] align-center items-center">
                  <div className="p-3 rounded-lg bg-slate-200 flex justify-center items-center h-fit align-center">
                    <FontAwesomeIcon
                      icon={faPeopleGroup}
                      className="text-red-500 text-sm"
                    />
                  </div>
                  <h1 className="font-bold text-sm text-red-400">In-person</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Course;
