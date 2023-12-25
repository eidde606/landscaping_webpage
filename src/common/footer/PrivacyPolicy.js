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
            Welcome to Andrey's Landscaping and Tree Service LLC. We've been
            transforming landscapes and nurturing tree health in our community
            for years. Our passion for natural beauty and commitment to
            environmental sustainability drive everything we do.
          </p>
          <p>
            From day one, we've aimed to provide the most reliable,
            highest-quality landscaping and tree care services. At Andrey's
            Landscaping and Tree Service LLC, our dedication to excellence
            underpins every project.
          </p>
          {/* Continue breaking the content into smaller paragraphs */}
          <p>
            Each project is an opportunity for us to showcase our commitment to
            craftsmanship, attention to detail, and customer satisfaction. We
            understand the crucial role trees play in our environment.
          </p>
          {/* ... and so on */}
          <p>
            Thank you for considering us for your landscaping and tree care
            needs. We're eager to collaborate with you and turn your visions of
            a beautiful environment into reality.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default PrivacyPolicy;
