import React from "react";
import { FaLevelUpAlt } from "react-icons/fa";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";

//Pages
import ScrollToTopRoute from "./components/scroll-to-top-route/ScrollToTopRoute";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Faq from "./pages/Faq";
import Gallery from "./pages/Gallery";
import HomeDefault from "./pages/HomeDefault";
import Pricing from "./pages/Pricing";
import ProjectDetails from "./pages/ProjectDetails";
import ProjectOne from "./pages/ProjectOne";
import ProjectTwo from "./pages/ProjectTwo";
import ServiceDetails from "./pages/ServiceDetails";
import ServiceOne from "./pages/ServiceOne";
import ServiceTwo from "./pages/ServiceTwo";

//CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/yet-another-react-lightbox/dist/styles.css";
import "./assets/css/default.css";
import "./assets/css/main.css";
import "./assets/css/responsive.css";
import "./assets/vendor/modal-video/modal-video.min.css";
import "./assets/vendor/slick/slick.css";

function App() {
  return (
    <Router>
      <ScrollToTopRoute />
      <Routes>
        <Route path="/" exact element={<HomeDefault />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/service-one" exact element={<ServiceOne />} />
        <Route path="/service-two" exact element={<ServiceTwo />} />
        <Route path="/service-details" exact element={<ServiceDetails />} />
        <Route path="/project-one" exact element={<ProjectOne />} />
        <Route path="/project-two" exact element={<ProjectTwo />} />
        <Route path="/project-details" exact element={<ProjectDetails />} />
        <Route path="/gallery" exact element={<Gallery />} />
        <Route path="/pricing" exact element={<Pricing />} />
        <Route path="/faq" exact element={<Faq />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <ScrollToTop
        className="scrollUp"
        smooth
        top="1500"
        component={<FaLevelUpAlt />}
      />
    </Router>
  );
}

export default App;
