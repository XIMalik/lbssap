import React from "react";

const PersonCard = () => {
  return (
    <div>
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
          <p className=" text-black/50 text-xs leading-relaxed">CTO, MISAP </p>
        </div>
      </div>
    </div>
  );
};

export default PersonCard;
