import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import undraw from "/images/undraw.svg";

const Formsubmit = () => {
  const nav = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      nav("/skills"); // Replace with the URL of the page you want to redirect to
    }, 10000); // Replace 3000 with the delay time in milliseconds

    return () => clearTimeout(timeout); // This is to clean up the timeout when the component unmounts
  }, [history]);

  return (
    <div className="flex justify-center items-center align-center h-screen flex-col gap-2">
      <span className="text-xs text-black/30">
        This page will rediret in 10 seconds
      </span>
      <div className="h-[400px] w-[400px] flex justify-center items-center align-center">
        <img src={undraw} alt="" className="" />
      </div>
      <h1 className="text-xl md:text-3xl font-extrabold imp text-red-400 text-center">
        Your form was succesfully submitted!
      </h1>
      <span className="text-sm text-black/50">
        Please expect a follow up email within two days.
      </span>
    </div>
  );
};

export default Formsubmit;
