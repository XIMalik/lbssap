import React from "react";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import GoToTop from "../../components/GoToTop/GoToTop";
import "./f.css";

const Facilitators = () => {
  return (
    <div className="skills">
      <GoToTop />
      <Nav />

      <div className=" flex flex-col py-5 gap-10">
        <h1 className="text-center text-xl font-bold text-[#040715] imp sticky top-10">
          Our Facilitators
        </h1>
        <div className="flex justify-center items-center w-screen">
          <div className="profiles fac-grid-containerr w-full max-w-[1440px] px-[15px] sm:px-[25px] lg:px-[50px]">
            <div className="profile profile-grid-itemm bg-red-300 h-[40vh] sm:h-[400px]">
              <div className="img h-[70%] w-full portrait"></div>
              <div className="text w-full h-[30%] bg-gray-100 p-3 flex flex-col gap-1 justify-center items-center">
                <span className="imp font-bold">Dr. Uchenna Uzo</span>
                <span className=" text-black/60">
                  Lead Innovator, SkillQuest
                </span>
              </div>{" "}
            </div>
            <div className="profile profile-grid-itemm h-[40vh] sm:h-[400px]">
              <div className="img h-[70%] w-full portrait"></div>
              <div className="text w-full h-[30%] bg-gray-100 p-3 flex flex-col gap-1 justify-center items-center">
                <span className="imp font-bold">Malik Awesu</span>
                <span className=" text-black/60">Co-Founder, SkillQuest</span>
              </div>
            </div>

            <div className="profile profile-grid-itemm bg-red-300 h-[40vh] sm:h-[400px]">
              <div className="img h-[70%] w-full portrait"></div>
              <div className="text w-full h-[30%] bg-gray-100 p-3 flex flex-col gap-1 justify-center items-center">
                <span className="imp font-bold">Ikemba Oduka</span>
                <span className=" text-black/60">Co-Founder, SkillQuest</span>
              </div>{" "}
            </div>
            <div className="profile profile-grid-itemm bg-red-300 h-[40vh] sm:h-[400px]">
              <div className="img h-[70%] w-full portrait"></div>
              <div className="text w-full h-[30%] bg-gray-100 p-3 flex flex-col gap-1 justify-center items-center">
                <span className="imp font-bold">Ikemba Oduka</span>
                <span className=" text-black/60">Co-Founder, SkillQuest</span>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Facilitators;
