import React from "react";
import breadcrumbBg from "../assets/images/breadcrumb/1.jpg";
import HeaderBottomTwo from "../common/header/HeaderBottomTwo";
import HeaderTop from "../common/header/HeaderTop";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import ContactForm from "../components/contact/ContactForm";
import ContactMap from "../components/contact/ContactMap";
import Subscribe from "../components/subscribe/Subscribe";

const Contact = () => {
  return (
    <>
      <HeaderTop />
      <HeaderBottomTwo />
      <Breadcrumb
        breadcrumbBg={breadcrumbBg}
        heading="Contact Us"
        description="We are available for 24/7 for Garden & Landscaping Services"
        currentPage="Contact Us"
      />
      <ContactForm />
      <ContactMap />
      <Subscribe />
    </>
  );
};

export default Contact;
