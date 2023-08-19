import React, { useEffect } from "react";
import "./footer.css";
import mmf_logo from "../../img/logo.png";
import email from "../../img/email.png";
import phone from "../../img/phone.png";

import {
  FaTwitter,
  FaYoutube,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-3 col-md-4 col-sm-12">
              <div className="mmf-footer">
                <div className="foot-img">
                  <img src={mmf_logo} alt="" />
                </div>
                <p>
                Soormiyun  is a comprehensive network designed to promote the empowerment of Sindhi women by providing them with a platform.                </p>
                <div className="foot-icon">
                  <a
                    target="_blank"
                    href="https://m.facebook.com/mehfoozmustaqbilfoundation"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/mehfoozmustaqbilfoundation/"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/company/mehfoozmustaqbilfoundation/"
                  >
                    <FaLinkedinIn />
                  </a>

                  <a
                    target="_blank"
                    href="https://www.youtube.com/@MehfoozMustaqbilFoundation"
                  >
                    <FaYoutube />
                  </a>
                  <a target="_blank" href="https://twitter.com/mmfoundationpk">
                    <FaTwitter />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-12">
              <div className="foot-about">
                <h5>Menu</h5>
                <ul>
                  <Link spy={true} to="intro-section" smooth={true}>
                    <li>
                      <a href="/#home">Home</a>
                    </li>
                  </Link>
                  <Link spy={true} to="whoweare-section" smooth={true}>
                    <li>
                      <a href="/#whoweare">Who we are</a>
                    </li>
                  </Link>
                  <Link spy={true} to="campaign-section" smooth={true}>
                    <li>
                      <a href="/#campaign">Our campaign</a>
                    </li>
                  </Link>

                  <Link spy={true} to="contact-section" smooth={true}>
                    <li>
                      <a href="/#contactus">Contact</a>
                    </li>
                  </Link>

                  <Link spy={true} to="joinus-section" smooth={true}>
                    <li>
                      <a href="/#joinus">Join us</a>
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12 footer-end">
              <div className="foot-contact">
                <h5>Contact Info</h5>

                <div className="footer-contact-a">
                  <a href="tel:+9230786110110" className="contact-info">
                  <span> <div class="image-container">
                  <div class="circle-background">
                    <img src={email} alt="Image"/>
                  </div>
                   </div>Call us</span>
                  <span>+92 307 8611011</span>
               </a>
                  </div>

                <div className="footer-contact-a contact-footer">
                <a href="mailto: info@mehfoozmustaqbil.org" className="email-info">
                    
                    <span><div class="image-container">
                    <div class="circle-background">
                      <img src={phone} alt="Image"/>
                    </div>
                     </div>Email Us</span>
                    <span> soormiyun@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 p-0">
            <div className="foot-end py-2">
              <small>
                Website developed with &#128151; for Soormiyun Community . Copyright © 2023, All Right Reserved Soormiyun           </small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
