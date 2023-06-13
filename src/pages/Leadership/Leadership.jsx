import React from "react";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import GoToTop from "../../components/GoToTop/GoToTop";
import "./l.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import mruche from "/public/images/mruche.jpg";
import ikemba from "/public/images/ikemba.jpg";
import me from "/public/images/me.jpg";

const Leadership = () => {
  return (
    <div className="skills">
      <GoToTop />
      <Nav />

      <div className=" flex flex-col h-[100vh] md:h-[80vh] py-5 gap-5">
        <div className="flex flex-col gap-1">
          <h1 className="text-center text-lg font-bold text-[#040715] imp sticky top-10">
            The team
          </h1>
        </div>
        <div className="flex justify-center items-center w-screen">
          <div className="profiles profiles-grid-containerr w-full max-w-[1440px] px-[15px] sm:px-[25px] lg:px-[50px]">
            <div className="profile profile-grid-itemm rounded-lg overflow-hidden bg-red-300 h-[40vh] sm:h-[400px]">
              <div className="h-[70%] w-full portrait">
                <img
                  src={mruche}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text w-full h-[30%] bg-gray-100 p-3 flex flex-col gap-1 justify-center items-center">
                <span className="imp font-bold">Dr. Uchenna Uzo</span>
                <span className="text-sm text-black/60">
                  Lead Innovator, SkillQuest
                </span>
              </div>{" "}
            </div>
            <div className="profile profile-grid-itemm rounded-lg overflow-hidden bg-red-300 h-[40vh] sm:h-[400px]">
              <div className="h-[70%] w-full portrait">
                <img
                  src={ikemba}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text w-full h-[30%] bg-gray-100 p-3 flex flex-col gap-1 justify-center items-center">
                <span className="imp font-semibold">Ikemba Oduka</span>
                <span className="text-sm text-black/60">
                  Founder, SkillQuest
                </span>
              </div>{" "}
            </div>
            <div className="profile profile-grid-itemm rounded-lg overflow-hidden h-[40vh] sm:h-[400px]">
              <div className="h-[70%] w-full portrait">
                <img src={me} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="text w-full h-[30%] bg-gray-100 p-3 flex flex-col gap-1 justify-center items-center">
                <span className="imp font-bold">Malik Awesu</span>
                <span className="text-sm text-black/60">
                  Co-Founder, SkillQuest
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

export default Leadership;
