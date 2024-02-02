import React from "react";
import "./HomeNewsLetter.css";
import messageIcon from "../../../Assets/Images/HomePage/message icon.svg";
import { Container, InputGroup, Form, Row } from "react-bootstrap";


function HomeNewsLetter() {
  return (
    <div className="homeNewsLetter">
      <Container className="text-center">
        <Row className="flex-column homeNewsLetter-row"> 
        <h2>Join Our Newsletter</h2>
        <p className="nesLetterPara">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo amet
          posuere
        </p>
        <InputGroup className="mb-3 newsLetterInput  ms-auto me-auto">
          <Form.Control
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
          <img src={messageIcon} alt="" className="messageIcon" />
        </InputGroup>
        </Row>
      </Container>
    </div>
  );
}

export default HomeNewsLetter;
