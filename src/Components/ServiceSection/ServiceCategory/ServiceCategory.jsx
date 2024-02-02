import React from 'react';
import './ServiceCategory.css'
import { Col, Container, Row } from 'react-bootstrap'; 
import Card from "react-bootstrap/Card";
import  ServiceCategory1 from '../../../Assets/Images/ServicePage/ServiceCategory1.svg';
import  ServiceCategory2 from '../../../Assets/Images/ServicePage/ServiceCategory2.svg';
import  ServiceCategory3 from '../../../Assets/Images/ServicePage/ServiceCategory3.svg';
import  ServiceCategory4 from '../../../Assets/Images/ServicePage/ServiceCategory4.svg';
import  ServiceCategory5 from '../../../Assets/Images/ServicePage/ServiceCategory5.svg';


 
function ServiceCategory() {

    const serviceCategory = [
        {
            image: ServiceCategory1,
            title:"Website Designing",
            content: "It is a long establishe fact that a reader will be distracted the readable hkljklkl content of a page layout"
        },
        {
            image: ServiceCategory2,
            title:"Website Designing",
            content: "It is a long establishe fact that a reader will be distracted the readable hkljklkl content of a page layout"
        },
        {
            image: ServiceCategory3,
            title:"Website Designing",
            content: "It is a long establishe fact that a reader will be distracted the readable hkljklkl content of a page layout"
        },
        {
            image: ServiceCategory4,
            title:"Website Designing",
            content: "It is a long establishe fact that a reader will be distracted the readable hkljklkl content of a page layout"
        },
        {
            image: ServiceCategory5,
            title:"Website Designing",
            content: "It is a long establishe fact that a reader will be distracted the readable hkljklkl content of a page layout"
        },
    ]
  return (
    <div className='serviceCategory'>
        <Container>
            <Row>
                <Col>
                    <a href="#home" className="category-btn">All Projects</a>
                </Col>
                <Col>
                    <a href="#home" className="category-btn">Marketing</a>
                </Col>
                <Col>
                    <a href="#home" className="category-btn">Designing</a>
                </Col>
                <Col>
                    <a href="#home" className="category-btn">Business</a>
                </Col>
                <Col>
                    <a href="#home" className="category-btn">Content Strategy</a>
                </Col>
                <Col>
                    <a href="#home" className="category-btn">Development</a>
                </Col>
            </Row>
            <Row>
            {serviceCategory.map((service, index) => (
                <div className="col-lg-4 g-3 service-card" key={index}>
                  <Card className="">
                    <Card.Img variant="top" src={service.image} />
                    
                    <Card.Body>
                      <Card.Title style={{marginTop:'1.87rem'}}>
                        <h4>{service.title}</h4>
                        <hr />
                      </Card.Title>
                      <Card.Text>
                        <p>{service.content}</p>{" "}
                        {/* Add the content from the blog object */}
                      </Card.Text>
                      
                      <a href={service.link} className="c-btn2" style={{marginTop:'1.25rem'}}>
                        Read More
                      </a>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </Row>
        </Container>
    </div>
  )
}

export default ServiceCategory