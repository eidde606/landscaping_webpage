import React from "react";
import { FaFacebookF, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import FooterBG from "../../assets/images/footer-1.png";

const FooterOne = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer>
        <div
          className="footer-top bg-property theme-bg-2 pt-110 pb-80"
          style={{ backgroundImage: `url(${FooterBG})` }}
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                <div className="footer-widget-1">
                  <div className="footer-title">
                    <h4>Contact Us</h4>
                  </div>
                  <div className="footer-text">
                    <p>
                      If you have any questions or need help, feel free to
                      contact with our team.
                    </p>
                  </div>
                  <div className="footer-info">
                    <a href="tel: 804-277-7725">
                      <FaPhoneAlt /> 804-277-7725
                    </a>
                  </div>
                  {/* <div className="footer-text">
                    <p>
                      House #253, 3rd Floor, Uposhohor 6202, Rajshahi,
                      Bangladesh
                    </p>
                  </div> */}
                  {/* <div className="footer-info">
                    <Link to="/">
                      <FaPhoneAlt /> Get Directions
                    </Link>
                  </div> */}
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-md-6 col-sm-12">
                <div className="footer-widget-2">
                  <div className="footer-title">
                    <h4>Quick Links</h4>
                  </div>
                  <div className="footer-menu">
                    <ul>
                      <li>
                        <Link to="/contact">Contact Us</Link>
                      </li>
                      <li>
                        <Link to="/services">Our Services</Link>
                      </li>

                      <li>
                        <Link to="/about">About Company</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                <div className="footer-widget-4">
                  {/* <div className="footer-title">
                    <h4>Newsletter</h4>
                  </div> */}
                  {/* <div className="footer-text">
                    <p>
                      Established since 2000. Mission Eland Landscaping Company
                      in US.
                    </p>
                  </div> */}
                  <div className="footer-social mt-10">
                    <h5>Folllow Us:</h5>
                    <ul>
                      <li>
                        <a href="https://www.facebook.com/profile.php?id=61553947325482&mibextid=gik2fB">
                          <FaFacebookF />
                        </a>
                      </li>
                      {/* <li>
                        <Link to="/">
                          <FaTwitter />
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <FaInstagram />
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <FaPinterestP />
                        </Link>
                      </li> */}
                    </ul>
                  </div>
                  {/* <div className="footer-newsletter mt-40">
                    <input type="text" placeholder="Email Address" />
                    <button>
                      <FaAngleDoubleRight />
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom theme-bg-1 pt-40 pb-30">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                <div className="copyright">
                  <p>
                    © {currentYear} {""}
                    Andrey's Pro Landscaping & Tree Service, LLC. All rights
                    reserved.
                  </p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 text-xl-end text-lg-end text-md-end text-center">
                <div className="footer-menu">
                  <ul>
                    <li>
                      <Link to="/andrey-policy">
                        About Andrey's Pro Landscaping & Tree Service
                      </Link>
                    </li>
                    {/* <li>
                      <Link to="/">Careers</Link>
                    </li> */}
                    <li>
                      <Link to="/privacy-policy">Privacy Policy</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterOne;
