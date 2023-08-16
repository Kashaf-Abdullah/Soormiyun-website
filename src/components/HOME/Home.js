
import React from 'react'
// import Navbars from '../Navbar/Navbars'
import './Home.css'
import Intro from '../Intro/Intro'
import WhoWeAre from '../WhoWeAre/WhoWeAre'
import AboutUs from '../AboutUs/AboutUs'

import Footer from '../Footer/Footer'

import SoormiyunTagline from '../SoormiyunTagline/SoormiyunTagline'

import Slider from '../Events/Events'
import Mission from '../Mission/Mission'
import Services from '../Services/Services'
import AboutSoormiyun from '../AboutSoormiyun/AboutSoormiyun'
import Subscription from '../Subscription/Subscription'

const Home = () => {
  return (
    <div className="Home-Page">
    
    <Intro/>
    <Mission/>
    <AboutUs/>
    <AboutSoormiyun/>
    <Slider/>
    <SoormiyunTagline/>
    <Services/>
    <Subscription/>
    <Footer/>
 
</div>
  )
}

export default Home
