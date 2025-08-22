// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./homePage/Contact";
import Feedback from "./homePage/Feedback";
import FAQ from "./homePage/FAQ";
import HeroSection from "./homePage/HeroSection";
import Aboutus from "./homePage/Aboutus";
import Navbar from "./homePage/Navbar";
import Products from "./varieties/Products";

function App() {
  return (
    <Router>
      {/* Navbar should always be visible */}
      <Navbar />

      <Routes>
        {/* HeroSection */}
        <Route path="/" element={<HeroSection />} />

        {/* Pages */}
        <Route path="/about" element={<Aboutus />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </Router>
  );
}

export default App;
