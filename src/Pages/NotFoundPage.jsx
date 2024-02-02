import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import notFoundImg from '../Assets/Images/ErrorPage/error.svg'
import Header from '../Components/Common/Header/Header';
import HomeNewsLetter from '../Components/HomeSection/HomeNewsLetter/HomeNewsLetter';
import Footer from '../Components/Common/Footer/Footer';
import BreadCrumbs from '../Components/Common/BreadCrumbs/BreadCrumbs';

function NotFoundPage() {
  return (
    <div >
        <Header/>
        <BreadCrumbs/>
        <Container style={{
        paddingTop:'7.5rem',
        paddingBottom:'3.38rem'
    }}>
            <Row className='flex-column align-items-center'>
                <Col lg='12'>
                    <img src={notFoundImg} alt="" className='img-fluid'/>
                </Col>
                <h6 className='text-center'>Oops it seems you follow backlink</h6>
                <div className="col-auto">
                <a href="./about" className="c-btn text-center">Back to Home</a>
                </div>
            </Row>
        </Container>
        <HomeNewsLetter/>
        <Footer/>
    </div>
  )
}

export default NotFoundPage