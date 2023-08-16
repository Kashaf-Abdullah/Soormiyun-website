import React from 'react'
import './SoormiyunTagline.css'
const SoormiyunTagline = () => {
  return (
    <div className='SoormiyunTagLine'>
    <marquee className="moving-text" behavior="scroll" scrollamount="7" direction="left">   Soormiyun is a comprehensive network aimed at empowering Sindhi women by addressing challenges such as gender inequality, limited access to education and healthcare, and cultural barriers. Through training programs, networking opportunities, advocacy efforts, health support, mentorship programs, and community engagement, Soormiyun fosters empowerment, collaboration, and personal growth among Sindhi women, enabling them to achieve their full potential and contribute to positive societal change. </marquee>

    <div className="intro-soormiyun">
    <div className="i-soormiyun soormiyun">SOORMIYUN</div>
    <div className="i-soormiyun women">WOMEN</div>
    <div className="i-soormiyun community">COMMUNITY</div>
  </div>

  <marquee className="moving-text" behavior="scroll" scrollamount="7" direction="right">   
  Soormiyun is a comprehensive network aimed at empowering Sindhi women by addressing challenges such as gender inequality, limited access to education and healthcare, and cultural barriers. Through training programs, networking opportunities, advocacy efforts, health support, mentorship programs, and community engagement, Soormiyun fosters empowerment, collaboration, and personal growth among Sindhi women, enabling them to achieve their full potential and contribute to positive societal change.</marquee>

  </div>
  )
}

export default SoormiyunTagline
