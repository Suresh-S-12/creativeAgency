import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./HomeClinet.css";
import BusinessWomen from "../../../Assets/Images/HomePage/business-women.jpg";
import { mockData as slides } from "../../../mock";

import homeMediumClient1 from "../../../Assets/Images/HomePage/homeMediumClient-1.jpg";
import homeMediumClient2 from "../../../Assets/Images/HomePage/homeMediumClient-2.jpg";
import homeSmallClient1 from "../../../Assets/Images/HomePage/homeSmallClient-1.jpg";
import homeSmallClient2 from "../../../Assets/Images/HomePage/homeSmallClient-2.jpg";
import homeSmallClient3 from "../../../Assets/Images/HomePage/homeSmallClient-3.jpg";
import homeLiteClient1 from "../../../Assets/Images/HomePage/homeLiteClinet-1.jpg";
import homeLiteClient2 from "../../../Assets/Images/HomePage/homeLiteClinet-2.jpg";

import Slider from "../../Slider/Slider";
function HomeClient() {
  return (
    <div className="HomeClient">
      <Container>
        <p className="p-design">Client Testimonial</p>
        <h2>What Our Happy Client Says</h2>
        <Row className="HomeClient-part">
          <Col lg="12" xl="8">
            <Slider slides={slides} />
          </Col>
      

          <Col xl="4" className="HomeClinetPartRight">
            <div className="largeCircleContainer lg-circle-1">
              <img
                src={BusinessWomen}
                alt=""
                className="homeClientImage  img-fluid"
              />
            </div>
            ,
            <div className="mediumCircleContainer md-circle-1">
              <img
                src={homeMediumClient1}
                alt=""
                className="homeClientImage  img-fluid"
              />
            </div>
            <div className="mediumCircleContainer md-circle-2">
              <img
                src={homeMediumClient2}
                alt=""
                className="homeClientImage  img-fluid"
              />
            </div>
            <div className="smallCircleContainer sm-circle-1">
              <img
                src={homeSmallClient1}
                alt=""
                className="homeClientImage  img-fluid"
              />
            </div>
            <div className="smallCircleContainer sm-circle-2">
              <img
                src={homeSmallClient2}
                alt=""
                className="homeClientImage  img-fluid"
              />
            </div>
            <div className="smallCircleContainer sm-circle-3">
              <img
                src={homeSmallClient3}
                alt=""
                className="homeClientImage  img-fluid"
              />
            </div>
            <div className="liteCircelContainer lt-circle-1">
              <img
                src={homeLiteClient1}
                alt=""
                className="homeClientImage  img-fluid"
              />
            </div>
            <div className="liteCircelContainer lt-circle-2">
              <img
                src={homeLiteClient2}
                alt=""
                className="homeClientImage  img-fluid"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomeClient;
