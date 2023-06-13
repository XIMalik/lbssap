import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import GoToTop from "../../components/GoToTop/GoToTop";
import Nav from "../../components/Nav/Nav";
import "./l.css";
import bg from "/public/images/bg.jpg";
import { NavLink } from "react-router-dom";
import Card from "../../components/Card/Card";
import Swipe from "../../components/Swiper/Swiper";
import logo from "/public/images/sqwhitebold.png";

const Landing = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <GoToTop />
      <Nav />

      <div className="flex flex-col">
        <div className="introsection h-[67vh] md:h-[100vh] bg-red-100">
          <div className="flex flex-col gap-5 px-[25px] sm:px-[30px] md:px-[70px] w-screen max-w-[1440px] justify-center items-center align-center h-full">
            <div className="landing-page-text text-center flex flex-col gap-1 mb-5 text-white w-[90%]">
              <div className="flex justify-center w-full items-center">
                <NavLink to="/">
                  <img src={logo} alt="" className="scale-[80%] w-full" />
                </NavLink>
              </div>

              <span className="text-md  text-white md:text-white/80">
                Skill Acquisition Program Empowering the next generation through
                progressive and relevant education
              </span>
            </div>
            <div className="hidden lg:block">
              <div className="flex justify-between gap-5">
                <div className="text-white rectangle leading-tight justify-center w-[300px] flex flex-col items-center bg-[#00204e] h-[180px]">
                  <h1 className="text-[60px]">
                    <strong className="font-[400]">20</strong>
                  </h1>
                  <span>Robust Courses</span>
                </div>
                <div className="text-white rectangle leading-tight justify-center w-[300px] flex flex-col items-center bg-[#00204e] h-[180px]">
                  <h1 className="text-[60px]">
                    <strong className="font-[400]">70</strong>
                  </h1>
                  <span>Professional Facilitators</span>
                </div>
                <div className="text-white rectangle leading-tight justify-center w-[300px] flex flex-col items-center bg-[#00204e] h-[180px]">
                  <h1 className="text-[60px]">
                    <strong className="font-[400]">0</strong>
                  </h1>
                  <span>Students taught</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="introtocourses w-screen py-5 px-[25px] md:px-[25px] lg:px-[50px] flex flex-col mt-[90px] gap-[100px]">
          <div className="flex flex-col gap-12">
            <div className="flex justify-center items-center">
              <h1 className="text-xl md:text-3xl leading-5 lg:w-[60%] font-bold text-center w-full">
                MI Skill Acquisition Programme
              </h1>
            </div>

            <div className="w-full flex justify-between items-start gap-10">
              <div className="hidden lg:block lg:w-[50%] h-fit rounded-lg overflow-hidden shadow-black  bg-red-300">
                <img
                  src="https://images.unsplash.com/photo-1612115958726-9af4b6bd28d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2slMjBzdHVkZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="w-full lg:w-[50%] flex flex-col gap-8 ">
                <div className="text flex flex-col gap-5">
                  <p className="text-black/50 ">
                    Established since November 2009 to discover, develop and
                    release a new generation of Financial Role Model
                    Entrepreneurs through basic specialized hands-on skills
                    training who will genuinely create wealth through ethically
                    run businesses.
                  </p>
                </div>
                <div className="text flex flex-col items-start gap-5">
                  <h1 className="text-lg font-medium">MISAP is reputed for:</h1>
                  <ul className="text-black/50 list-disc flex flex-col gap-3 w-[100%] px-2">
                    <li>
                      Having trained and graduated over 13,890 individuals many
                      of whom are running profitable businesses within and
                      outside Nigeria.
                    </li>
                    <li>
                      Having trained and graduated over 13,890 individuals many
                      of whom are running profitable businesses within and
                      outside Nigeria.
                    </li>
                    <li>
                      Having trained and graduated over 13,890 individuals many
                      of whom are running profitable businesses within and
                      outside Nigeria.
                    </li>
                    <li>
                      Having trained and graduated over 13,890 individuals many
                      of whom are running profitable businesses within and
                      outside Nigeria.
                    </li>
                  </ul>
                  <NavLink to="/courses">
                    <button className="text-sm px-3 py-2 imp rounded-sm uppercase text-yellow-600">
                      Learn more
                    </button>
                  </NavLink>
                </div>
                {/* <div className="gap-1 flex flex-col">
                <h1 className=" py-1 text-[#e95656] text-md font-semibold">
                  Offering skills essential in todays job market
                </h1>
                <p className=" text-black/50 text-sm">
                  Skills attainable within a fixed period of time under the
                  tutelage of experienced individuals
                </p>
              </div>
              <div className="items bg-white w-full h-full flex flex-wrap gap-5">
                <div className="item text-black/50 text-sm flex gap-3 align-center items-center p-5 h-fit rounded-lg hover:bg-slate-200 ease-in-out duration-150 bg-slate-100  md:min-w-[20%]">
                  <FontAwesomeIcon icon={faCode} className="text-[#e95656]" />
                  <h1>Web Development</h1>
                </div>
                <div className="item text-black/50 text-sm flex gap-3 align-center items-center p-5 h-fit rounded-lg hover:bg-slate-200 ease-in-out duration-150 bg-slate-100 md:min-w-[20%]">
                  <FontAwesomeIcon icon={faBrush} className="text-[#e95656]" />
                  <h1>Design</h1>
                </div>
                <div className="item text-black/50 text-sm flex gap-3 align-center items-center p-5 h-fit rounded-lg hover:bg-slate-200 ease-in-out duration-150  bg-slate-100 md:min-w-[20%]">
                  <FontAwesomeIcon
                    icon={faComputer}
                    className="text-[#e95656]"
                  />
                  <h1>Graphic Design</h1>
                </div>
                <div className="item text-black/50 text-sm flex gap-3 align-center items-center p-5 h-fit rounded-lg hover:bg-slate-200 ease-in-out duration-150 bg-slate-100 md:min-w-[20%]">
                  <FontAwesomeIcon icon={faVideo} className="text-[#e95656]" />
                  <h1>Videography</h1>
                </div>
                <Link to="/skills">
                  <button className="see">
                    <div className="item text-white text-sm flex gap-3 justify-center p-5 h-fit rounded-lg hover:bg-[#e95656]  ease-in-out duration-150 bg-[#e95656]/70 md:max-w-[100px] w-full ">
                      See all
                    </div>
                  </button>
                </Link>
              </div> */}
              </div>
            </div>
          </div>
        </div>

        <div className="skillsoffered mb-8 items-center bg-slate-200 mt-[90px]">
          <div className="container flex flex-col justify-center items-center w-full min-w-[100%]">
            <h1 className="text-xl md:text-3xl leading-5 lg:w-[60%] font-bold text-center w-full mt-5 mb-2">
              Our Courses
            </h1>
            <h6 className="text-xs mb-5 text-[#333]">
              Skills offered by MISAP
            </h6>
            <div className="courses-grid-containerr mb-5 px-2 md:px-12">
              <div className="grid-item">
                {" "}
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
                  location="Video House for Comms Lab, Lagos Business School"
                  locationstate="Lagos, LA"
                  professor="Nick Pope"
                />
              </div>
              <div className="grid-item">
                <Card
                  image="https://images.unsplash.com/photo-1629752187687-3d3c7ea3a21b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHVpJTIwZGVzaWdufGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                  course="User Interface Design"
                  location="IMRC, Lagos Business School"
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
            </div>
            <NavLink to="/skills">
              <button className="text-sm bg-yellow-600 px-8 py-3 mb-5 imp rounded-sm text-white">
                See all{" "}
              </button>
            </NavLink>{" "}
          </div>
        </div>
        <div className="testimonials h-[90vh] flex justify-center py-5">
          <div className="container flex flex-col justify-center items-center">
            <h6 className="text-xs mb-2 text-white">Reviews by students</h6>
            <h1 className="imp text-4xl mb-8 text-white text-center font-semibold">
              Student testimonials
            </h1>
            <div className="flex max-w-full justify-between align-center items-center overflow-scroll scrollbar-hide mb-5 gap-3">
              <Swipe />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Landing;
