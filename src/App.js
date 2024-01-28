import React from "react";
import { FaLevelUpAlt } from "react-icons/fa";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";

//Pages
import ScrollToTopRoute from "./components/scroll-to-top-route/ScrollToTopRoute";
import About from "./pages/About";
import Contact from "./pages/Contact";
// import Error from "./pages/Error";
import PrivacyPolicy from "./common/footer/PrivacyPolicy";
// import Gallery from "./pages/Gallery";
import HomeDefault from "./pages/HomeDefault";
import Services from "./pages/Services";

//CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/yet-another-react-lightbox/dist/styles.css";
import "./assets/css/default.css";
import "./assets/css/main.css";
import "./assets/css/responsive.css";
import "./assets/vendor/modal-video/modal-video.min.css";
import "./assets/vendor/slick/slick.css";
import ErrorBoundary from "./components/error/ErrorBoundary";
import AndreyPolicy from "./pages/AndreyPolicy";

function App() {
  return (
    <Router>
      <ScrollToTopRoute />
      <ErrorBoundary>
        <Routes>
          <Route path="/" exact element={<HomeDefault />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/services" exact element={<Services />} />
          {/* <Route path="/gallery" exact element={<Gallery />} /> */}
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/privacy-policy" exact element={<PrivacyPolicy />} />
          <Route path="/andrey-policy" exact element={<AndreyPolicy />} />
          {/* <Route path="*" element={<Error />} /> */}
        </Routes>
        <ScrollToTop
          className="scrollUp"
          smooth
          top="1500"
          component={<FaLevelUpAlt />}
        />
      </ErrorBoundary>
    </Router>
  );
}

export default App;
