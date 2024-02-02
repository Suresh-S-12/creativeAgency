import React from 'react';
import Header from '../Components/Common/Header/Header';
import HomeNewsLetter from '../Components/HomeSection/HomeNewsLetter/HomeNewsLetter';
import Footer from '../Components/Common/Footer/Footer';
import BreadCrumbs from '../Components/Common/BreadCrumbs/BreadCrumbs';
import TeamPart from '../Components/TeamSection/TeamPart';


function TeamPage() {
    
  return (
    <div>
        <Header/>
        <BreadCrumbs/>
        <TeamPart/>
        <HomeNewsLetter/>
        <Footer/>
        </div>
  )
}

export default TeamPage