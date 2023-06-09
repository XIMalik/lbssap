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
import Swiper from "../../components/Swiper/Swiper";
import Swiperfunction from "../../components/Swiper/Swiper";

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

      <div className="contain px-[15px] sm:px-[30px] md:px-[50px] py-5 w-screen max-w-[1440px] justify-center">
        <div
          onClick={() => setOpen(true)}
          className=" bg-white shadow-2xl stick fixed gap-3 bottom-5 hover:bg-yellow-600 flex justify-center items-center border-[0.1px] ease-in-out duration-500 border-solid border-yellow-600 rounded-full h-fit w-[100px] right-5"
        >
          <button className="w-full" type="submit">
            <div className="w-full text-black text-sm justify-center p-3 h-fit rounded-full ease-in-out duration-150">
              Register
            </div>
          </button>
        </div>
        <div className="stick flex gap-3 h-[550px]">
          <div className="maincontent flex flex-col w-[100%] md:w-[75%] gap-10 py-5">
            <div className="flex flex-col gap-3">
              <span className="text-sm font-semibold text-black/50">
                {date}
              </span>
              <h1 className="text-2xl font-extrabold text-black imp">
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
                      className="text-black text-sm"
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
                      className="text-black text-sm"
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
                      className="text-black text-sm"
                    />
                  </div>
                  <h1 className="font-bold text-sm text-black">5 weeks</h1>
                </div>
                <div className=" rounded-lg flex gap-3 max-w-[400px] align-center items-center">
                  <div className="p-3 rounded-lg bg-slate-200 flex justify-center items-center h-fit align-center">
                    <FontAwesomeIcon
                      icon={faPeopleGroup}
                      className="text-black text-sm"
                    />
                  </div>
                  <h1 className="font-bold text-sm text-black">In-person</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[100%] bg-yellow-400 w-[25%]">
            <h1>hello world</h1>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Course;
