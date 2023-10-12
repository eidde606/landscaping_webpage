import React from "react";
import breadcrumbBg from "../assets/images/breadcrumb/1.jpg";
import HeaderBottomTwo from "../common/header/HeaderBottomTwo";
import HeaderTop from "../common/header/HeaderTop";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import CtaTwo from "../components/cta/CtaTwo";
import PricingOne from "../components/pricing/PricingOne";
import Subscribe from "../components/subscribe/Subscribe";

const Pricing = () => {
  return (
    <>
      <HeaderTop />
      <HeaderBottomTwo />
      <Breadcrumb
        breadcrumbBg={breadcrumbBg}
        heading="Pricing Plan"
        description="We are available for 24/7 for Garden & Landscaping Services"
        currentPage="Pricing"
      />
      <PricingOne />
      <CtaTwo />
      <Subscribe />
    </>
  );
};

export default Pricing;
