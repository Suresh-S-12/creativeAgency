import React from "react";
import './HomeProcess.css'
import { Col, Container, Row } from "react-bootstrap";
import ProcessBulbIcon from '../../../Assets/Images/HomePage/Process/processBulbIcon.svg'
import processFlowerIcon from '../../../Assets/Images/HomePage/Process/processFlowerIcon.svg'
import processMenuIcon from '../../../Assets/Images/HomePage/Process/processMenuIcon.svg'
import processMessageIcon from '../../../Assets/Images/HomePage/Process/processMessageIcon.svg'
import processTickIcon from '../../../Assets/Images/HomePage/Process/processTickIcon.svg'
import homeProcessFrame from '../../../Assets/Images/HomePage/Process/homeProcessFrame.svg'
import processPentagonIcon from '../../../Assets/Images/HomePage/Process/processPentagonIcon.svg'
import processStarIcon  from '../../../Assets/Images/HomePage/Process/processStarIcon.svg';
import homeProcessDesginFrame from '../../../Assets/Images/HomePage/Process/homeProcessDesginFrame.svg'



function HomeProcess() {
  return (
    <div className="homeProcessPart">
      <img src={homeProcessDesginFrame} alt="" className="img-fluid homeProcessDesginFrame" />
      <Container>
        <Row>

          <Col lg='6' className="homeProcessLeft">
          
          <img src={homeProcessFrame} alt=""  className="img-fluid homeProcessFrame "/>
          
          </Col>
          <Col lg='6' md='12'>
            <p className="p-design">Our Process</p>
            <h2>Process That Moves Things To Forward</h2>
            <div className="row jusify-content-between ">
            <div className="leftProcessContainer col-6">
                <div className="processContainer">
                    <div className="d-flex justify-content-between">
                        <img src={ProcessBulbIcon} alt="" />
                        <img src={processFlowerIcon} alt="" />
                    </div>
                    <h4 className="mt-4 text-center"> Idea Planning</h4>
                    <p className=" text-center">Protocols apart from aengage models, pricing billing</p>
                </div>
                <div className="processContainer">
                    <div className="d-flex justify-content-between">
                        <img src={processMenuIcon} alt="" />
                        <img src={processStarIcon} alt="" />
                    </div>
                    <h4 className="mt-4 text-center"> Creater</h4>
                    <p className=" text-center">Protocols apart from aengage models, pricing billing</p>
                </div>
            </div>
            <div className="rightProcessContainer d-flex flex-column gap-5 col-6">
                <div className="processContainer">
                    <div className="d-flex justify-content-between">
                        <img src={processMessageIcon } alt="" />
                        <img src={processFlowerIcon} alt="" />
                    </div>
                    <h4 className="mt-4 text-center"> Research</h4>
                    <p className=" text-center">Protocols apart from aengage models, pricing billing</p>
                </div>
                <div className="processContainer">
                    <div className="d-flex justify-content-between">
                        <img src={processTickIcon} alt="" />
                        <img src={processPentagonIcon} alt="" />
                    </div>
                    <h4 className="mt-4 text-center"> Testing</h4>
                    <p className=" text-center">Protocols apart from aengage models, pricing billing</p>
                </div>
            </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomeProcess;
