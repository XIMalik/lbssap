import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Skills from "./pages/Skills/Skills";
import Landing from "./pages/Landing/Landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Formtest from "./pages/FormTest/Formtest";
import Course from "./pages/Course/Course";
Course;

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/skills" element={<Skills />}>
          <Route exact path="/skills/course" element={<Course />} />
        </Route>
        <Route exact path="/form" element={<Formtest />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
