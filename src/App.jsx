import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";
import './i18n.jsx';

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import News from "./pages/News";
import VideoMotivation from "./components/VideoMotivation";


function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <div className={darkMode ? "dark bg-gray-900 text-white min-h-screen flex flex-col" : "min-h-screen flex flex-col"}>
      <Helmet>
        <title>Motivatsiya</title>
      </Helmet>
      <Router>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/news" element={<News />} />
            <Route path="/videos" element={<VideoMotivation />} /> {/* 👈 yangi video sahifa */}
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
