import React, { useState } from "react";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import GoToTop from "../../components/GoToTop/GoToTop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PersonCard from "../../components/PersonCard";
import "./a.css";
import { faPencil, faXmark } from "@fortawesome/free-solid-svg-icons";

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
          <div className="lg:w-[70%] lg:h-[60%] w-[80%] h-[80%] bg-[#040715] shadow-2xl flex flex-col justify-center">
            <div className="p-5 bg-white h-[90%] flex flex-col justify-center items-center">
              <h1 className="text-center text-lg imp">All courses</h1>
              <h1 className="text-center text-sm text-black/50">
                NOTE: Click on your desired course to read more about the
                course.{" "}
              </h1>
              <div className="courses flex flex-col gap-1 justify-center items-center p-8">
                <div className="course">
                  <FontAwesomeIcon icon={faXmark} />
                  <h1>Web Development</h1>
                </div>
                <div className="course">
                  <FontAwesomeIcon icon={faXmark} />

                  <h1>Photography</h1>
                </div>
                <div className="course">
                  <FontAwesomeIcon icon={faXmark} />

                  <h1>UI Design</h1>
                </div>
                <div className="course">
                  <FontAwesomeIcon icon={faXmark} />

                  <h1>Project Management</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" flex flex-col py-5 gap-5">
        <div className="flex flex-col gap-1">
          <span className="text-center text-blue-200">
            Welcome to the applications page
          </span>
          <h1 className="text-center text-3xl text-[#040715] imp sticky top-10">
            Kindly read
          </h1>
        </div>
        <div className="sm:px-[25px] md:px-11 py-12 flex flex-col gap-12 justify-center items-center max-w-[1440px]">
          <div className=" w-[90%] flex flex-col gap-3 text-black/50">
            <span>Dear Prospective Student,</span>
            <span>
              Welcome to our June 2023 diet and second online training programme
              this year.
            </span>
            <span>
              Our “Live Online Classes” will run from Monday to Wednesday
              weekly, while you have the remaining days of the week till Sunday
              to practice all you have been taught on each module, in the first
              three days of the week. We are doing everything by God’s grace to
              ensure that you have a great and seamless learning experience.
            </span>
            <span className="font-bold">
              In view of the above, please note that this diet is strictly for
              individuals with functional computer systems and internet-enabled
              mobile phones. Please be informed that because of our Live
              practical sessions it is for those that have the control of their
              time.
            </span>
            <span>
              Intending participants must have unrestricted internet access to
              enable them to fully participate and engage in this edition of our
              skills acquisition programme. This is because all class training,
              discussions, assignments/projects and certifications will be
              conducted online for the duration of twenty-one days (21) this
              session.
            </span>
            <span>
              In order to attend, applicants must register through our online
              portal from Sunday, April 23 to Wednesday, May 03, 2023 subject to
              the availability of unfilled slots.
            </span>
            <span>
              Kindly select your desired option to find out more information
              about the course. (Please note that applicants can only apply to
              attend ONE of the listed skills) as the training for all the
              available courses will be taking place simultaneously.
            </span>
            <span>
              For further enquiries kindly contact us via telephone or email:
            </span>
            <div className="flex flex-col gap-3">
              <div>
                Call:
                <a href="tel:+234 809 449 4441 ">
                  <span>+234 809 449 4441 </span>
                </a>
              </div>
              <div>
                Email:
                <a href="mailto:dsapdaystar@gmail.com ">
                  <span>dsapdaystar@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
          <button
            onClick={() => setOpen(!open)}
            className="imp text-sm text-white bg-[#040715] px-5 py-3 rounded-sm shadow-xl hover:shadow-xl ease-in-out duration-150"
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
