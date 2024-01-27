import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import ModalVideo from "react-modal-video";
import LandPic from "../../assets/images/breadcrumb/landpic.jpg";
import Yard from "../../assets/images/yard.jpg";
const HeroStyleOne = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="sV6-FYjYw5c"
        onClose={() => setOpen(false)}
      />
      <div
        className="hero-area height-800 bg-property d-flex align-items-center"
        data-overlay="black"
        data-opacity="6"
        style={{ backgroundImage: `url(${Yard})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <div className="hero-wrapper">
                <h1>Welcome to Our Perfect Solution Landscape.</h1>
                <p>
                  We are certified company. We provide best Landscaping services
                  for you.
                </p>
                {/* <Link to="/" className="l-btn">Our Solution</Link> */}
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <div className="hero-popup-content">
                <img src={LandPic} alt="" />
                <div className="hero-popup-video">
                  <button
                    className="popup-video pulse-effect"
                    onClick={() => setOpen(true)}
                  >
                    <FaPlay />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroStyleOne;
