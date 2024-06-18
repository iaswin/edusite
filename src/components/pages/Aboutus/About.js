import React from 'react';
import './about.css';
import img from '../../../assets/img/perfil.png';

function About() {
  return (
    <div className='container'>
      <div className='aboutus'>
        <div className='team'>
          <h2>Our Team</h2>
          <div className='membercard'>
            <img className='image' src={img} alt='Team Member'></img>
            <h3 className='membername'>Aswin A</h3>
            <p className='memberrole'>Founder</p>
          </div>
        </div>
        <div className='about-us'>
          <h1 className='abouttt'>About Us</h1>
          <p>
            With a passion for empowering learners of all ages, our mission is to make education accessible and engaging through technology.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
