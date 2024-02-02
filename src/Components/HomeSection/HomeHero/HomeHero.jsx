import React from 'react';
import './HomeHero.css'
import { Col, Container, Row } from "react-bootstrap";
import homeHeroBulbIcon from '../../../Assets/Images/HomePage/Hero/homeHeroBulbIcon.svg'
import homeHeroRightImage from '../../../Assets/Images/HomePage/Hero/homeHeroRightImage.png'
import homeHeroRightIcon1 from '../../../Assets/Images/HomePage/Hero/heroRightIcons1.svg'
import homeHeroRightIcon2 from '../../../Assets/Images/HomePage/Hero/heroRightIcons2.svg'
import homeHeroRightIcon3 from '../../../Assets/Images/HomePage/Hero/heroRightIcons3.svg'
// import { ParticlesConfig } from '../../Config/ParticlesConfig';



function HomeHero() {
  return (
    <div className='homeHero'>
      {/* <ParticlesConfig/> */}
        <Container>
            <Row className='justify-content-between'>
                <Col lg='6' className='homeHeroLeft d-flex flex-column align-items-start ' style={{gap:'1.88rem'}}>
                    <p className="p-design">Welcome to Creative Agency</p>
                    <h2>Ready to take your Business to next level !</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit- et ut massa libero mass egestas malesuada viverra gravida libero cursus nulla leo pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing cursus nulla leo pulvinar.</p>
                    <div className="row " >

                      
                      
                      <div className='col-lg-6 d-flex gap-2' >
                      <img src={ homeHeroBulbIcon } alt=""  className='homeHeroIcon img-fluid 2'/>
                      <p >Innovative ideas & Fast working Process</p>
                      </div>
                      <div className='col-lg-6 d-flex gap-2'>
                      <img src={ homeHeroBulbIcon } alt=""  className='homeHeroIcon img-fluid '/>
                      <p className=''>Innovative ideas & Fast working Process</p>
                      </div>
                    </div>

                    <a href="#home" className="c-btn">Read More</a>
                </Col>
                <Col lg='6' className='d-flex justify-content-end homeHeroRight'>
                    <img src={homeHeroRightImage} alt="" className='img-fluid ms-auto' />
                    <img src={homeHeroRightIcon1} alt="" className='homeHeroRightIcon homeHeroRightIcon1'/>
                    <img src={homeHeroRightIcon2} alt="" className='homeHeroRightIcon homeHeroRightIcon2'  />
                    <img src={homeHeroRightIcon3} alt="" className='homeHeroRightIcon homeHeroRightIcon3' />
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default HomeHero