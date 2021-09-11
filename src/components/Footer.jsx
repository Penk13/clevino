import React from "react";
import { Row } from "react-bootstrap";
import { FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <Row className="bg-dark text-light p-3 text-center d-flex" id="footer">
      <p className="me-auto">
        Follow us on :{" "}
        <a href="https://www.youtube.com/channel/UC05D3fPJEkngxpGJ8PfXHpg">
          <FaYoutube id="socmed" />
        </a>
        <a href="https://www.instagram.com/akumausukses.id/">
          <FaInstagram id="socmed" />
        </a>
        <a href="https://www.facebook.com/Clevino-107960791508843/">
          <FaFacebook id="socmed" />
        </a>
      </p>
      <p className="copyright">
        ©2021 Clevino. All rights reserved. •{" "}
        <a href="/#" className="text-light">
          Privacy & Terms
        </a>
      </p>
    </Row>
  );
};

export default Footer;
