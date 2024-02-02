import React from "react";
import "./ContactDetail.css";
import { Col, Container, Row } from "react-bootstrap";
import contactImg1 from "../../../Assets/Images/ContactPage/contactImg1.svg";
import contactImg2 from "../../../Assets/Images/ContactPage/contactImg2.svg";
import contactImg3 from "../../../Assets/Images/ContactPage/contactImg3.svg";
import contactPattern from "../../../Assets/Images/ContactPage/contactPattern.svg";
import callIcon from "../../../Assets/Images/ContactPage/callIcon.svg";
import locationIcon from '../../../Assets/Images/ContactPage/locationIcon.svg'

function ContactDetail() {
  return (
    <div className="contactDetail">
      <Container>
        <Row>
          <Col
            lg="6"
            className="d-lg-flex  justify-content-between gap-3 contactDetailLeft"
          >
            <img
              src={contactPattern}
              alt=""
              className="img-fluid contactPattern"
            />
            <div className="contactImgContainer1 col-6">
              <img src={contactImg1} alt="" />
            </div>
            <div className="col-6">
              <div className="contactImgContainer2 mb-4">
                <img src={contactImg2} alt="" />
              </div>
              <div className="contactImgContainer2">
                <img src={contactImg3} alt="" />
              </div>
            </div>
          </Col>
          <Col lg="6" className="contactDetailRight">
            <p className="p-design">Our Contact</p>
            <h2>Let’s talk</h2>
            <p>
              We collaborate with thousands of creators, Esxcsvf brgtg erf34g
              tyytyu hhiuhiuhi entrepreneurs and complete legends.
            </p>
            <hr />
           <div className="d-lg-flex flex-column gap-4">
           <div className="contactDetailEmail d-flex align-items-center">
              <i class="fa-solid fa-envelope icon-bg"></i>
              <div>
                <h6>Our Email</h6>
                <p>hello@example.com</p>
              </div>
            </div>
            <div className="contactDetailPhone d-flex align-items-center">
              <div className="icon-container">
              <img src={callIcon} alt="" />
              </div>
              <div>
                <h6>Call us</h6>
                <p>+123 456 7892</p>
              </div>
            </div>
            <div className="contactDetailLocation d-flex align-items-center">
              <img src={locationIcon} alt="" className="img-fluid icon-bg"/>
              <div>
                <h6>Find us</h6>
                <p>Open Google Maps</p>
              </div>
            </div>
           </div>
           <hr />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContactDetail;
