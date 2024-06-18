import React from "react";
import footer from '../../../assets/img/download.jpg'
import './footer.css'
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-wrapper">
          <div className="footer-box"> 
          <div className="logo">
            <div className="logo-img">
                <img src={footer} alt=""></img>
            </div>
            <h2>Edusite</h2>
          </div>
          <p>Embrace the future of innovation and technology with our cutting edge tech business solutions</p>
          </div>
          <div className="footer-box">
          <h4 className="footer-title">Company</h4>
          <ul className="footerlinks">
          <li><Link to='/services'>Our Programs</Link></li>
          <li><Link to='/services'>Our Plans</Link></li>
          <li><Link to='/services'>Became a Member</Link></li>
          
          

      
          

          </ul> </div>
          <div className="Footer-box">
          <h4 className="footer-title">Quick Links</h4>
          <ul className="footerlinks">
          <li><Link to='/about'>About Us</Link></li>
          <li><Link to='/contact'>Contact Us</Link></li>
          <li> <li><Link to=''>Support Us</Link></li></li>

          </ul> </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
