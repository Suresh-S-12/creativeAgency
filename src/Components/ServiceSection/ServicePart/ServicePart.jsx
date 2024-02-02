import React, { useState } from "react";
import "./ServicePart.css";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

import { Col, Container, Row } from "react-bootstrap";
import serviceImg1 from '../../../Assets/Images/ServicePage/servcieImg1.jpg';
import serviceImg2 from '../../../Assets/Images/ServicePage/serviceImg2.jpg';
import serviceImgBg from '../../../Assets/Images/ServicePage/serviceImgBg.svg'

function ServicePart() {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <div className="ServicePart">
      <Container>
        <Row >
          <Col lg="6" className="ServicePartLeft">
          <img src={serviceImgBg} alt="" className="serviceImgBg img-fluid" />
            <div className="serviceImgContainer">
                
                <img src={serviceImg1} alt="" className="serviceImg1 img-fluid" />
            </div>
            <div className="serviceImgContainer2">
            <img src={serviceImg2} alt="" className="serviceImg2 img-fluid" />
            <i className="fa-solid fa-play play-btn" style={{ color: '#f2e401' }}></i>
            </div>
          </Col>
          <Col lg="6">
            <p className="p-design">Our Services</p>
            <h2>High - Impact Services for Your Business</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit- et ut
              massa libero mass egestas malesuada viverra gravida libero cursus
              nulla leo pulvinar. Lorem ipsum dolor sit amet, consectetur
              adipiscing cursus nulla leo pulvinar.
            </p>
            <ScrollTrigger className='d-flex gap-5'
              onEnter={() => setCounterOn(true)}
              onExit={() => setCounterOn(false)}
            >
              <div>
                <p className="serviceCounter">
                  {counterOn && (
                    <CountUp start={0} end={80} duration={2} delay={0} />
                  )}
                  +
                </p>
                <p>Satisfied clients</p>
              </div>
              <div>
                <p className="serviceCounter">
                  {counterOn && (
                    <CountUp start={0} end={200} duration={2} delay={0} />
                  )}
                  +
                </p>
                <p>Satisfied clients</p>
              </div>
            </ScrollTrigger>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ServicePart;
