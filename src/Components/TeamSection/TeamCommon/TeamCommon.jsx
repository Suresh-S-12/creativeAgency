import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './TeamCommon.css'

function TeamCommon() {
  return (
    <div className='teamCommon'>
        <Container>
            <Row>
                <Col className='teamCommonContent'>
                    <h2>
                    Enough talk, let’s get to work
                    </h2>
                    <a href="#home" className="teamCommonBtn">Get Started</a>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default TeamCommon