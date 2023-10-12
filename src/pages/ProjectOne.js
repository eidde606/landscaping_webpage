import React from "react";
import breadcrumbBg from "../assets/images/breadcrumb/1.jpg";
import HeaderBottomTwo from "../common/header/HeaderBottomTwo";
import HeaderTop from "../common/header/HeaderTop";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import CtaTwo from "../components/cta/CtaTwo";
import ProjectStyleFive from "../components/project/ProjectStyleFive";
import Subscribe from "../components/subscribe/Subscribe";

const ProjectOne = () => {
  return (
    <>
      <HeaderTop />
      <HeaderBottomTwo />
      <Breadcrumb
        breadcrumbBg={breadcrumbBg}
        heading="Project 1"
        description="We are available for 24/7 for Garden & Landscaping Services"
        currentPage="Project 1"
      />
      <ProjectStyleFive />
      <CtaTwo />
      <Subscribe />
    </>
  );
};

export default ProjectOne;
