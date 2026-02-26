import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Routes, Route } from "react-router-dom";
import HomePage from './pages/home/Home';
import AboutUs from './pages/about-us/about-us';
import NotFound from './pages/not-found/not-found';
import MainLayout from './pages/layouts/MainLayout';
import OurTeam from './pages/our-team/our-team';
import ContactUs from './pages/contact-us/contact-us';
import Courses from "./pages/courses/courses";
import './App.scss';

function App() {
   useEffect(() => {
    AOS.refresh();
    AOS.init({
      duration: 800, 
      once: false,      
    });
  }, []);
  return (
    <>
      <Routes>
        {/* All pages that should show Header + Footer */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/contact" element={<ContactUs />} />
          {/* Add more routes here that need Header/Footer */}
        </Route>

        {/* 404 without Header/Footer */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;