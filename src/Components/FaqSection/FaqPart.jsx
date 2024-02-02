import React from "react";
import './Faq.css'
import { Accordion, Col, Container, Row } from "react-bootstrap";

function FaqPart() {
    
  return (
    <div className="faqPart">
      <Container>
        <Row>
          <Col lg='12'>
            <p className="p-design">Our FAQ</p>
            
          </Col>
          <Col lg='6' ><h2>Find the Answers on Frequently
Asked Questions</h2></Col>
          <div className="row faqSection">
          <div className="col-lg-6">
            <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="1">
              <Accordion.Header> <h5>Make the FAQs eacy to find</h5> </Accordion.Header>
              <Accordion.Body>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, et? Sapiente repellendus dignissimos laboriosam ratione.</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header> <h5>Make the FAQs eacy to find</h5> </Accordion.Header>
              <Accordion.Body>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, et? Sapiente repellendus dignissimos laboriosam ratione.</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header> <h5>Make the FAQs eacy to find</h5> </Accordion.Header>
              <Accordion.Body>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, et? Sapiente repellendus dignissimos laboriosam ratione.</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header> <h5>Make the FAQs eacy to find</h5> </Accordion.Header>
              <Accordion.Body>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, et? Sapiente repellendus dignissimos laboriosam ratione.</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header> <h5>Make the FAQs eacy to find</h5> </Accordion.Header>
              <Accordion.Body>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, et? Sapiente repellendus dignissimos laboriosam ratione.</p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
            </div>
           <div className="col-lg-6">
            <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="1">
              <Accordion.Header> <h5>Make the FAQs eacy to find</h5> </Accordion.Header>
              <Accordion.Body>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, et? Sapiente repellendus dignissimos laboriosam ratione.</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header> <h5>Make the FAQs eacy to find</h5> </Accordion.Header>
              <Accordion.Body>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, et? Sapiente repellendus dignissimos laboriosam ratione.</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header> <h5>Make the FAQs eacy to find</h5> </Accordion.Header>
              <Accordion.Body>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, et? Sapiente repellendus dignissimos laboriosam ratione.</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header> <h5>Make the FAQs eacy to find</h5> </Accordion.Header>
              <Accordion.Body>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, et? Sapiente repellendus dignissimos laboriosam ratione.</p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header> <h5>Make the FAQs eacy to find</h5> </Accordion.Header>
              <Accordion.Body>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, et? Sapiente repellendus dignissimos laboriosam ratione.</p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default FaqPart;
