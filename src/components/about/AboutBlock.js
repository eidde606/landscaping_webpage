import React from "react";
import AndreyFace from "../../assets/images/andre.jpg";
import Team2 from "../../assets/images/team2.jpg";
import Team from "../../assets/images/teampic.jpg";

const AboutBlock = () => {
  return (
    <>
      <div className="about-area gray-bg-2 pt-110 pb-110">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-xl-6 col-lg-6 col-md-6 pl-50 pr-50">
              <div className="about-img-style-2">
                <img
                  src={Team2}
                  alt=""
                  style={{ width: "500px", height: "600px" }}
                />
                <div className="about-small-img">
                  <img
                    src={Team}
                    alt=""
                    style={{ width: "309px", height: "309px" }}
                  />
                </div>
                <div className="about-experience">
                  <h2>20+</h2>
                  <span>
                    Years Of <br /> Experiences
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="about-text-wrapper">
                <div className="section-title mr-100 mb-40">
                  <span> About Andrey's Pro Landscaping & Tree Service</span>
                  <h2 className="mb-30">
                    Cultivating Natural Beauty: Over 20 Years of Mastery in
                    Landscaping and Tree Services
                  </h2>
                  <p>
                    Celebrating more than two decades of excellence, our
                    landscaping and tree services have been a beacon of quality
                    and innovation. We bring a wealth of experience to every
                    project, ensuring your outdoor spaces thrive with lush
                    greenery and well-maintained trees. Our seasoned
                    professionals are dedicated to transforming landscapes into
                    captivating and sustainable environments. From intricate
                    tree care to imaginative landscape designs, we take pride in
                    our commitment to enhancing the natural beauty of your
                    surroundings. Partner with us to experience the difference
                    that over 20 years of expertise can make for your property.
                  </p>
                </div>
                <div className="row">
                  {/* <div className="col-xl-5 col-lg-12">
                    <Link to="/" className="l-btn">
                      Read More
                    </Link>
                  </div> */}
                  <div className="col-xl-7 col-lg-12">
                    <div className="about-author-avatar-wrapper d-flex align-items-center">
                      <img src={AndreyFace} alt="" />
                      <div className="about-author-avatar-content">
                        <h5>Andrey</h5>
                        <span>Founder Landscape</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutBlock;
