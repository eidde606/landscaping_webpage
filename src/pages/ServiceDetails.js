import React from "react";
import breadcrumbBg from "../assets/images/breadcrumb/1.jpg";
import HeaderBottomTwo from "../common/header/HeaderBottomTwo";
import HeaderTop from "../common/header/HeaderTop";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import ServiceDetailsContent from "../components/service-details/ServiceDetailsContent";
import ServiceFaq from "../components/service-details/ServiceFaq";
import ServiceHowItWork from "../components/service-details/ServiceHowItWork";
import ContactWidget from "../components/widgets/ContactWidget";
import QuoteWidget from "../components/widgets/QuoteWidget";
import ServiceWidget from "../components/widgets/ServiceWidget";

const ServiceDetails = () => {
  return (
    <>
      <HeaderTop />
      <HeaderBottomTwo />
      <Breadcrumb
        breadcrumbBg={breadcrumbBg}
        heading="Services Details"
        description="We are available for 24/7 for Garden & Landscaping Services"
        currentPage="Services Details"
      />
      <div className="service-details pt-110 pb-110">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4 pr-50">
              <ServiceWidget />
              <ContactWidget />
              <QuoteWidget />
            </div>
            <div className="col-xl-8 col-lg-8">
              <div className="service-details-wrapper">
                <ServiceDetailsContent />
                <ServiceHowItWork />
                <ServiceFaq />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetails;
