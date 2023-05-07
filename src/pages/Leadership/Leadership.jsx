import React from "react";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import GoToTop from "../../components/GoToTop/GoToTop";
import "./l.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Leadership = () => {
  return (
    <div className="skills">
      <GoToTop />
      <Nav />

      <div className=" flex flex-col py-5 gap-5">
        <div className="flex flex-col gap-1">
          <span className="text-center text-blue-200">Meet</span>
          <h1 className="text-center text-3xl text-[#040715] imp sticky top-10">
            The Team
          </h1>
        </div>
        <div className="profiles h-fit sm:h-[80vh] flex flex-col sm:flex-row gap-5 items-center justify-center align-center px-7 sm:px-[25px] md:px-11 w-screen max-w-[1440px]">
          <div className="profile h-[60vh] w-fit sm:h-[500px] sm:w-fit flex flex-col rounded-sm overflow-hidden">
            <div className="w-[400px] h-[400px] bg-black overflow-hidden object-cover">
              <img
                src="https://www.hollywoodreporter.com/wp-content/uploads/2022/08/GettyImages-1409634425-H-2022.jpg?w=1296"
                alt=""
                className="object-cover w-[100%] h-[100%] ease-out duration-500"
              />
            </div>
            <div className="p-5 ease-in-out duration-200 rounded-sm relative h-[30%] w-[100%] text-black imp flex flex-col justify-center items-center">
              <h1 className="other flex flex-col font-bold gap-3 items-start text-xl">
                Ikemba Oduka
              </h1>
              <p className=" text-black/50 text-xs leading-relaxed">
                Founder, MISAP{" "}
              </p>
            </div>
          </div>
          <div className="profile h-[60vh] w-fit sm:h-[500px] sm:w-fit flex flex-col rounded-sm overflow-hidden">
            <div className="w-[400px] h-[400px] bg-black overflow-hidden object-cover">
              <img
                src="https://img.texasmonthly.com/2023/02/jonathan-majors-antman.jpg?auto=compress&crop=faces&fit=fit&fm=jpg&h=0&ixlib=php-3.3.1&q=45&w=1250"
                alt=""
                className="object-cover w-[100%] h-[100%] ease-out duration-500"
              />
            </div>
            <div className=" ease-in-out duration-200 rounded-sm relative h-[30%] w-[100%] text-black imp flex flex-col justify-center items-center">
              <h1 className="other flex flex-col gap-3 items-start text-xl">
                Malik Awesu{" "}
              </h1>
              <p className=" text-black/50 text-xs leading-relaxed">
                CTO, MISAP{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Leadership;
