// about us

import React, { useEffect } from 'react'
import SympImg from '../../img/4.png'
import SymImg2 from '../../img/support.PNG'
import './aboutsoormiyun.css'

const AboutSoormiyun = () => {
 
  return (
    <>
    <div className='SoormiyunAbout-Section'>
      <div className='left-soormyunaboutSections' >
  <h2>
  <span className='aboutus-heading'>ABOUT US</span>
  </h2>
  <h2>
  <span className='aboutus-subheading'>Empowering Sindhi Women for Success and Social Change</span>
  </h2>
  <span className='aboutus-paragraph'>
  Soormiyun empowers Sindhi women through collaboration, advocacy, and mentorship for gender equality and community impact.
      </span>
       <span><button className='button-6'>Contact Us</button></span>

      </div>
      <div className='right-soormyunaboutSections' data-aos="fade-right">
      <div className='img1-soormyunaboutSections' data-aos="fade-down">
      <img src={SympImg}></img>
      </div>
      <div className='img2-soormyunaboutSections' >
      <img src={SymImg2}></img>
      </div>
      
      </div>
    
      </div>
      <svg data-aos="fade-down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#A26769" fill-opacity="1" d="M0,32L1440,128L1440,0L0,0Z"></path></svg>
    
      </>
      )
}

export default AboutSoormiyun