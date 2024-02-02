import React from 'react';
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import './HomeTeamSlider.css';
import './HomePortfolioSlider.css'
import HomePortfolio1 from '../../Assets/Images/HomePage/Portfolio/HomePortfolio1.svg';
import HomePortfolio2 from '../../Assets/Images/HomePage/Portfolio/HomePortfolio2.svg';
import HomePortfolio3 from '../../Assets/Images/HomePage/Portfolio/HomePortfolio3.svg';

function HomePortfolioSlider({ selectedCategory }) {
  const homePortfolio = [
    { id:1, image: HomePortfolio1, category: 'Marketing' },
    { id:2, image: HomePortfolio2, category: 'Development' },
    { id:3, image: HomePortfolio3, category: 'Marketing' },
    { id:4, image: HomePortfolio1, category: 'OtherCategory' },
    { id:5, image: HomePortfolio2, category: 'OtherCategory' },
  ];

  const filteredPortfolio = selectedCategory === 'All Project'
    ? homePortfolio
    : homePortfolio.filter(item => item.category === selectedCategory);

  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      pagination={{ clickable:true }}
      breakpoints={{
        0:{ slidesPerView:1 },
        768: { slidesPerView: 2 },
        1200: { slidesPerView: 2 },
        1400: { slidesPerView: 3 },
      }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {filteredPortfolio.map((slide) => (
        <SwiperSlide key={slide.id} className='homeClientSwiper'>
          <div className='homePortfolioContainer'>
            <img src={slide.image} alt='' />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default HomePortfolioSlider;
