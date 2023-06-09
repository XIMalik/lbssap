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
          <div className="w-[100vw] justify-start flex flex-col gap-5">
            {/* <div className="flex flex-col sm:flex-row gap-3 py-5 justify-center items-center">
              <div className="flex flex-col gap-3 bg-slate-200 p-3 rounded-md h-fit w-[100%] sm:max-w-[300px]">
                <h1 className="font-bold text-sm">Disclaimer</h1>
                <span className="text-sm text-black/50">
                  Registration for all courses will require a short assessment
                  to determine compatibility.
                </span>
              </div>
              <div className="flex flex-col gap-3 bg-slate-100/50 p-3 rounded-md h-fit w-[100%] sm:max-w-[300px]">
                <h1 className="font-bold text-sm">Incentives</h1>
                <span className="text-sm text-black/50">
                  Certificates will be awarded upon the successful completion of
                  a skill acquisition program.
                </span>
              </div>
              <div className="flex flex-col gap-3 bg-slate-200 p-3 rounded-md h-fit w-[100%] sm:max-w-[300px]">
                <h1 className="font-bold text-sm">Dedication</h1>
                <span className="text-sm text-black/50">
                  Instructors will be on ground, and if needed, participants can
                  easily reach out via various channels.
                </span>
              </div>
            </div> */}
            <div className=" py-5">
              <h1 className="text-center text-black/70 text-sm">
                Displaying all programs
              </h1>
              <div className=" py-8 md:px-11 w-full flex flex-wrap gap-5 justify-center lg:justify-inline">
                <Card
                  image="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                  course="Web Development"
                  location="Coca-Cola Classroom, Lagos Business School"
                  locationstate="Lagos, LA"
                  professor="Olusegun Obasanjo"
                />
                <Card
                  image="https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Z3JhcGhpYyUyMGRlc2lnbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                  course="Graphic Design"
                  location="Video House for Comms and Interrelations Lab, Lagos Business School"
                  locationstate="Lagos, LA"
                  professor="Nick Pope"
                />
                <Card
                  image="https://images.unsplash.com/photo-1629752187687-3d3c7ea3a21b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHVpJTIwZGVzaWdufGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                  course="User Interface Design"
                  location="Istitute for Management and Research Centre, Lagos Business School"
                  locationstate="Lagos, LA"
                  professor="Ikemba Oduka"
                />
                <Card
                  image="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dXglMjByZXNlYXJjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                  course="UX Research"
                  location="IMRC Groundfloor H1 Classroom , Lagos Business School"
                  locationstate="Lagos, LA"
                  professor="Asake"
                />
              </div>
            </div>
            <button className="bg-slate-200 rounded-lg w-[20%] max-w-[300px] mx-auto mb-4 px-5 py-1">
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
