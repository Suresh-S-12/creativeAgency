import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AboutMissionContainer1 from "../../../Assets/Images/AboutPage/About/AboutMissionContainer1.svg";
import AboutMissionContainer2 from "../../../Assets/Images/AboutPage/About/AboutMissionContainer2.svg";
import "./AboutMission.css";

function AboutMission() {
  return (
    <div className="aboutMissionPage">
      <Container>
        <Row>
          <Col>
            <p className="p-design">Our Mission</p>
            <h2>Boost your with your business.</h2>
            <p>
              He moonlights difficult engrossed it, sportsmen. Interested has
              all Devonshire difficulty gay assistance joy.
            </p>
            <div className="aboutMissionLists d-flex justify-content-between">
              <ul>
                <li>She new course gets living.</li>
                <li>She new course gets living.</li>
                <li>She new course gets living.</li>
              </ul>
              <ul>
                <li>She new course gets living.</li>
                <li>She new course gets living.</li>
                <li>She new course gets living.</li>
              </ul>
            </div>
          </Col>
          <Col className="aboutMissionRight ">
            <div className="d-flex flex-column">
              <div className="aboutMissionContainer1  mb-3">
                <img
                  src={AboutMissionContainer1}
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className="aboutMissionContainerTop">
              <h3>10K+</h3>
              <p className="col-6">Great Conversation Per Month</p>
              </div>
              
            </div>
            <div className="d-flex gap-4 aboutMissionRight2 ms-auto">
                <div className="d-flex flex-column "><h3>95+</h3>
                <p>Project Complete </p></div>
                <div className="aboutMissionContainer2  mb-3">
                <img
                  src={AboutMissionContainer2}
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutMission;
