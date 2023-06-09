import React, { useState } from "react";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import GoToTop from "../../components/GoToTop/GoToTop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PersonCard from "../../components/PersonCard";
import "./a.css";
import {
  faArrowLeft,
  faPencil,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";

const Apply = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="skills">
      <GoToTop />
      <Nav />
      <div className={`slideinmenu ${open ? "slideinmenu--open" : ""}`}>
        <div
          onClick={() => setOpen(false)}
          className="w-screen z-10 h-screen bg-white/5 backdrop-blur flex justify-center items-center "
        >
          <div className="lg:w-[70%] lg:h-[60%] w-[80%] h-[80%] shadow-2xl flex justify-center">
            <div className="p-5 w-[60%] bg-white h-[90%] flex flex-col justify-center items-start">
              <h1 className="text-center text-md imp mb-1">All courses</h1>
              <h1 className="text-center text-xs text-black/50">
                Click on your desired course to read more about the course.{" "}
              </h1>
              <div className="courses flex flex-col gap-1 justify-start items-start py-2">
                <div className="course">
                  <FontAwesomeIcon icon={faCircle} className="text-[5px]" />
                  <h1>Web Development</h1>
                </div>
                <div className="course">
                  <FontAwesomeIcon icon={faCircle} className="text-[5px]" />

                  <h1>Photography</h1>
                </div>
                <div className="course">
                  <FontAwesomeIcon icon={faCircle} className="text-[5px]" />

                  <h1>UI Design</h1>
                </div>
                <div className="course">
                  <FontAwesomeIcon icon={faCircle} className="text-[5px]" />

                  <h1>Project Management</h1>
                </div>
              </div>
            </div>
            <div className="side bg-yellow-600/90 w-[40%] h-full"></div>
          </div>
        </div>
      </div>

      <div className=" flex flex-col py-5 gap-5">
        <div className="flex flex-col gap-1">
          <span className="text-center text-black/60 text-sm">
            Welcome to the applications page
          </span>
          <h1 className="text-center text-3xl text-[#040715] imp sticky top-10">
            Kindly read carefully
          </h1>
        </div>
        <div className="sm:px-[25px] md:px-11 py-12 flex flex-col gap-12 justify-center items-center max-w-[1440px]">
          <div className=" w-[90%] flex flex-col gap-3 text-black/50">
            <span>Dear Prospective Student,</span>
            <span>
              We are delighted to welcome you to our highly anticipated online
              training program. Be prepared to embark on an incredible learning
              journey that will equip you with essential skills and empower you
              to thrive in today's ever-evolving world.
            </span>
            <span>
              Our program, SkillQuest, has been carefully designed to offer you
              the utmost convenience and flexibility while maintaining the
              highest standards of learning. Starting from Monday and continuing
              through Wednesday every week, you will participate in engaging
              live sessions led by expert instructors. These sessions will
              provide you with valuable insights, practical knowledge, and the
              opportunity to interact with fellow learners.
            </span>
            <span>
              But that's not all! We understand the importance of practice and
              hands-on application when it comes to skill acquisition. That's
              why we have dedicated the remaining days of the week, Thursday to
              Sunday, for you to immerse yourself in honing the skills you've
              learned during the live classes. This unique combination of
              structured instruction and self-paced practice ensures a
              comprehensive and impactful learning experience.
            </span>
            <span className="font-bold">
              To make the most of this program, please ensure that you have
              access to a functional computer system and an internet-enabled
              mobile phone. This will enable you to actively participate in our
              live sessions and fully engage with the course materials. The
              flexibility of our program also requires individuals who can
              manage their time effectively, allowing for a seamless integration
              of learning into their daily routines.
            </span>
            <span>
              To secure your spot in this highly sought-after training program,
              we kindly request that you register through our online portal
              between Sunday, April 23 and Wednesday, May 03, 2023. Please note
              that availability is limited, and slots will be filled on a
              first-come, first-served basis. Visit the courses page and select
              your desired course to explore more details and submit your
              application. Keep in mind that you can only apply to attend{" "}
              <strong>one</strong> of the listed skills as the training for all
              courses will be conducted simultaneously.
            </span>
            <span>
              If you have any further inquiries or need assistance, our
              dedicated team is here to help. You can reach us via telephone at{" "}
              <strong>+234 809 449 4441</strong> or by email at{" "}
              <strong>skillquest@edu.ng</strong>. We are committed to ensuring
              your learning journey is smooth, enjoyable, and fruitful.
            </span>
            <span>
              Don't miss this incredible opportunity to enhance your skills,
              unlock your potential, and shape a brighter future for yourself.
              We look forward to having you as part of our dynamic and
              enthusiastic learning community.
            </span>
          </div>
          <button
            onClick={() => setOpen(!open)}
            className="imp text-sm text-white bg-yellow-600 px-5 py-3 rounded-lg shadow-xl hover:shadow-xl ease-in-out duration-150"
          >
            See all available courses
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Apply;
