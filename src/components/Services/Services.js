

// services section
import React, { useEffect } from 'react'
import networking from '../../img/networkopportunity.PNG'
import support1 from '../../img/support1.PNG'
import empowerment from '../../img/COMMUNITYEmpowerment.PNG'
import training from '../../img/training.PNG'


import './services.css'

const Services = () => {
  return (
 
    <div className='Services-Section' >
    <h2>Soormiyun Connect: Forge Meaningful Bonds</h2>
    <p>  Join Soormiyun Connect to network with inspiring Sindhi women, build valuable <br/>connections, and foster collaborative opportunities for personal and professional growth. </p>
      <div className='Cards'>
      <div className='c1 card'>
      <img src={empowerment}></img>
      <h4><strong>Community Engagement</strong></h4>
      <p>Promoting inclusivity and gender equality through dialogue and awareness in local communities
      </p>
      </div>
      <div className='c2 card'>
      <img src={support1}></img>
      <h4><strong>Well-being Support</strong></h4>
      <p>  Providing resources and support for the health and well-being of Sindhi women.
      </p></div>
      <div className='c3 card'>
      <img src={networking}></img>
      <h4><strong>Networking Opportunities</strong></h4>
      <p> Connecting Sindhi women for support and growth and prividing networking oppurtunite 
      </p></div>
      <div className='c4 card'>
      <img src={training}></img>
      <h4><strong>Empowerment Training</strong></h4>
      <p>  Equipping Sindhi women with skills for personal and professional empowerment.
      </p></div>
      
      </div>
    </div>
  )
}

export default Services