import React from 'react'
import ContactDetail from '../Components/ContactSection/ContactDetail/ContactDetail'
import Header from '../Components/Common/Header/Header'
import Footer from '../Components/Common/Footer/Footer'
import BreadCrumbs from '../Components/Common/BreadCrumbs/BreadCrumbs'
import HomeNewsLetter from '../Components/HomeSection/HomeNewsLetter/HomeNewsLetter'
import ContactUs from '../Components/ContactSection/ContactUs/ContactUs'

function ContactPage() {
  return (
    <div>
        <Header/>
        <BreadCrumbs/>
        <ContactDetail/> 
        <ContactUs/>
        <HomeNewsLetter/>   
        <Footer/>   
    </div>
  )
}

export default ContactPage