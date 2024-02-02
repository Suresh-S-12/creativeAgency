import React, { useState } from "react";
import "./HomeAbout.css";
import { Col, Container, Row } from "react-bootstrap";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import homeAboutImg1 from "../../../Assets/Images/HomePage/homeAboutImage1.svg";
import homeAboutImg2 from "../../../Assets/Images/HomePage/homeAboutImage1.svg";
import homeAboutImg3 from "../../../Assets/Images/HomePage/homeAboutImage1.svg";
import teamIcon from "../../../Assets/Images/HomePage/team-icon.svg";
import awardIcon from "../../../Assets/Images/HomePage/award-icon.svg";

function HomeAbout() {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <div className="homePageAbout">
      <Container>
        <Row>
          <Col lg='6' className="homeAboutLeft">
            <img src={homeAboutImg1} alt="" className="homeAboutimg homeAboutimg1 img-fluid"/>
            <img src={homeAboutImg2} alt="" className="homeAboutimg homeAboutimg2 img-fluid" />
            <img src={homeAboutImg3} alt="" className="homeAboutimg homeAboutimg3 img-fluid" />
          </Col>
          <Col className="homePageAboutRight">
            <p className="p-design">About Us</p>
            <h2>Transforming your business with technology.</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit- et ut
              massa libero mass egestas malesuada viverra gravida libero cursus
              nulla leo pulvinar. Lorem ipsum dolor sit amet, consectetur
              adipiscing cursus nulla leo pulvinar.
            </p>
            <ul className="homeAboutPoints">
              <li>Mistakes To Avoid</li>
              <li>Your Startup</li>
              <li>Knew About Fonts</li>
              <li>Winning Metric for Your Startup</li>
            </ul>
            
            <ScrollTrigger className='homeAboutIconPart'
              onEnter={() => setCounterOn(true)}
              onExit={() => setCounterOn(false)}
            >
              <div className="homeAboutIcons ">
              <img src={teamIcon} alt="" className="icon-bg" />
               <div>
               <h5>
                  {counterOn && (
                    <CountUp start={0} end={80} duration={2} delay={0} />
                  )}
                  +
                </h5>
                <p>Team Members</p>
               </div>
              </div>
              <div className="homeAboutIcons ">
              <img src={awardIcon} alt="" className="icon-bg" />
               <div>
               <h5>
                  {counterOn && (
                    <CountUp start={0} end={80} duration={2} delay={0} />
                  )}
                  +
                </h5>
                <p>Winning Awards</p>
               </div>
              </div>
            </ScrollTrigger>
            <a
              href="../../../Pages/HomePage.jsx"
              className="c-btn homeAboutBtn"
            >
              Read More
            </a>
          </Col>
        </Row>
      </Container>

      
    </div>
  );
}

export default HomeAbout;
