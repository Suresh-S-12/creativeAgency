import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import HomeTeamSlider from "../../Slider/HomeTeamSlider";
import './HomeTeam.css'


function HomeTeam() {
  return (
    <div className="homeTeamPage">
      <Container>
        <Row className="homeTeamPageContainer">
          <Col lg='6' className="ms-auto d-flex flex-column align-items-end hoemTeamTop">
             <p className="p-design-2 ">Our team</p>
             <h2 className="text-end">Professional staffs ready to Help Your Business</h2>
          </Col>
          <HomeTeamSlider/>
        </Row>
       
      </Container>
    </div>
  );
}

export default HomeTeam;
