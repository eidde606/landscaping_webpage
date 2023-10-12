import React from "react";
import { Link } from "react-router-dom";
import LandPic from "../../assets/images/breadcrumb/landpic.jpg";

const Logo = () => {
  return (
    <div className="logo">
      <Link to="/">
        <img
          src={LandPic}
          alt="Logo"
          style={{ width: "100px", height: "auto" }}
        />
      </Link>
    </div>
  );
};

export default Logo;
