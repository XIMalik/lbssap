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
      <Nav />

      <div className=" flex flex-col gap-10">
        <div>
          <div className="w-[100vw] flex flex-col gap-5">
            <div className=" py-5 ">
              <div className="text-center md:text-left px-[15px] sm:px-[25px] md:px-[50px]">
                <h1 className=" text-black text-lg font-bold">
                  Programs available on SkillQuest
                </h1>
                <span className="text-black/50 text-sm">
                  Boasting a collection of over 20 available courses, ranging
                  from STEM subjects to humanitarian skills and finance.{" "}
                </span>
              </div>
              <div className="flex justify-center items-center">
                <div className=" courses-grid-containerr mb-5 px-2 md:px-12 py-8">
                  <div className="grid-item">
                    <Card
                      image="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                      course="Web Development"
                      location="Coca-Cola Classroom, Lagos Business School"
                      locationstate="Lagos, LA"
                      professor="Olusegun Obasanjo"
                    />
                  </div>
                  <div className="grid-item">
                    <Card
                      image="https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Z3JhcGhpYyUyMGRlc2lnbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                      course="Graphic Design"
                      location="Video House for Comms and Interrelations Lab, Lagos Business School"
                      locationstate="Lagos, LA"
                      professor="Nick Pope"
                    />
                  </div>
                  <div className="grid-item">
                    <Card
                      image="https://images.unsplash.com/photo-1629752187687-3d3c7ea3a21b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHVpJTIwZGVzaWdufGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                      course="User Interface Design"
                      location="Istitute for Management and Research Centre, Lagos Business School"
                      locationstate="Lagos, LA"
                      professor="Ikemba Oduka"
                    />
                  </div>
                  <div className="grid-item">
                    <Card
                      image="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dXglMjByZXNlYXJjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                      course="UX Research"
                      location="IMRC Groundfloor H1 Classroom , Lagos Business School"
                      locationstate="Lagos, LA"
                      professor="Asake"
                    />
                  </div>
                  <div className="grid-item">
                    <Card
                      image="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dXglMjByZXNlYXJjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                      course="Customer Support"
                      location="FSB Classroom"
                      locationstate="Lagos, LA"
                      professor="Dr. Etti"
                    />
                  </div>
                </div>
              </div>
            </div>
            <button className="bg-slate-200 rounded-lg w-[20%] mx-auto mb-4 px-5 py-1">
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
