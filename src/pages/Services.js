import React from "react";
import breadcrumbBg from "../assets/images/breadcrumb/1.jpg";
import HeaderBottomTwo from "../common/header/HeaderBottomTwo";
import HeaderTop from "../common/header/HeaderTop";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import ServiceStyleOne from "../components/services/ServiceStyleOne";

const Services = () => {
  return (
    <>
      <HeaderTop />
      <HeaderBottomTwo />
      <Breadcrumb
        breadcrumbBg={breadcrumbBg}
        heading="Services "
        description="We are available for 24/7 for Garden & Landscaping Services"
        currentPage="Services "
      />
      <ServiceStyleOne />
    </>
  );
};

export default Services;
