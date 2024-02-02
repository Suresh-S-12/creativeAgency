import React from 'react';
import './HomeServices.css';
import { Col, Container, Row ,Card,CardBody, CardText, CardTitle } from "react-bootstrap";
import HomeServiceSlider from '../../Slider/HomeServiceSlider';




function HomeServices() {
  return (
    <div className='homeServicePage'>
        <Container >
            <Row>
                <Col lg='6'>
                    <p className="p-design">Our Services</p>
                    <h2>High - Impact Services For Your Business</h2>
                    <p>It is a long established fact that a reader will be distracted bmy text of the printing and typesetting industry.It is a long established fact that a reader will be distracted bmy text of the printing and typesetting industry.will be distracted bmy text of the printing and typesetting industry.</p>
                </Col>
                <Col lg='6'>
                   <HomeServiceSlider/>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default HomeServices