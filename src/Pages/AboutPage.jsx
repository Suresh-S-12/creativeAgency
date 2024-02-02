import React from 'react'
import Header from '../Components/Common/Header/Header'
import BreadCrumbs from '../Components/Common/BreadCrumbs/BreadCrumbs'
import AboutAbout from '../Components/AboutSection/AboutAbout/AboutAbout'
import HomeCompanyList from "../Components/HomeSection/HomeCompanyList/HomeCompanyList";
import HomeAcheivement from "../Components/HomeSection/HomeAcheivement/HomeAcheivement";
import AboutMission from '../Components/AboutSection/AboutMission/AboutMission';
import Footer from "../Components/Common/Footer/Footer";
import HomeTeam from '../Components/HomeSection/HomeTeam/HomeTeam';
import HomeNewsLetter from "../Components/HomeSection/HomeNewsLetter/HomeNewsLetter";
import HomeClient from "../Components/HomeSection/HomeClient/HomeClient";
import ServicePart from '../Components/ServiceSection/ServicePart/ServicePart';



function AboutPage() {
  return (
   <div className='aboutPage'>
     <Header/>
    <BreadCrumbs/>
    <AboutAbout/>
    <AboutMission/>
    <ServicePart/>
    <HomeCompanyList />
    <HomeTeam/>
    <HomeAcheivement/>
    <HomeClient />
      <HomeNewsLetter />
    <Footer/>
   </div>
  )
}

export default AboutPage