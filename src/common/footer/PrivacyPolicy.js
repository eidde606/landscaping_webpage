import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const PrivacyPolicy = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col className="text-center">
          <h1>Privacy Policy</h1>
          <p>
            Thank you for visiting Andrey's Pro Landscaping & Tree Service, LLC
            ("us", "we", or "our") website. Your privacy is important to us, and
            we are committed to protecting your personal information.
          </p>
          <p>
            This Privacy Policy outlines how we collect, use, and safeguard your
            personal information when you use our website or engage with our
            services.
          </p>
          <h2>Information We Collect</h2>
          <p>We may collect various types of information, including:</p>
          <ul>
            <li>Your name, email address, and contact details.</li>
            <li>Information you provide through forms on our website.</li>
            <li>
              Usage data, such as your IP address, browser type, and pages
              visited.
            </li>
          </ul>
          <h2>How We Use Your Information</h2>
          <p>We use the collected information for the following purposes:</p>
          <ul>
            <li>To provide and maintain our services.</li>
            <li>
              To communicate with you, respond to your inquiries, and send
              updates.
            </li>
            <li>
              To improve our website and services based on your feedback and
              usage patterns.
            </li>
          </ul>
          <h2>Information Sharing</h2>
          <p>
            We do not sell, trade, or otherwise transfer your personal
            information to third parties without your consent, except as
            required by law or in connection with the sale, merger, or
            acquisition of our business.
          </p>
          <h2>Security</h2>
          <p>
            We implement security measures to protect your personal information.
            However, please be aware that no method of transmission over the
            internet or electronic storage is completely secure, and we cannot
            guarantee absolute security.
          </p>
          <h2>Updates to this Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page, and the updated policy will be
            effective immediately.
          </p>
          <h2>Contact Us</h2>
          <p>
            If you have any questions or concerns regarding this Privacy Policy,
            please contact us at [contact email/phone].
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default PrivacyPolicy;
