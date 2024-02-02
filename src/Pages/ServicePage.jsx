import React from 'react'
import Header from '../Components/Common/Header/Header';
import Footer from "../Components/Common/Footer/Footer";
import HomeNewsLetter from "../Components/HomeSection/HomeNewsLetter/HomeNewsLetter";
import BreadCrumbs from '../Components/Common/BreadCrumbs/BreadCrumbs';
import HomeCompanyList from '../Components/HomeSection/HomeCompanyList/HomeCompanyList';
import ServiceCategory from '../Components/ServiceSection/ServiceCategory/ServiceCategory';
import ServicePart from '../Components/ServiceSection/ServicePart/ServicePart';


function ServicePage() {
  return (
    <div>
        <Header/>
        <BreadCrumbs/>
        <ServicePart/>
        <HomeCompanyList/>
        <ServiceCategory/>
        <HomeNewsLetter/>
        <Footer/>
    </div>
  )
}

export default ServicePage