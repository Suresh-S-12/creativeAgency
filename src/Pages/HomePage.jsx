import React from "react";
import Footer from "../Components/Common/Footer/Footer";
import HomeNewsLetter from "../Components/HomeSection/HomeNewsLetter/HomeNewsLetter";
import HomeClient from "../Components/HomeSection/HomeClient/HomeClient";
import HomeAbout from "../Components/HomeSection/HomeAbout/HomeAbout";
import HomeCompanyList from "../Components/HomeSection/HomeCompanyList/HomeCompanyList";
import HomeServices from "../Components/HomeSection/HomeServices/HomeServices";
import HomeProcess from "../Components/HomeSection/HomeProcess/HomeProcess";
import HomeAcheivement from "../Components/HomeSection/HomeAcheivement/HomeAcheivement";
import HomePortfolio from "../Components/HomeSection/HomePortfolio/HomePortfolio";
import Header from "../Components/Common/Header/Header";
import HomeHero from "../Components/HomeSection/HomeHero/HomeHero";
import HomeTeam from "../Components/HomeSection/HomeTeam/HomeTeam";

function HomePage() {
  return (
    <div>
      <Header/>
      <HomeHero/>
      <HomeAbout />
      <HomeCompanyList />
      <HomeServices />
      <HomeProcess/>
      <HomeAcheivement/>
      <HomePortfolio/>
      <HomeTeam/>
      <HomeClient />
      <HomeNewsLetter />
      <Footer />
    </div>
  );
}

export default HomePage;
