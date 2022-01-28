import React from "react";
import "./Navbar.scss";
import { Nav, Navbar, Container } from "react-bootstrap";
import Logo from "../../assests/logo.png";

function Header() {
  return (
    <div>
      <Navbar sticky="top" className="navheader" expand="lg">
        <Container className="nav_bar">
          <Navbar.Brand href="#home" style={{ color: "white" }}>
            <img src={Logo} className="logo" alt="logo" />
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="responsive-navbar-nav navbarScroll"
            style={{ color: "#fecb6a", backgroundColor: "#fecb6a" }}
          />
          <Navbar.Collapse id="basic-navbar-nav ">
            <Nav className="ms-auto justify-content-end ">
              <Nav.Link href="#home" className="navele">
                Home
              </Nav.Link>

              <Nav.Link href="#link" className="navele">
                About us
              </Nav.Link>

              <Nav.Link href="#link" className="navele">
                Products
              </Nav.Link>

              <Nav.Link href="#link" className="navele">
                Contact Us
              </Nav.Link>
              <Nav.Link href="#link" className="navele">
                InfraStructure
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
