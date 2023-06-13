import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Skills from "./pages/Skills/Skills";
import Landing from "./pages/Landing/Landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Formtest from "./pages/FormTest/Formtest";
import Course from "./pages/Course/Course";
import Formsubmit from "./pages/Formsubmit";
import About from "./pages/About/About";
import Leadership from "./pages/Leadership/Leadership";
import Facilitators from "./pages/Facilitators/Facilitators";
import Coordinators from "./pages/Coordinators/Coordinators";
import Apply from "./pages/Apply/Apply";
import FormPage from "./pages/FormPage/FormPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/skills" element={<Skills />} />
        <Route exact path="/skills/course" element={<Course />} />
        <Route exact path="/formconfirmation" element={<Formsubmit />} />
        <Route exact path="/aboutsap" element={<About />} />
        <Route exact path="/form" element={<Formtest />} />
        <Route exact path="/leadership" element={<Leadership />} />
        <Route exact path="/facilitators" element={<Facilitators />} />
        <Route exact path="/coordinators" element={<Coordinators />} />
        <Route exact path="/applynow" element={<Apply />} />
        <Route exact path="/formpage" element={<FormPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
