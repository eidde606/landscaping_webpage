import React from "react";
import { Link } from "react-router-dom";
import PhoneImgIcon from "../../assets/images/icon/phone.png";
import Logo from "../../components/logo/Logo";
import MobileMenu from "./MobileMenu";
import Nav from "./Nav";

const HeaderBottomTwo = () => {
  return (
    <div id="sticky-header" className="header-bottom">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-2 col-lg-2 col-md-6 col-6">
            <Logo />
          </div>
          <div className="col-xl-10 col-lg-10 col-md-6">
            <div className="header-call-btn f-right">
              <Link to="/">
                <img src={PhoneImgIcon} alt="Phone Icon" />
                804-217-2291
              </Link>
            </div>
            <Nav />
          </div>
          <div className="col-12">
            <div className="mobile-menu">
              <MobileMenu />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBottomTwo;
