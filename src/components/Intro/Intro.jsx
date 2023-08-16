import React from 'react'
import './intro.css'
import img1 from '../../img/27.png'
import img2 from '../../img/25.png'
import img3 from '../../img/26.png'


const Intro = () => {

  
  return (
    <>
    <div className="Intro" id="home">
    <div className="intro-container">
      <span className="intro-main-heading">Soormiyun Community</span>
      <span className="intro-main-paragraph">

      Soormiyun  is a comprehensive network designed to promote the empowerment of Sindhi women by providing them with a platform for support, resources, and opportunities.

      </span>

      <span className='intro-main-hastags'>#womencommunity #empowerment #confident #independent</span>
      
      <div className="socialmedia-icon">
        <div class="social-container">
          <ul class="social-icons">
            <li>
              <a href="fb">
                <i class="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="twit">
                <i class="fa fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="linked">
                <i class="fa fa-linkedin"></i>
              </a>
            </li>
            
            <li>
              <a href="youtube">
                <i class="fa fa-youtube"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      

      <div className="intro-images">
        <div className="image_wrapper img-1">
          <img src={img1} alt="" />
          <div className="overlay overlay_1">
  
          </div>
        </div>

        <div className="image_wrapper img-2">
          <img src={img2} alt="" />
          <div className="overlay overlay_1">
   
          </div>
        </div>

        <div className="image_wrapper img-3">
          <img src={img3} alt="" />
          <div className="overlay overlay_1">
  
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className='intro-svg'>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#6D2E46" fill-opacity="1" d="M0,288L720,192L1440,320L1440,0L720,0L0,0Z"></path></svg>
  </div>
  </>
  )
}

export default Intro
