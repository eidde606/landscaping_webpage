import React from "react";
import FooterOne from "../common/footer/FooterOne";
import HeaderBottomOne from "../common/header/HeaderBottomOne";
import HeaderTop from "../common/header/HeaderTop";
import HeroStyleOne from "../components/hero/HeroStyleOne";
import HomeOneAbout from "../components/home1/HomeOneAbout";
import HomeOneBookAppointment from "../components/home1/HomeOneBookAppointment";
import HomeOneService from "../components/home1/HomeOneService";
import ServiceStyleOne from "../components/services/ServiceStyleOne";
import WhyChoseUsOne from "../components/why-choose-us/WhyChoseUsOne";
const HomeDefault = () => {
  return (
    <>
      <HeaderTop />
      <HeaderBottomOne />
      <HeroStyleOne />
      <ServiceStyleOne />
      <HomeOneAbout />
      <HomeOneService />
      <WhyChoseUsOne />
      <HomeOneBookAppointment />
      <FooterOne />
    </>
  );
};

export default HomeDefault;
