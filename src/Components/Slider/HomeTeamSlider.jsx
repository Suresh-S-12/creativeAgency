import React from "react";
import {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";
import "./HomeTeamSlider.css";

import { Swiper, SwiperSlide } from "swiper/react";
import Card from "react-bootstrap/Card";
// Import Swiper styles
import "../../../node_modules/swiper/swiper-bundle.min.css";
import { CardBody, CardText, CardTitle, Col, Row } from "react-bootstrap";
import HomeTeam1 from "../../Assets/Images/HomePage/Team/HomeTeam1.svg";
import HomeTeam2 from "../../Assets/Images/HomePage/Team/HomeTeam2.svg";

import HomeTeam3 from "../../Assets/Images/HomePage/Team/HomeTeam3.svg";
import HomeTeamShare from '../../Assets/Images/HomePage/Team/HomeTeamShare.svg'
import HomeTeamFB from '../../Assets/Images/HomePage/Team/HomeTeamFB.svg'
import HomeTeamTwitter from '../../Assets/Images/HomePage/Team/HomeTeamTwitter.svg';
import HomeTeamLinedin from '../../Assets/Images/HomePage/Team/HomeTeamLinkedin.svg'
import HomeTeamPintrest from '../../Assets/Images/HomePage/Team/HomeTeamTwitter.svg'

function HomeTeamSlider() {
  const homeTeam = [
    { image: HomeTeam1, title: "Devon Lane", subTitle: "Developer" },
    { image: HomeTeam2, title: "Devon Lane", subTitle: "Developer" },
    { image: HomeTeam3, title: "Devon Lane", subTitle: "Developer" },
    { image: HomeTeam1, title: "Devon Lane", subTitle: "Developer" },
  ];
  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      // autoplay={{
      //   delay: 1500,
      //   disableOnInteraction: false,
      // }}
      navigation
      breakpoints={{
        // when window width is >= 640px
        0:{
          slidesPerView:1,
        },

        768: {
          slidesPerView: 2,
        },
        1200:{
          slidesPerView:3
        }
      }}
      
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
       
      {homeTeam.map((slide) => (
        <SwiperSlide key={slide.image} className="homeClientSwiper">
          <Card>
            <img src={slide.image} alt={slide.title} className=" homeLeafImg" />
            <div className="icon-container">
                    <img src={HomeTeamFB} alt="" className="homeTeamIcon" />
                    <img src={HomeTeamTwitter} alt=""  className="homeTeamIcon"/>
                    <img src={HomeTeamLinedin} alt=""  className="homeTeamIcon"/>
                    <img src={HomeTeamPintrest} alt=""  className="homeTeamIcon"/>

                </div>
            <Row>
              <div class="card-img-overlay ">
                <CardBody >
                  <CardTitle>
                    <h4>{slide.title}</h4>
                  </CardTitle>
                  <CardText>
                    <p>{slide.subTitle}</p>
                  </CardText>
                </CardBody>
                <img src={HomeTeamShare} alt="" className="img-fluid" />
               
              </div>
            </Row>
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default HomeTeamSlider;
