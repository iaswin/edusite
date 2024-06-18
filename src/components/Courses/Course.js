import React from 'react';
import ai from '../../assets/img/ai.jpeg';
import dm from '../../assets/img/dm.jpg';
import cs from '../../assets/img/cyber.jpg';
import sd from '../../assets/img/Software-Development-Business1--1-.jpg';
import './Course.css';
import Community from '../community/community';


function Course() {
    const coursedata = [
        {
            title: 'AI',
            description: 'Master in AI',
            img: ai
        },
        {
            title: 'Digital Marketing',
            description: 'Master in Digital Marketing',
            img: dm
        },
        {
            title: 'Cyber Security',
            description: 'Master in Cyber Security',
            img: cs
        },
        {
            title: 'Software Development',
            description: 'Master in Software Development',
            img: sd
        },
    ];

    return (
        <>

      
        <div className='coursecontainer'>
            <div className='coursetop'>
                <h2 className='section-title'>Our Free Courses</h2>
                <p>The Top Free Courses with Certificates</p>
                <div className='course-wrapper'>
                    {coursedata.map((course, index) => (
                        <div className='courseitem' key={index}>
                            <span className='courseicon'>
                                <img src={course.img} alt={course.title} />
                            </span>
                            <div className='coursecontent'>
                                <h4>{course.title}</h4>
                                <p>{course.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <Community/>
        </>
    );
}

export default Course;
