import React from "react";
import {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";
import "./Slider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "react-bootstrap/Card";

// Import Swiper styles
import "../../../node_modules/swiper/swiper-bundle.min.css";
import { CardBody, CardText, CardTitle, Col, Row } from "react-bootstrap";
import homeClientDot from '../../Assets/Images/HomePage/homeClientDot.svg';
import homeClientCircle from '../../Assets/Images/HomePage/homeClientCircle.svg'

function Slider({ slides }) {
  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      //   autoplay={{
      //     delay: 1500,
      //     disableOnInteraction: false,
      //   }}

      pagination={{ clickable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.image} className="homeClientSwiper">
          <Card>
            <Row className="align-items-center">
            <img src={homeClientDot } alt="" className="homeClientDot img-fluid w-auto" />
            <img src={homeClientCircle} alt="homeClientCircle" className="homeClientCircle img-fluid w-auto" />
              <Col lg='5' className="homeLeafContainer">
                
                <img
                  src={slide.image}
                  alt={slide.title}
                  className=" homeLeafImg"
                />
               
              </Col>
              
              <Col lg="6">
                <CardBody>
                  <CardTitle>
                    <h3>{slide.title}</h3>
                  </CardTitle>
                  <CardText>
                    {slide.subTitle}
                  </CardText>
                </CardBody>
              </Col>
            </Row>
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Slider;
