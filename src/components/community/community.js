import React from 'react'
import './community.css';
import com from '../../assets/img/community.jpeg'
import Plan from '../plans/Plans'

function Community() {
    const handleclick=()=>
        {
            window.open("https://iaswin.netlify.app/",'_blank');
        }
  return (
    <>

   
    <div className='container'>
    <div className='startwrapper'>
        <div className='startimg'>
            <img src={com}></img>
        </div>
        <div className='startcontent'>
            <h2 className='sectiontitle'>Join Our Free Community</h2>
            <p>Unlock your power and Potential by joining our community</p>
            <button className='registerbtn' onClick={handleclick}>Join Now</button>
        </div>
    </div>
     
    </div>
    <Plan/>
    </>
  )
}

export default Community
