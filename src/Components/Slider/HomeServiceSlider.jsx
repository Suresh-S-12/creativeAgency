import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import './HomeServiceSlider.css'
import {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";
import "../../../node_modules/swiper/swiper-bundle.min.css";
import serviceImage1 from "../../Assets/Images/HomePage/homeServiceImg.svg";
import serviceImage2 from "../../Assets/Images/HomePage/homeServiceImg2.svg";

import {
  Col,
  Container,
  Row,
  Card,
  CardBody,
  CardText,
  CardTitle,
} from "react-bootstrap";

function HomeServiceSlider() {
  const serviceImage = [
    {
      image: serviceImage1,
      title: "Web Development",
      text: "It is a long establishe fact that a reader will be distracted the readable hkljklkl content of a page layout",
    },
    {
      image: serviceImage2,
      title: "UI/UX Desing",
      text: "It is a long establishe fact that a reader will be distracted the readable hkljklkl content of a page layout",
    },
    {
      image: serviceImage1,
      title: "Web Development",
      text: "It is a long establishe fact that a reader will be distracted the readable hkljklkl content of a page layout",
    },
    {
      image: serviceImage2,
      title: "UI/UX Desing",
      text: "It is a long establishe fact that a reader will be distracted the readable hkljklkl content of a page layout",
    }
  ];

  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={2}
      // autoplay={{
      //   delay: 1500,
      //   disableOnInteraction: false,
      // }}
      breakpoints={{
        // when window width is >= 640px
        0:{
          slidesPerView:1,
        },
        1200: {
          slidesPerView: 2,
        },
      }}
      loop={true}
      pagination={{ clickable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {serviceImage.map((items) => (
        <SwiperSlide>
          <Card>
            <Card.Img variant="top" src={items.image} />
            <CardBody>
              <CardTitle>Card Title</CardTitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
              <a href="#" className="c-btn">
                Read More
              </a>
            </CardBody>
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default HomeServiceSlider;
