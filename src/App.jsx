import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/general/Header";
import Topbar from "./components/index/Topbar";
import Footer from "./components/general/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import SpecialInspections from "./components/Services/SpecialInspections";
import LaboratoryTesting from "./components/Services/LaboratoryTesting";
import About from "./pages/About";
import News from "./pages/News";
import FAQ from "./components/general/FAQ";
import ScheduleInspectionButton from "./components/general/ScheduleInspectionButton";
import RequestQuote from "./components/general/RequestQuote";
import WhatsAppRedirect from "./components/general/WhatsAppRedirect";
import Page404 from "./components/NotFound.js/Page404";
import ScrollToTop from "./components/general/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
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
        <Route path="/faq" element={<FAQ />} />
        <Route
          path="/scheduleinspection"
          element={<ScheduleInspectionButton />}
        />
        <Route path="/requestquote" element={<RequestQuote />} />
        <Route path="/whatsapp" element={<WhatsAppRedirect />} />
        <Route path="/notfound" element={<Page404 />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
