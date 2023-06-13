import { faCalendar, faXmarkCircle } from "@fortawesome/free-regular-svg-icons";
import {
  faCertificate,
  faCheck,
  faLocationPin,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Nav from "../../components/Nav/Nav";
import "./c.css";
import Form from "../../components/Form/Form";
import Footer from "../../components/Footer/Footer";
import GoToTop from "../../components/GoToTop/GoToTop";
import { useNavigate } from "react-router-dom";

const Course = () => {
  const [open, setOpen] = useState(false);
  const go = useNavigate();

  return (
    <div>
      <GoToTop />
      <Nav />

      <div className="form">
        {open && (
          <div className="sticky top-0 z-50">
            <div className="absolute z-50">
              <div className="py-2 px-10 bg-black/30 backdrop-blur-lg w-screen flex justify-center md:justify-start">
                <button onClick={go("/formpage")}>
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

      <div className="contain mb-12 flex flex-col gap-12 w-screen max-w-[1440px] justify-center">
        <div className="stick flex flex-col lg:flex-row gap-12 bg-blue-100/50 py-8 h-fit">
          <div className="maincontent flex flex-col w-[100%] lg:w-[65%] gap-10 px-[15px] sm:px-[25px] md:px-[50px]">
            <div className="flex flex-col gap-6 w-full">
              {/* <span className="text-sm font-semibold text-black/50">
                {date}
              </span> */}
              <h1 className="text-5xl font-medium text-center md:text-left text-black">
                Web Development
              </h1>
              <span className="text-sm text-center md:text-left text-black/80">
                Start your path to a career in web development. In this program,
                you’ll learn in-demand skills that will have you job-ready in
                less than six months. No degree or experience is required.
              </span>
              <div className="instructor flex flex-col md:flex-row gap-2 items-center">
                <div className=" px-7 text-blue-600 font-semibold text-sm justify-center rounded-full ease-in-out duration-150">
                  Instructor
                </div>
                <span className="text-xs text-black/50 text-center">
                  Seasoned Professional with working experience at top
                  organizations such as Deloitte and UBA
                </span>
              </div>
              <div className="buttonclick flex flex-col md:flex-row gap-2 items-center">
                <div onClick={() => setOpen(true)}>
                  <button
                    className=" px-[150px] md:px-8 py-4 bg-white rounded-sm hover:bg-blue-200"
                    type="submit"
                  >
                    <div className=" text-blue-600 font-semibold text-sm justify-center ease-in-out duration-150">
                      Register
                    </div>
                  </button>
                </div>
                <span className="text-xs text-black/50">
                  Try for Free: Enroll to start your 7-day full access free
                  trial
                </span>
              </div>
            </div>
            <div className="when flex flex-col gap-5">
              <h3 className="tex-md font-bold text-black">When and where</h3>
              <div className="icons flex flex-col md:flex-row md:gap-8 gap-5  ">
                <div className=" rounded-lg flex gap-3 max-w-[400px]">
                  <div className="p-3 rounded-lg bg-slate-200 flex justify-center items-center h-fit align-center">
                    <FontAwesomeIcon
                      icon={faCalendar}
                      className="text-blue-600 text-sm"
                    />
                  </div>
                  <div>
                    <h1 className="font-bold text-sm">Date and time</h1>
                    <span className="text-sm text-black/50">
                      Starts on Saturday, April 29 · 11am WAT
                    </span>
                  </div>
                </div>
                <div className=" rounded-lg flex gap-3 max-w-[400px]">
                  <div className="p-3 rounded-lg bg-slate-200 flex justify-center items-center h-fit align-center">
                    <FontAwesomeIcon
                      icon={faLocationPin}
                      className="text-blue-600 text-sm"
                    />
                  </div>
                  <div>
                    <h1 className="font-bold text-sm">Location</h1>
                    <span className="text-sm text-black/50">
                      Coca-Cola Classroom, Lagos Business School
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-full lg:flex lg:w-[35%] px-[15px] sm:px-[25px] md:px-[50px]">
            <div className="w-full rounded-lg shadow-2xl sticky top-[80px] bg-white p-5">
              <div className="flex flex-col gap-1 border-b-[0.5px] border-solid border-black/20 py-5">
                <h1 className="font-medium">
                  Professional Certificate - 8 course series
                </h1>
                <span className="text-xs text-black/50">
                  Earn a career credential that demonstrates your expertise
                </span>
              </div>
              <div className="flex flex-col py-5 gap-5">
                <span className="flex gap-1 items-center font-medium">
                  {" "}
                  4.0{" "}
                  <FontAwesomeIcon icon={faStar} className="text-blue-600" />
                  <span className="text-xs text-black/50">(81000 reviews)</span>
                </span>
                <span className="flex flex-col gap-1">
                  {" "}
                  <span className="font-medium"> Beginner friendly</span>
                  <span className="text-xs text-black/50">
                    This course is designed to help onboard beginners
                  </span>
                </span>
                <span className="flex flex-col gap-1 font-medium">
                  3 months at 4 hours per week
                </span>
                <span className="flex flex-col gap-1">
                  <span className="font-medium"> Fixed learning schedule</span>
                  <span className="text-xs text-black/50">
                    This course will have a meeting time for every meeting,
                    which will cater for both the student and the instructor
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="informationabout flex flex-col gap-12 px-[15px] sm:px-[25px] md:px-[50px]">
          <div className="whatyoulearn flex flex-col gap-3">
            <h1 className="font-medium">What you'll learn</h1>
            <div className="flex flex-col md:flex-row gap-3">
              <div className="thingtolearn text-black/50 w-full md:w-[25%] text-sm flex gap-4 items-start">
                <FontAwesomeIcon icon={faCheck} />{" "}
                <span>
                  Gain an immersive understanding of the practices and skills
                  needed to succeed in an entry-level project management role
                </span>
              </div>
              <div className="thingtolearn text-black/50 w-full md:w-[25%] text-sm flex gap-4 items-start">
                <FontAwesomeIcon icon={faCheck} />{" "}
                <span>
                  Gain an immersive understanding of the practices and skills
                  needed to succeed in an entry-level project management role
                </span>
              </div>
              <div className="thingtolearn text-black/50 w-full md:w-[25%] text-sm flex gap-4 items-start">
                <FontAwesomeIcon icon={faCheck} />{" "}
                <span>
                  Gain an immersive understanding of the practices and skills
                  needed to succeed in an entry-level project management role
                </span>
              </div>
              <div className="thingtolearn text-black/50 w-full md:w-[25%] text-sm flex gap-4 items-start">
                <FontAwesomeIcon icon={faCheck} />{" "}
                <span>
                  Gain an immersive understanding of the practices and skills
                  needed to succeed in an entry-level project management role
                </span>
              </div>
            </div>
          </div>
          <div className="skillsyougain flex flex-col gap-3">
            <h1 className="font-medium">
              Skills you'll gain from this program
            </h1>
            <div className="flex gap-3">
              <span className="skiltogain text-black rounded-lg bg-gray-200 p-2 text-sm flex gap-4 items-start">
                HTML
              </span>
              <span className="skiltogain text-black rounded-lg bg-gray-200 p-2 text-sm flex gap-4 items-start">
                CSS
              </span>
              <span className="skiltogain text-black rounded-lg bg-gray-200 p-2 text-sm flex gap-4 items-start">
                Javascript
              </span>
            </div>
          </div>
          <div className="detailstoknow flex flex-col gap-3">
            <h1 className="font-medium">Details to keep note of</h1>
            <div className="flex flex-col gap-3">
              <div className="detail flex gap-3 items-center">
                <span className="text-sm text-black/50">
                  Certificate of completion will be awarded based on performance
                  in assessments throughout duration of course
                </span>
                <FontAwesomeIcon
                  icon={faCertificate}
                  className="text-blue-600"
                />
              </div>
              <div className="detail flex gap-3 items-center">
                <span className="text-sm text-black/50">
                  Official language of communication and learning will be
                  English
                </span>
              </div>
              <div className="detail flex gap-3 items-center">
                <span className="text-sm text-black/50">
                  All classes will be recoreded in the case of an absence
                </span>
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

{
  /* <div className="about flex flex-col gap-3">
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
            </div> */
}
