import React from "react";
import Form from "../../components/Form/Form";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import graphic from "/public/images/skillsetPattern.png";

const FormPage = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <Nav />
        <div className="h-[80px] w-screen overflow-hidden">
          <img src={graphic} alt="" className="w-full h-full object-cover" />
        </div>
        <Form />
        <Footer />
      </div>
    </>
  );
};

export default FormPage;
