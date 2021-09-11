import React from "react";
import { Container, Navbar, Image } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" className="navigation fixed-top">
      <Container>
        <Navbar.Brand id="brand-name">
          <Image
            id="logo"
            // src={window.location.origin + "/img/logo.jpeg"}
            // src="./img/logo.jpeg"
            src="https://res.cloudinary.com/dvpw0zdml/image/upload/v1631239672/clevino/landing%20page/logo_lznzmt.jpg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Clevino
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavBar;
