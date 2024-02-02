import React from 'react';
import Header from "../Components/Common/Header/Header";
import Footer from '../Components/Common/Footer/Footer';
import HomeNewsLetter from '../Components/HomeSection/HomeNewsLetter/HomeNewsLetter';
import Portfolio from '../Components/PortfolioSection/Portfolio';
import BreadCrumbs from '../Components/Common/BreadCrumbs/BreadCrumbs';


function PortfolioPage() {
  return (
    <div>
       <Header/>
       <BreadCrumbs/>
       <Portfolio/>
       <HomeNewsLetter/>
       <Footer/>
    </div>
  )
}

export default PortfolioPage