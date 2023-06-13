import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./f.css";

export default function Form() {
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [cvl, setCVL] = useState("");
  const [confirm, setConfirm] = useState("");
  const [doyou, setDoYou] = useState("");
  const [ifYes, setIfYes] = useState("");

  const nav = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("https://api.apispreadsheets.com/data/E8npidSo176qt1W8/", {
      method: "POST",
      body: JSON.stringify({
        data: {
          "Last Name": lname,
          "First Name": fname,
          "Sample CVL": cvl,
          "Experience?": doyou,
          Achievements: ifYes,
          "Phone Number": phone,
          "Email address": email,
          "Confirm program": confirm,
        },
      }),
    }).then((res) => {
      if (res.status === 201) {
        nav("/formconfirmation");
        console.log("success", lname, fname, phone);
      } else {
        // ERROR
      }
    });
  };
  return (
    <div className="slider overflow-scroll flex flex-col gap-5">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 min-w-[38px] sm:w-[600px] md:w-[700px] justify-center bg-white rounded-md  p-6 md:p-12 text-sm"
      >
        <div className="flex flex-col gap-2 mb-5">
          <h1 className="text-xl text-black font-bold">
            Participant Information
          </h1>
          <span className="text-slate-500">
            Fill out the form below to register for your desired program
          </span>
        </div>
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
          <span className="text-slate-500 text-sm">Email address</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className=" bg-gray-100/50  ease-in duration-150 hover:bg-slate-200 focus:ring-[1px] focus:ring-red-300 border-0 outline-0 p-2 w-[100%] max-w-[1000px] placeholder-[#040715]/40 rounded-sm mb-5"
          />
        </label>
        <label className="group">
          <span className="text-slate-500 text-sm">Phone Number</span>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className=" bg-gray-100/50  ease-in duration-150 hover:bg-slate-200 focus:ring-[1px] focus:ring-red-300 border-0 outline-0 p-2 w-[100%] max-w-[1000px] placeholder-[#040715]/40 rounded-sm mb-5"
          />
        </label>
        <label className="group">
          <span className="text-slate-500 text-sm">Sample cover letter</span>
          <textarea
            type="number"
            value={cvl}
            onChange={(e) => setCVL(e.target.value)}
            className=" bg-gray-100/50  ease-in duration-150 hover:bg-slate-200 focus:ring-[1px] focus:ring-red-300 border-0 outline-0 p-2 w-[100%] max-w-[1000px] placeholder-[#040715]/40 rounded-sm mb-5"
          ></textarea>
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
              Do you have a background in this field?
            </span>
            <input
              type="text"
              value={doyou}
              onChange={(e) => setDoYou(e.target.value)}
              className=" bg-gray-100/50  ease-in duration-150 hover:bg-slate-200 focus:ring-[1px] focus:ring-red-300 border-0 outline-0 p-2 w-[100%] max-w-[1000px] placeholder-[#040715]/40 rounded-sm mb-5"
            />
          </label>{" "}
        </label>
        <label className="group">
          <label className="group">
            <span className="text-slate-500 text-sm">
              If yes, highlight some of your previous achievements or roles
            </span>
            <textarea
              type="text"
              value={ifYes}
              onChange={(e) => setIfYes(e.target.value)}
              className=" bg-gray-100/50  ease-in duration-150 hover:bg-slate-200 focus:ring-[1px] focus:ring-red-300 border-0 outline-0 p-2 w-[100%] max-w-[1000px] placeholder-[#040715]/40 rounded-sm mb-5"
            ></textarea>
          </label>
        </label>
        <div className="flex flex-col gap-2">
          <span className="text-xs text-black/50">
            By submitting, you consent to the recording of your data.
          </span>
          <Link to="#" onClick={handleSubmit}>
            <button className="w-full" type="submit">
              <div className="w-full text-white text-sm justify-center p-3 h-fit rounded-lg hover:bg-[#e95656] ease-in-out duration-150 bg-[#e95656]/70 ">
                Register
              </div>
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}
