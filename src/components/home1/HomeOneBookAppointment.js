import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
 develop
import { contactConfig } from "../../ContactConfig";
=======
 main
import Quote_pic from "../../assets/images/quotepic.jpg";

const HomeOneBookAppointment = () => {
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
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <div className="book-appointment" style={{ marginTop: "250px" }}>
        <div
          className="book-appointment-img bg-property"
          style={{ backgroundImage: `url(${Quote_pic})` }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 offset-xl-6 col-lg-6 offset-lg-6 col-md-6 offset-md-6 col-sm-12">
              <div className="book-quote-form ml-65 pt-70 pb-70">
                <div className="section-title mb-70">
                  <span>Book an Appoinment</span>
                  <h2>
                    Get a Free Quote From <br /> Our Experts
                  </h2>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                  <div className="row">
                    <div className="col-xl-6">
                      <input type="text" placeholder="Name" name="user_name" />
                    </div>
                    <div className="col-xl-6">
                      <input
                        type="email"
                        placeholder="Email"
                        name="user_email"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-12">
                      <input
                        type="number"
                        placeholder="Phone"
                        name="user_phone"
                      />
                      <textarea
                        placeholder="Write Message Here"
                        name="message"
                      ></textarea>
                    </div>
                  </div>
                  <button className="l-btn quote-btn" type="submit">
                    Send
                    <FaArrowRight />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeOneBookAppointment;
