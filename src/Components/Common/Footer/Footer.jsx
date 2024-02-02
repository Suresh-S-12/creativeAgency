import React , { useEffect }from "react";
import "./Footer.css";
import Container from "react-bootstrap/esm/Container";
import "../../../Assets/Fonts/css/all.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CallIcon from "../../../Assets/Images/Footer/Big-call-icon.svg";
import ClockIcon from "../../../Assets/Images/Footer/big-clock.svg";
import LocationIcon from "../../../Assets/Images/Footer/big-location.svg";


function Footer() {

 
  return (
    <div className="footer">
     
  <Container>
  <Row>
    <Col >
      <p>
        Lorem Ipsum is simply is dumi omy is text Loremo Ipsum is simply
        is out no our o dummy text.
      </p>
    </Col>
    <Col xs="12" sm="auto">
      <h5>Get Free Link</h5>
      <ul className=".footer-Container1">
        <li data-splitting="chars" >Software Development</li>
        <li>Data Analytics</li>
        <li>IT Consulting</li>
        <li>Network Solution</li>
        <li>Security Features</li>
      </ul>
    </Col>
    <Col xs="12" sm="auto">
      <h5>Get Free Link</h5>
      <ul>
        <li>Software Development</li>
        <li>Data Analytics</li>
        <li>IT Consulting</li>
        <li>Network Solution</li>
        <li>Security Features</li>
      </ul>
    </Col>
    <Col xs="12" sm="auto">
      <h5>Get Free Link</h5>
      <ul>
        <li>Software Development</li>
        <li>Data Analytics</li>
        <li>IT Consulting</li>
        <li>Network Solution</li>
        <li>Security Features</li>
      </ul>
    </Col>
    <Col >
      <p>
        Lorem Ipsum is simply is dumi omy is text Loremo Ipsum is simply
        is out no our o dummy text.
      </p>
      <p className="email">info@example.com</p>
      <p className="location">6391 Elgin St. Celina, 10299</p>
    </Col>
  </Row>
  <Row className="footer-center">
    <Col className=" bigCall">
      <img src={CallIcon} alt="Description" />
      <div>
        <p>Requesting a call</p>
        <h6>(629) 555-0129</h6>
      </div>
    </Col>
    <Col className=" bigCall">
      <img src={ClockIcon} alt="Description" />
      <div>
        <p>Requesting a call</p>
        <h6>(629) 555-0129</h6>
      </div>
    </Col>
    <Col className=" bigCall">
      <img src={LocationIcon} alt="Description" />
      <div>
        <p>Requesting a call</p>
        <h6>(629) 555-0129</h6>
      </div>
    </Col>
  </Row>
  <Row className=" copyright ">
    <Col>
    <p>© CopyRights  2023 | All Rights Reserved</p>
    </Col>
    <Col className="copy-right d-flex" >
      <p>Terms & Conditions</p>
      <p>Privacy Policy</p>
      <p>Contact Us</p>
    </Col>
  </Row>
</Container>
    </div>
  );
}

export default Footer;
