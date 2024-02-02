import React from "react";
import {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./HomeCompanyList.css";
import companyLogo1 from "../../../Assets/Images/HomePage/companyLogo1.svg";
import companyLogo2 from "../../../Assets/Images/HomePage/companyLogo2.svg";
import companyLogo3 from "../../../Assets/Images/HomePage/companyLogo3.svg";
import companyLogo4 from "../../../Assets/Images/HomePage/companyLogo4.svg";
import companyLogo5 from "../../../Assets/Images/HomePage/companyLogo5.svg";
import "../../../../node_modules/swiper/swiper-bundle.min.css";
import { Container } from "react-bootstrap";

function HomeCompanyList() {
  const companyList = [
    { image: companyLogo1 },
    { image: companyLogo2 },
    { image: companyLogo3 },
    { image: companyLogo4 },
    { image: companyLogo5 },
    { image: companyLogo1 },
    { image: companyLogo2 },
    { image: companyLogo3 },
    { image: companyLogo4 },
    { image: companyLogo5 },
  ];

  return (
    <div className="companyListPart">
      <Container>
        <Swiper
          modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={1}
          slidesPerView={5}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            // when window width is >= 640px
            0:{
              slidesPerView:1,
            },
            481: {
              slidesPerView: 2,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
          
          onSwiper={(swiper) => console.log(swiper)}
        >
          {companyList.map((item, index) => (
            <SwiperSlide key={index}>
              <img src={item.image} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
}

export default HomeCompanyList;
