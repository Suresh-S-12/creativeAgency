import React ,{useState} from "react";
import "./HomeAcheivement.css";
import { Container, Col, Row } from "react-bootstrap";

import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import homeAwardIcon from "../../../Assets/Images/HomePage/Acheivement/homeAwardIcon.svg";
import homeAcheivementClientIcon from '../../../Assets/Images/HomePage/Acheivement/homeAcheivementClientIcon.svg'

function HomeAcheivement() {

    const [counterOn, setCounterOn] = useState(false);
  return (
    <div className="homeAcheivementPart">
      <Container>
        <Row className="justify-content-between g-4">
          
          <ScrollTrigger className='row'
              onEnter={() => setCounterOn(true)}
              onExit={() => setCounterOn(false)}
            >
              <Col lg='3'>
              <div className="acheivementContainer">
              <div className="acheivementIconContainer">
                    <img src={homeAwardIcon} alt="" className="img-flid homeAwardIcon"  />
                </div>
                <h4 className="serviceCounter">
                  {counterOn && (
                    <CountUp start={0} end={200} duration={2} delay={0} />
                  )}
                  +
                </h4>
                <p>Team Members</p>
              </div>
              </Col>
              <Col lg='3'>
              <div className="acheivementContainer">
              <div className="acheivementIconContainer">
                    <img src={homeAcheivementClientIcon} alt="" className="img-flid homeAwardIcon"  />
                </div>
                <h4 className="serviceCounter">
                  {counterOn && (
                    <CountUp start={0} end={250} duration={2} delay={0} />
                  )}
                  +
                </h4>
                <p>Winning Award</p>
              </div>
              </Col>
              <Col lg='3'>
              <div className="acheivementContainer">
              <div className="acheivementIconContainer">
                    <img src={homeAwardIcon} alt="" className="img-flid homeAwardIcon"  />
                </div>

                <h4 className="serviceCounter">
                  {counterOn && (
                    <CountUp start={0} end={10} duration={2} delay={0} />
                  )}
                  K+
                </h4>
                <p>Completed Project</p>
              </div>
              </Col>
              <Col lg='3'>
              <div className="acheivementContainer">
                <div className="acheivementIconContainer">
                    <img src={homeAcheivementClientIcon} alt="" className="img-flid homeAwardIcon"  />
                </div>
              
                <h4 className="serviceCounter">
                  {counterOn && (
                    <CountUp start={0} end={900} duration={2} delay={0} />
                  )}
                  +
                </h4>
                <p>Client Review</p>
              </div>
              </Col>
        </ScrollTrigger>
        </Row>
      </Container>
    </div>
  );
}

export default HomeAcheivement;
