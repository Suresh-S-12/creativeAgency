import React from 'react'
import Header from '../Components/Common/Header/Header'
import Footer from '../Components/Common/Footer/Footer'
import HomeNewsLetter from '../Components/HomeSection/HomeNewsLetter/HomeNewsLetter'
import BlogPart from '../Components/BlogSection/BlogPart/BlogPart'
import BreadCrumbs from '../Components/Common/BreadCrumbs/BreadCrumbs'

function BlogPage() {
  return (
    <div>
        <Header/>
        <BreadCrumbs/>
        <BlogPart/>
        <HomeNewsLetter/>
        <Footer/>
    </div>
  )
}

export default BlogPage