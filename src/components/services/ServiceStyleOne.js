import React from "react";
import { v4 as uuidv4 } from "uuid";
import Icon_flower from "../../assets/images/service/flower.png";
import Icon_growing from "../../assets/images/service/growing.png";
import Icon_harvest from "../../assets/images/service/harvest.png";
import Icon_landscape from "../../assets/images/service/landscape.png";
import Icon_rubbish from "../../assets/images/service/rubbish.png";
import Icon_tree from "../../assets/images/service/tree.png";

const ServiceOneData = [
  {
    id: uuidv4(),
    heading: "Landscape Design",
    description:
      "Transform your outdoor space into a personalized oasis with our expert landscape design services. We specialize in crafting unique and functional environments by blending natural elements, such as plants and terrain, with artistic vision. Our goal is to curate landscapes that harmonize beauty, functionality, and your individual style preferences.",
    img: Icon_landscape,
    serviceLink: "/",
  },
  {
    id: uuidv4(),
    heading: "Plant Growing",
    description:
      "Unlock the secrets to successful plant growth with our specialized services. We offer tailored guidance and solutions for cultivating thriving plant life, whether it's a lush garden, vibrant indoor plants, or a flourishing landscape. From soil analysis to personalized care routines, we're here to nurture your green spaces and help your plants thrive.",
    img: Icon_growing,
    serviceLink: "/",
  },
  {
    id: uuidv4(),
    heading: "Branch Cutting",
    description:
      "Precision meets expertise in our branch cutting services. We meticulously assess, trim, and shape branches, ensuring your trees stay healthy and your landscapes maintain their beauty. With our skilled team and cutting-edge techniques, we provide precise branch cutting solutions, promoting growth, safety, and the aesthetics of your outdoor spaces.",
    img: Icon_harvest,
    serviceLink: "/",
  },
  {
    id: uuidv4(),
    heading: "Flower Scaping",
    description:
      "Enhance your surroundings with our customized flower scaping services. Our meticulous team adeptly designs captivating floral arrangements and enchanting garden beds. Experience vivid displays that evoke joy and serenity, blending nature's colors into a harmonious masterpiece.",

    img: Icon_flower,
    serviceLink: "/",
  },
  {
    id: uuidv4(),
    heading: "Tree Planting",
    description:
      "Revitalize your landscape with our tree planting services. We meticulously select and plant trees, fostering growth and sustainability. Our expertise ensures proper placement and care, contributing to a greener environment.",
    img: Icon_tree,
    serviceLink: "/",
  },
  {
    id: uuidv4(),
    heading: "Rubbish Removal",
    description:
      "Unburden your space with our rubbish removal services. We efficiently clear and dispose of unwanted debris, ensuring cleanliness and tidiness. Let us handle the clutter while you enjoy a spotless environment.",
    img: Icon_rubbish,
    serviceLink: "/",
  },
];

const ServiceOneItem = ({ img, heading, description, serviceLink }) => {
  return (
    <>
      <div className="col-xl-3 col-lg-4 col-md-6">
        <div className="single-service">
          <div className="service-icon">
            <img src={img} alt="Service Icon" />
          </div>
          <h3>{heading}</h3>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

const ServiceStyleOne = () => {
  return (
    <>
      <div className="service-area theme-bg-4 pt-110 pb-110">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section-title text-center mb-70">
                <span>Our Services</span>
                <h2>
                  Why will you choose our <br /> services?
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            {ServiceOneData.map((data) => (
              <ServiceOneItem
                key={data.id}
                img={data.img}
                heading={data.heading}
                description={data.description}
                serviceLink={data.serviceLink}
              />
            ))}
            <div className="col-xl-6 col-lg-12 col-md-12">
              <div className="single-service-large">
                <h3>
                  We are professional <span>Landscape & Gardening service</span>
                </h3>
                <p>
                  Nam libero tempore, cum soluta nobis est eligendi optio cumque
                  nihil impedit quo minus id quod maxime placeat omnis voluptas
                  assumenda est, omnis dolor repellendus.{" "}
                </p>
                <a href="/contact" className="l-btn">
                  Appointment
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceStyleOne;
