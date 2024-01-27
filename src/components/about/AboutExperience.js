import React from "react";
import { v4 as uuidv4 } from "uuid";
import LandPic from "../../assets/images/breadcrumb/landpic.jpg";

const AboutExperienceData = [
  {
    id: uuidv4(),
    heading: "Mission",
    description:
      "Our mission is to enhance outdoor spaces with exceptional landscaping services, creating a harmonious blend of nature and design. We strive to exceed expectations, delivering quality and excellence in every project.",
  },

  {
    id: uuidv4(),
    heading: "Vision",
    description:
      "Our vision is to be a leading force in the landscaping industry, setting new standards for creativity, sustainability, and customer satisfaction. We aim to transform ordinary spaces into extraordinary experiences.",
  },

  {
    id: uuidv4(),
    heading: "Goal",
    description:
      "Our goal is to consistently innovate and elevate our services, ensuring the beauty and functionality of every landscape we touch. We aspire to cultivate lasting relationships with our clients through reliability and craftsmanship.",
  },
];

const AboutExperienceItem = ({ heading, description, img }) => {
  return (
    <>
      <div className="single-experience">
        <h4>{heading}</h4>
        <p>{description}</p>
      </div>
    </>
  );
};

const AboutExperience = () => {
  return (
    <>
      <div className="experience-area pt-110 pb-110">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section-title text-center mb-70">
                {/* <span>We Have 20 Years of Experience</span> */}
                <h2>
                  We Give Awesome Landscape <br /> Gardening Services
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-4 col-lg-6 col-md-6 offset-xl-2 offset-lg-2 offset-md-2">
              {AboutExperienceData.map((data) => (
                <AboutExperienceItem
                  key={data.id}
                  heading={data.heading}
                  description={data.description}
                />
              ))}
            </div>
            <div className="col-xl-6 col-lg-6 col-lg-6 pl-85 pr-0">
              <div className="experience-img">
                <img src={LandPic} alt="" />
                {/* <div className="experience-small-block">
                  <h5>We are Since 2000 ! Over 200 Awards </h5>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutExperience;
