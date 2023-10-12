import React from "react";
import breadcrumbBg from "../assets/images/breadcrumb/1.jpg";
import FooterOne from "../common/footer/FooterOne";
import HeaderBottomTwo from "../common/header/HeaderBottomTwo";
import HeaderTop from "../common/header/HeaderTop";
import AboutBlock from "../components/about/AboutBlock";
import AboutExperience from "../components/about/AboutExperience";
import AboutVideoBlock from "../components/about/AboutVideoBlock";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import CtaTwo from "../components/cta/CtaTwo";
import HowItWorkOne from "../components/how-it-work/HowItWorkOne";
import Subscribe from "../components/subscribe/Subscribe";

const About = () => {
  return (
    <>
      <HeaderTop />
      <HeaderBottomTwo />
      <Breadcrumb
        breadcrumbBg={breadcrumbBg}
        heading="Our Company"
        description="We are available for 24/7 for Garden & Landscaping Services"
        currentPage="About Us"
      />
      <AboutVideoBlock />
      <AboutExperience />
      <AboutBlock />
      <CtaTwo />
      <HowItWorkOne />
      <Subscribe />
      <FooterOne />
    </>
  );
};

export default About;
