import React from 'react'
import Header from '../Components/Common/Header/Header'
import Footer from '../Components/Common/Footer/Footer'
import HomeNewsLetter from '../Components/HomeSection/HomeNewsLetter/HomeNewsLetter'
import FaqPart from '../Components/FaqSection/FaqPart'
import BreadCrumbs from '../Components/Common/BreadCrumbs/BreadCrumbs'

function FaqPage() {
  return (
    <div>
        <Header/>
        <BreadCrumbs/>
        <FaqPart/>
        <HomeNewsLetter/>
        
        <Footer/>   
    </div>
  )
}

export default FaqPage