import React from "react";

const About = () => {
  return (
    <div className="flex justify-center items-center align-center h-screen flex-col gap-2">
      <div className="flex justify-center items-center align-center">
        <h1 className="text-[100px] text-red-600">🚩</h1>
      </div>
      <h1 className="text-xl md:text-3xl font-extrabold imp text-red-700 imp text-center uppercase">
        Forbidden path
      </h1>
      <span className="text-sm text-black/50">Get out bro</span>
    </div>
  );
};
export default About;
