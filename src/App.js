import React, { useState, useEffect } from "react";
import {
  Route,
  Routes,
  Navigate,
  useLocation
} from "react-router-dom";
import Particles from './components/Utils/Particle'
import Preloader from "../src/components/Utils/pre";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Footer from "./components/Fotter/Fotter";
import ResumeNew from "./pages/Resume/Resume";
import Projects from "./pages/Projects/Projects";
import FreelanceProjects from "./pages/Freelance/FreelanceProjects";
import ScrollToTop from "./components/Utils/ScrollTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  const location = useLocation();
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
      <Particles />
        <Navbar />
        <ScrollToTop />
        <Routes key={location.pathname} location={location} >
          <Route path="/" element={<Home />} />
          <Route path='/project' element={< Projects />} />
          <Route path='/about' element={<About />} />
          <Route path='/resume' element={<ResumeNew />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path='freelance' element={<FreelanceProjects />} />
        </Routes>
        <Footer />
      </div>
    </section>
  );
};
export default App;