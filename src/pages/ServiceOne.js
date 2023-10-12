import React from "react";
import breadcrumbBg from "../assets/images/breadcrumb/1.jpg";
import HeaderBottomTwo from "../common/header/HeaderBottomTwo";
import HeaderTop from "../common/header/HeaderTop";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import CtaTwo from "../components/cta/CtaTwo";
import ServiceStyleOne from "../components/services/ServiceStyleOne";
import Subscribe from "../components/subscribe/Subscribe";

const ServiceOne = () => {
  return (
    <>
      <HeaderTop />
      <HeaderBottomTwo />
      <Breadcrumb
        breadcrumbBg={breadcrumbBg}
        heading="Services 1"
        description="We are available for 24/7 for Garden & Landscaping Services"
        currentPage="Services 1"
      />
      <ServiceStyleOne />
      <CtaTwo />
      <Subscribe />
    </>
  );
};

export default ServiceOne;
