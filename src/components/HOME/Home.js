
import React from 'react'
// import Navbars from '../Navbar/Navbars'
import './Home.css'
import Intro from '../Intro/Intro'
import WhoWeAre from '../WhoWeAre/WhoWeAre'
import AboutUs from '../AboutUs/AboutUs'

import Footer from '../Footer/Footer'

import SoormiyunTagline from '../SoormiyunTagline/SoormiyunTagline'
import Mission from '../Mission/Mission'
import Services from '../Services/Services'
import AboutSoormiyun from '../AboutSoormiyun/AboutSoormiyun'
import Subscription from '../Subscription/Subscription'
import CustomSlider from '../Events/Events'

const Home = () => {
  return (
    <div className="Home-Page">
    
    <Intro/>
    <Mission/>
    <AboutUs/>
    <AboutSoormiyun/>
<CustomSlider/>    <SoormiyunTagline/>
    <Services/>
    <Subscription/>
    <Footer/>
 
</div>
  )
}

export default Home
