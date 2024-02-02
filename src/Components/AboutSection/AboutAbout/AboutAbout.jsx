import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import DesignBullets1 from  '../../../Assets/Images/AboutPage/DesignBullets.svg'
import DesignBullets2 from  '../../../Assets/Images/AboutPage/DesignBullets.svg'
import './AboutAbout.css';
import  AboutAboutImage from '../../../Assets/Images/AboutPage/About/AboutAboutImage.webp'
import  AboutABoutDesign from '../../../Assets/Images/AboutPage/About/AboutImageDesgin.svg';
import  AuthorSignature from '../../../Assets/Images/AboutPage/About/AuthorSignature.svg';
import AboutAuthor from '../../../Assets/Images/AboutPage/About/AboutAuthor.jpg'

function AboutAbout() {
  return (
    <div className='aboutAbout'> 
        <img src={DesignBullets1} alt="" className='DesingBullests1' />
        <Container>
            <Row>
                <Col className='AboutAboutLeft'>
                    <img src={AboutAboutImage} alt=""  className='AboutAboutImage img-fluid'/>
                    <img src={AboutABoutDesign} alt=""  className='AboutABoutDesign img-fluid'/>
                </Col>
                <Col>
                    <p className="p-design">About Us</p>
                    <h2>Driving your digital evolution.</h2>
                    <p>Driving your digital evolution.</p>
                    <ul>
                        <li>Winning Metric for Your Startup</li>
                        <li>Your Startup</li>
                        <li>Knew About Fonts</li>
                    </ul>
                    <hr />
                    <div className="d-flex gap-4">
                        <div className="aboutAuthorCircle">
                            <img src={AboutAuthor} alt="" className='aboutAuthorImage img-fluid' />
                        </div>
                        <div className="aboutAuthorDetail">
                            <h4>Esther Howard</h4>
                            <p>CTO & Founder</p>
                        </div>
                        <img src={AuthorSignature} alt="" className='img-fluid' />
                    </div>
                </Col>
            </Row>
        </Container>
        <img src={DesignBullets2} alt="" className='DesingBullests2'/>
    </div>
  )
}

export default AboutAbout