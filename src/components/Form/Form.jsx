import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./f.css";
import 

export default function Form() {
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [why, setWhy] = useState("");
  const [confirm, setConfirm] = useState("");
  const [doyou, setDoYou] = useState("");
  const [ifNo, setIfNo] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("https://api.apispreadsheets.com/data/pUWfLu0Zt13Z47Zr/", {
      method: "POST",
      body: JSON.stringify({
        data: {
          Age: age,
          "Last Name": lname,
          "First Name": fname,
          "Email address": email,
          "Confirm program of choice": confirm,
          "Why is this a good fit for you?": why,
          "Do you have a background in the selected program": doyou,
          "If no, please state why you want to join this program": ifNo,
        },
      }),
    }).then((res) => {
      if (res.status === 201) {
        // SUCCESS
      } else {
        // ERROR
      }
    });

    fetch(
      "https://api.apispreadsheets.com/data/pUWfLu0Zt13Z47Zr/?query=delete from pUWfLu0Zt13Z47Zr where Age=17"
    ).then((res) => {
      if (res.status === 200) {
        // SUCCESS
      } else {
        // ERROR
      }
    });
  };

  return (
    <div className="sticky left-0 z-50">
      <div className="slider absolute md:px-10 bg-red-400/30 overflow-scroll p-10 flex flex-col gap-5 backdrop-blur-2xl  w-screen h-screen">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 shadow-3xl min-w-[400px] max-w-[700px] justify-center bg-white rounded-md  p-12 md:p-12 text-sm"
        >
          <div className="flex gap-5 justify-between">
            <label className="group w-[50%]">
              <span className="text-slate-500 text-sm">First name</span>
              <input
                type="text"
                value={fname}
                onChange={(e) => setFName(e.target.value)}
                className=" bg-gray-100/50 ease-in duration-150 hover:bg-slate-200 focus:ring-[1px] focus:ring-red-300 border-0 outline-0 p-2 w-[100%] max-w-[1000px] placeholder-[#040715]/40 rounded-sm mb-5"
              />
            </label>
            <label className="group w-[50%]">
              <span className="text-slate-500 text-sm">Last name</span>
              <input
                type="text"
                value={lname}
                onChange={(e) => setLName(e.target.value)}
                className=" bg-gray-100/50  ease-in duration-150 hover:bg-slate-200 focus:ring-[1px] focus:ring-red-300 border-0 outline-0 p-2 w-[100%] max-w-[1000px] placeholder-[#040715]/40 rounded-sm mb-5"
              />
            </label>
          </div>
          <label className="group">
            <span className="text-slate-500 text-sm">Age</span>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              min={17}
              max={24}
              className=" bg-gray-100/50  ease-in duration-150 hover:bg-slate-200 focus:ring-[1px] focus:ring-red-300 border-0 outline-0 p-2 w-[100%] max-w-[1000px] placeholder-[#040715]/40 rounded-sm mb-5"
            />
          </label>
          <label className="group">
            <span className="text-slate-500 text-sm">Email address</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className=" bg-gray-100/50  ease-in duration-150 hover:bg-slate-200 focus:ring-[1px] focus:ring-red-300 border-0 outline-0 p-2 w-[100%] max-w-[1000px] placeholder-[#040715]/40 rounded-sm mb-5"
            />
          </label>
          <label className="group">
            <span className="text-slate-500 text-sm">
              Confirm program of choice
            </span>
            <input
              type="text"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              className=" bg-gray-100/50  ease-in duration-150 hover:bg-slate-200 focus:ring-[1px] focus:ring-red-300 border-0 outline-0 p-2 w-[100%] max-w-[1000px] placeholder-[#040715]/40 rounded-sm mb-5"
            />
          </label>
          <label className="group">
            <label className="group">
              <span className="text-slate-500 text-sm">
                Do you have a background in your program of choice?
              </span>
              <input
                type="text"
                value={doyou}
                onChange={(e) => setWhy(e.target.value)}
                className=" bg-gray-100/50  ease-in duration-150 hover:bg-slate-200 focus:ring-[1px] focus:ring-red-300 border-0 outline-0 p-2 w-[100%] max-w-[1000px] placeholder-[#040715]/40 rounded-sm mb-5"
              />
            </label>{" "}
          </label>
          <label className="group">
            <label className="group">
              <span className="text-slate-500 text-sm">
                If no, please state why you want to join this program.
              </span>
              <input
                type="text"
                value={ifNo}
                onChange={(e) => setWhy(e.target.value)}
                className=" bg-gray-100/50  ease-in duration-150 hover:bg-slate-200 focus:ring-[1px] focus:ring-red-300 border-0 outline-0 p-2 w-[100%] max-w-[1000px] placeholder-[#040715]/40 rounded-sm mb-5"
              />
            </label>
          </label>
          <label className="group">
            <span className="text-slate-500 text-sm">
              Why is this a good fit for you
            </span>
            <textarea
              type="text"
              value={why}
              onChange={(e) => setWhy(e.target.value)}
              className=" bg-gray-100/50  ease-in duration-150 hover:bg-slate-200 focus:ring-[1px] focus:ring-red-300 border-0 outline-0 p-2 w-[100%] max-w-[1000px] placeholder-[#040715]/40 rounded-sm mb-5"
              name=""
              id=""
            ></textarea>
          </label>
          <div className="flex flex-col gap-2">
            <span className="text-xs text-black/50">
              By submitting, you consent to the use of your information.{" "}
            </span>
            <Link to="#">
              <button className="w-full">
                <div className="w-full text-white text-sm justify-center p-3 h-fit rounded-lg hover:bg-[#e95656] ease-in-out duration-150 bg-[#e95656]/70 ">
                  Register
                </div>
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
