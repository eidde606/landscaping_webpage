import React from "react";
import breadcrumbBg from "../assets/images/breadcrumb/1.jpg";
import HeaderBottomTwo from "../common/header/HeaderBottomTwo";
import HeaderTop from "../common/header/HeaderTop";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import ProjectContent from "../components/project-details/ProjectContent";
import ContactWidget from "../components/widgets/ContactWidget";
import QuoteWidget from "../components/widgets/QuoteWidget";
import ServiceWidget from "../components/widgets/ServiceWidget";

const ProjectDetails = () => {
  return (
    <>
      <HeaderTop />
      <HeaderBottomTwo />
      <Breadcrumb
        breadcrumbBg={breadcrumbBg}
        heading="Project Details"
        description="We are available for 24/7 for Garden & Landscaping Services"
        currentPage="Project Details"
      />
      <div className="project-details pt-110 pb-110">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4 pr-50 mb-60">
              <ServiceWidget />
              <ContactWidget />
              <QuoteWidget />
            </div>
            <div className="col-xl-8 col-lg-8">
              <ProjectContent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
