import { faAward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./c.css";
import bg from "/public/images/bg.jpg";

const Card = () => {
  const current = new Date();
  const date = `${current.getDate()}・${
    current.getMonth() + 1
  }・${current.getFullYear()}`;
  return (
    <div className="min-w-[230px] bg-white max-w-[270px] min-h-[350px] rounded-sm overflow-hidden hover:shadow-2xl hover:scale-[102%] ease-in-out duration-200">
      <div className="imgcontainer w-full h-[40%] overflow-hidden">
        <img
          src={bg}
          alt=""
          className="img hover:scale-[102%] ease-in-out duration-500"
        />
      </div>
      <div className="h-[60%] p-3 flex flex-col gap-2">
        <h1 className="text-[#e95656] text-lg font-bold mb-3">
          Web Development
        </h1>
        <span className="text-black/70 text-xs">{date}</span>
        <span className="text-black/70 text-xs">
          Coca-Cola Classroom, Lagos Business School
        </span>
        <span className="text-black/70 text-xs">Lagos, LA</span>

        <span className="text-right text-xs text-[#e95656] mt-5">
          <FontAwesomeIcon icon={faAward} className="text-xs" /> Distinguished
          Professor
        </span>
        <span className="text-black/80 text-xs font-bold text-right">
          Olusegun Obasanjo
        </span>
      </div>
    </div>
  );
};

export default Card;
