import React from 'react'
import Header from '../Components/Common/Header/Header'
import Footer from '../Components/Common/Footer/Footer'
import HomeNewsLetter from '../Components/HomeSection/HomeNewsLetter/HomeNewsLetter'
import BreadCrumbs from '../Components/Common/BreadCrumbs/BreadCrumbs'
import  PortfolioDetailPart from '../Components/PortfolioSection/PortfolioDetail/portfolioDetailPart'
 

function PortfolioDetail() {
   
    return (
    <div>
        <Header/>
        <BreadCrumbs/>
        <PortfolioDetailPart/>
        <HomeNewsLetter/>
        <Footer/>
    </div>
  )
}

export default PortfolioDetail