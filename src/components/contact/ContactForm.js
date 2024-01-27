import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import {
  FaArrowRight,
  FaEnvelopeOpen,
  FaHeadphones,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { contactConfig } from "../../ContactConfig";

const CustomAlert = ({ message, onClose }) => {
  return (
    <div className="custom-alert">
      <div className="alert-content">
        <p>{message}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

const ContactForm = () => {
  const [showAlert, setShowAlert] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        contactConfig.YOUR_SERVICE_ID,
        contactConfig.YOUR_TEMPLATE_ID,

        form.current,
        contactConfig.YOUR_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          e.target.reset();
          setShowAlert(true);
        },

        (error) => {
          console.log(error.text);
        }
      );
  };

  const closeAlert = () => {
    setShowAlert(false);
  };

  return (
    <>
      <div className="contact-area white-bg pt-110 pb-110">
        <div className="container">
          <div className="box-shadow-3 pt-60 pb-60 pl-80 pr-80">
            <div className="row">
              <div className="col-xl-6 col-lg-6">
                <div className="contact-form pr-70">
                  <div className="section-title mb-40">
                    <span>Need Our Service Or Have Queries</span>
                    <h2>Send Us A Message.</h2>
                  </div>
                  <form action="/" ref={form} onSubmit={sendEmail}>
                    <input
                      type="text"
                      placeholder="Your Name"
                      name="user_name"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      name="user_email"
                    />
                    <input type="tel" placeholder="Phone" name="user_phone" />
                    <textarea
                      placeholder="Write Message Here"
                      name="message"
                    ></textarea>
                    <button className="l-btn" type="submit">
                      Send Message <FaArrowRight />
                    </button>
                  </form>
                  {showAlert && (
                    <CustomAlert
                      message={"Message sent successfully!"}
                      onClose={closeAlert}
                    />
                  )}
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="contact-box theme-bg-1 pt-60 pb-35 pl-35 pr-35 mr-40">
                  <span>Landscaping Excellence!</span>
                  <h3>
                    Expanded Landscaping <br /> Services Fits All needs!
                  </h3>
                  <p>
                    On the other hand, we denounce with righteous indignation
                    and dislike men who are so beguiled and demoralized by the
                    charms{" "}
                  </p>
                  <ul className="mt-40">
                    <li>
                      <FaHeadphones />
                      <span>
                        Emergency Line: <Link to="/">(804) 277-7725</Link>
                      </span>
                    </li>
                    <li>
                      <FaEnvelopeOpen />
                      <span>
                        Email:{" "}
                        <Link to="/">andreysprolandscaping@gmail.com</Link>
                      </span>
                    </li>
                    <li>
                      <FaMapMarkerAlt />
                      <span>
                        Location: 642 Clearlake Road Richmond, VA 23236
                      </span>
                    </li>
                    {/* <li>
                      <FaClock />
                      <span>Mon - Fri: 8:00 am - 7:00 pm</span>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="social-btn-area pb-110">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-6">
              <a
                href="https://www.facebook.com/p/Andreys-Pro-landscaping-Tree-Services-LLC-61553947325482/?mibextid=gik2fB"
                className="l-btn"
              >
                Facebook
              </a>
            </div>
            {/* <div className="col-xl-3 col-lg-3 col-md-6">
              <Link to="/" className="l-btn">
                Twitter
              </Link>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6">
              <Link to="/" className="l-btn">
                Google Plus
              </Link>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6">
              <Link to="/" className="l-btn">
                Pinterest
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
