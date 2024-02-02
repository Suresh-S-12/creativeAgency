import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";
import "./Header.css";
import ROUTE from "../../../Router/constant.route";

function Header() {
  return (
    <Container className="header">
      <Navbar
        expand="lg"
        className="bg-transparent"
        style={{ paddingTop: "1.88rem" }}
      >
        <Container>
          <Navbar.Brand href="#">Matrix</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto ms-auto my-2 my-lg-0 "
              style={{ maxHeight: "autp", gap: "1.88rem" }}
            >
              <LinkContainer to={ROUTE.HOME}>
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/service">
                <Nav.Link>Service</Nav.Link>
              </LinkContainer>
              <NavDropdown title="Pages" id="navbarScrollingDropdown">
                <LinkContainer to="/team">
                  <NavDropdown.Item>Team</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/blog">
                  <NavDropdown.Item>Blogs</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/faq">
                  <NavDropdown.Item>FAQ</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/portfolio">
                  <NavDropdown.Item>Portfolio</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
              <LinkContainer to="/about">
                <Nav.Link>About</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contact">
                <Nav.Link>Contact</Nav.Link>
              </LinkContainer>
            </Nav>
            <Form className="d-flex">
              <a href="/" className="c-btn">
                Get Started
              </a>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
}

export default Header;
