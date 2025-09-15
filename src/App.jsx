import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/general/Header";
import Topbar from "./components/index/Topbar";
import Footer from "./components/general/Footer";
import Home from "./pages/Home";
// import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import SpecialInspections from "./components/Services/SpecialInspections";
import LaboratoryTesting from "./components/Services/LaboratoryTesting";
import About from "./pages/About";
import News from "./pages/News";

function App() {
  return (
    <Router>
      <Topbar />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/specialInspections" element={<SpecialInspections />} />
        <Route path="/LaboratoryTesting" element={<LaboratoryTesting />} />
        <Route path="/news" element={<News />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
