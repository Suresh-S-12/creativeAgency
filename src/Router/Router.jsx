import React from 'react';
import {Routes, Route } from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import AboutPage from '../Pages/AboutPage';
import BlogPage from '../Pages/BlogPage';
import ServicePage from '../Pages/ServicePage';
import ContactPage from '../Pages/ContactPage';
import NotFoundPage from '../Pages/NotFoundPage';
import ComingSoon from '../Pages/ComingSoon';
import FaqPage from '../Pages/FaqPage';
import TeamPage from '../Pages/TeamPage';
import TeamDetail from '../Pages/TeamDetail';
import PortfolioPage from '../Pages/PortfolioPage';
import PortfolioDetail from '../Pages/PortfolioDetail';
import ROUTE from './constant.route';




function Router() {
    return (
        <Routes>
             <Route path={ROUTE.HOME} element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />

            <Route path='/about' element={<AboutPage/>}/>
            <Route path ='/blog' element={<BlogPage/>}/>
            <Route path ='/service' element = {<ServicePage/>}/>
            <Route path ='/contact' element = {<ContactPage/>}/>
            <Route path ='/comingsoon' element = {<ComingSoon/>}/>
            <Route path='/team' element={<TeamPage/>} />
            <Route path='/team/:id' element={<TeamDetail/>} />

            <Route path='/faq' element = {<FaqPage/>}/>
            <Route path ='/portfolio' element = {<PortfolioPage/>}/>
           
            <Route path={ROUTE.PORTFOLIO.PORTFOLIODETAIL} element = {<PortfolioDetail/>}/>


            <Route path='/*' element = {<NotFoundPage/>}/>
           
        </Routes>
      )
}

export default Router