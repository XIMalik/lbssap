import { faAward, faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./c.css";
import bg from "/public/images/bg.jpg";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";

const Card = (props) => {
  const current = new Date();
  const date = `${current.getDate()}・${
    current.getMonth() + 1
  }・${current.getFullYear()}`;

  const image = props.image;
  const course = props.course;
  const location = props.location;
  const locationstate = props.locationstate;
  const professor = props.professor;
  return (
    <Link to="/skills/course">
      <div className="w-[100%] min-w-full max-w-[300px] bg-white h-[400px] rounded-sm overflow-hidden hover:shadow-2xl ease-in-out duration-200">
        <div className="imgcontainer w-full h-[40%] overflow-hidden">
          <img src={image} alt="" className="img" />
        </div>
        <div className="h-[60%] p-3 flex flex-col gap-2">
          <h1 className="text-black text-xl font-bold mb-3">{course}</h1>
          <span className="flex gap-1 text-xs align-center items-center">
            <FontAwesomeIcon
              icon={faCalendar}
              className="text-xs text-black/70 "
            />
            <span className="text-black/70 text-xs">{date}</span>
          </span>
          <span className="flex gap-1 text-xs justify-center align-middle">
            <span className="text-black/70 text-sm">{location}</span>
          </span>
          <span className="text-black/70 text-xs">{locationstate}</span>

          <span className="text-right text-xs text-yellow-600 mt-5">
            <FontAwesomeIcon icon={faAward} className="text-xs" /> Distinguished
            Professor
          </span>
          <span className="text-black/80 text-xs font-bold text-right">
            {professor}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Card;
