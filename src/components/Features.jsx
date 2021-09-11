import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaBook, FaHandHoldingUsd, FaClock, FaUsers } from "react-icons/fa";

const Features = () => {
  return (
    <Container className="p-5 text-center" id="features">
      <Row>
        <Col md="12" lg className="mb-5">
          <FaBook className="feature-icon" />
          <div>
            <h3>Learn</h3>
            <p>Get a lot of knowledge from e-books, content and community.</p>
          </div>
        </Col>
        <Col md="12" lg className="mb-5">
          <FaHandHoldingUsd className="feature-icon" />
          <div>
            <h3>Passive Income</h3>
            <p>
              Get passive income so you don't have to work for the rest of your
              life.
            </p>
          </div>
        </Col>
        <Col md="12" lg className="mb-5">
          <FaClock className="feature-icon" />
          <div>
            <h3>Freedom & Flexibility</h3>
            <p>
              Get financial freedom and flexibility at work. Work anywhere and
              anytime!
            </p>
          </div>
        </Col>
        <Col md="12" lg className="mb-5">
          <FaUsers className="feature-icon" />
          <div>
            <h3>Community</h3>
            <p>Join our community to grow together and help each other.</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Features;
