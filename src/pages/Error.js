import React from "react";
import breadcrumbBg from "../assets/images/breadcrumb/2.jpg";
import HeaderBottomTwo from "../common/header/HeaderBottomTwo";
import HeaderTop from "../common/header/HeaderTop";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import ErrorContent from "../components/error/ErrorContent";

const Error = () => {
  return (
    <>
      <HeaderTop />
      <HeaderBottomTwo />
      <Breadcrumb
        breadcrumbBg={breadcrumbBg}
        heading="404"
        description="Opps! You have some problems"
        currentPage="404"
      />
      <ErrorContent />
    </>
  );
};

export default Error;
