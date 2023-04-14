import React from "react";
import Nav from "../../components/Nav/Nav";
import "./s.css";
import Card from "../../components/Card/Card";
import Footer from "../../components/Footer/Footer";
import GoToTop from "../../components/GoToTop/GoToTop";

const Skills = () => {
  return (
    <div className="skills">
      <GoToTop />
      <div className=" flex flex-col gap-10">
        <div className="head h-[60vh] md:h-[60vh] bg-red-100">
          <Nav />
          <div className="flex flex-col px-[25px] sm:px-[30px] md:px-[70px] w-screen max-w-[1440px] justify-center align-center items-left h-full">
            <div className="landing-page-text flex flex-col gap-1 text-white w-[90%] ">
              <span className="text-lg font-bold">Programs on offer</span>
              <span className="text-sm text-white md:text-white/80 leading-loose">
                Through a selective and methodical approach to program
                selection, we offer what we believe to be skills that will be
                relevant for decades to come
              </span>
            </div>
          </div>
        </div>
        <div>
          <div className="extraText px-[25px] sm:px-[30px] md:px-[70px] flex flex-col gap-1 mb-10 ">
            <h1 className="font-bold text-lg">Acquire new skills</h1>
            <span className="text-sm leading-relaxed text-black/50 ">
              The skill acquisition courses page, where you can explore a range
              of courses designed to help you acquire new skills and enhance
              your existing ones. Whether you're looking to further your career,
              start a new hobby, or simply learn something new, we have a course
              that will suit your needs. <br /> We offer courses in a variety of
              fields, including technology, business, creative arts, and
              personal development. Our courses are taught by industry experts
              who have real-world experience in their respective fields,
              ensuring that you receive practical and applicable knowledge.{" "}
              <br /> Our technology courses cover topics such as coding, web
              development, and data analysis. Our business courses include
              topics such as marketing, entrepreneurship, and finance. <br />{" "}
              For those interested in creative arts, we offer courses in
              photography, graphic design, and video production. We also have
              courses in personal development, including meditation,
              mindfulness, and leadership. <br /> Our instructor-led courses are
              conducted live and include interactive sessions where you can ask
              questions and receive feedback from the instructor. All our
              courses come with a certificate of completion, which you can add
              to your resume or portfolio to showcase your new skills.
            </span>
          </div>
          <div className="w-[100vw] px-[25px] sm:px-[30px] md:px-[70px] justify-start flex flex-col gap-10">
            <div className="flex flex-wrap gap-3 py-5 border-t-[0.5px] border-slate-200/50 justify-center">
              <div className="flex flex-col gap-3 bg-slate-200 p-3 rounded-md h-fit max-w-[300px]">
                <h1 className="font-bold text-sm">Disclaimer</h1>
                <span className="text-sm text-black/50">
                  Registration for all courses will require a short assessment
                  to determine compatibility.
                </span>
              </div>
              <div className="flex flex-col gap-3 bg-slate-100/50 p-3 rounded-md h-fit max-w-[300px]">
                <h1 className="font-bold text-sm">Incentives</h1>
                <span className="text-sm text-black/50">
                  Certificates will be awarded upon the successful completion of
                  a skill acquisition program.
                </span>
              </div>
              <div className="flex flex-col gap-3 bg-slate-200 p-3 rounded-md h-fit max-w-[300px]">
                <h1 className="font-bold text-sm">Dedication</h1>
                <span className="text-sm text-black/50">
                  Instructors will be on ground, and if needed, participants can
                  easily reach out via various channels.
                </span>
              </div>
            </div>
            <div className=" py-5">
              <h1 className="text-center text-black/70 text-sm">
                All programs
              </h1>
              <div className=" py-8 w-full sm:w-[100%] flex flex-wrap align-left gap-5 justify-center md:justify-center">
                <Card />
                <Card />
                <Card />
                <Card />
              </div>
            </div>
            <button className="bg-slate-100 rounded-lg w-[60%] mx-auto px-10 py-1">
              <span className="text-xs text-black/50">Load more</span>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Skills;
