import React from "react";
import breadcrumbBg from "../assets/images/breadcrumb/1.jpg";
import HeaderBottomTwo from "../common/header/HeaderBottomTwo";
import HeaderTop from "../common/header/HeaderTop";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import CtaTwo from "../components/cta/CtaTwo";
import ServiceStyleTwo from "../components/services/ServiceStyleTwo";
import Subscribe from "../components/subscribe/Subscribe";

const ServiceTwo = () => {
  return (
    <>
      <HeaderTop />
      <HeaderBottomTwo />
      <Breadcrumb
        breadcrumbBg={breadcrumbBg}
        heading="Services 2"
        description="We are available for 24/7 for Garden & Landscaping Services"
        currentPage="Services 2"
      />
      <ServiceStyleTwo />
      <CtaTwo />
      <Subscribe />
    </>
  );
};

export default ServiceTwo;
