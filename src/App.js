import React, { useState, useEffect } from "react";
import {
  Route,
  Routes,
  Navigate,
  useLocation
} from "react-router-dom";



import { AnimatePresence } from "framer-motion";
import Preloader from "../src/components/Utils/pre";
import Navbar from "./components/Utils/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Footer from "./components/Utils/Fotter";
import ResumeNew from "./components/Resume/Resume";
import Projects from "./components/Projects/Projects";
import FreelanceProjects from "./components/Freelance/FreelanceProjects";

import ScrollToTop from "./components/Utils/ScrollTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  const location = useLocation()
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
        <Navbar />
        <ScrollToTop />
        <AnimatePresence exitBeforeEnter>
        <Routes key={location.pathname} location={location} >
          <Route path="/" element={<Home />} />
          <Route path='/project' element={< Projects />} />
          <Route path='/about' element={<About />} />
          <Route path='/resume' element={<ResumeNew />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path='freelance' element={<FreelanceProjects/>}/>
          
        </Routes>
        
        </AnimatePresence>
        <Footer />
      </div>
      </section>
  );
}

export default App;