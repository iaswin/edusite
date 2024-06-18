import React from 'react'
import meta from '../../../assets/img/ai-generated-8031741_1280.webp';
import './home.css';
import Courses from '../../Courses/Course';

function Home() {
    const handleclick=()=>{
        window.open('https://www.youtube.com/')
    }
  return (
    <>
   <section>
    <div className='container'>
    <div className='homecontainer'>
    <div className='homecontent'>
    <h2 className='section-title'>Learn Everything For Free!!</h2>
    <p>Master Trending Technology with Edusite.Invest your Time and Skill!!</p>
    <div className='homebutton'>
    <button onClick={handleclick} className='registerbtn'>Get Started</button>
    <button onClick={handleclick} className='registerbtn'>Watch Now!</button>

    </div>

    </div>
    <div className='home-img'>
    <div className='homeimagewrapper'>
        <div className='box01'>
        <div className='box-img'></div>
        <img src={meta} alt='meta'></img>

        </div>
    </div>

    </div>
    </div>

    </div>
   </section>
   <Courses/>
  

   </>
  )
}

export default Home
