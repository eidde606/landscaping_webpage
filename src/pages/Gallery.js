import React from "react";
import breadcrumbBg from "../assets/images/breadcrumb/1.jpg";
import HeaderBottomTwo from "../common/header/HeaderBottomTwo";
import HeaderTop from "../common/header/HeaderTop";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import CtaTwo from "../components/cta/CtaTwo";
import ProjectStyleFour from "../components/project/ProjectStyleFour";
import Subscribe from "../components/subscribe/Subscribe";

const Gallery = () => {
  return (
    <>
      <HeaderTop />
      <HeaderBottomTwo />
      <Breadcrumb
        breadcrumbBg={breadcrumbBg}
        heading="Classic Gallery"
        description="We are available for 24/7 for Garden & Landscaping Services"
        currentPage="Classic Gallery"
      />
      <ProjectStyleFour />
      <CtaTwo />
      <Subscribe />
    </>
  );
};

export default Gallery;
