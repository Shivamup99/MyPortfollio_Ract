import React from 'react'
import './testi.css'
import Slider from 'react-slick'

const Testimonial = () => {
    const settings ={
        dots:false,
        infinite:true,
        speed:1000,
        slidesToShow:1,
        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed:3000,
        swipeToSlide:true
    }
  return (
    <div className='testi'>
        <h2>You can check me here</h2>
        <div className="testi-content">
            <Slider {...settings}>
            <div>
                <div className="testi-data">
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIjRegbeurow3YW6Y1T51tnoAloPF-Baz6ZA&usqp=CAU' alt='ss'/>
                    <p>GitHub is an Internet hosting service for software development and version control using Git. It provides the distributed version control of Git plus access control, bug tracking, software feature requests, task management, continuous integration, and wikis for every project.</p>
                    <a href='https://github.com/Shivamup99?tab=repositories' target='_blank'>My profile at github</a>
                </div>
            </div>
            <div>
                <div className="testi-data">
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2WoMQAbCwT9Z2fcI5RB2HuZ3zXDlVwxVq2w&usqp=CAU' alt='sss'/>
                    <p>LinkedIn is an American business and employment-oriented online service that operates via websites and mobile apps. Launched on May 5, 2003, the platform is primarily used for professional networking and career development, and allows job seekers to post their CVs and employers to post jobs.</p>
                    <a href='https://www.linkedin.com/in/shivamup' target='_blank'>My profile at linkdin</a>
                </div>
            </div>
            <div>
                <div className="testi-data">
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNPwFE-CgNd8TRWnp1WYBYHkLbZSMdIG4olQ&usqp=CAU' alt='sdd'/>
                    <p>HackerRank is a tech company that focuses on competitive programming challenges for both consumers and businesses. Developers compete by writing programs according to provided specifications.HackerRank's programming challenges can be solved in a variety of programming languages span multiple computer science domains</p>
                    <a href='https://www.hackerrank.com/shivam190445' target='_blank'>My profile at hackerrank</a>
                </div>
            </div>
            <div>
                <div className="testi-data">
                    <img src='https://i0.wp.com/www.itvoice.in/wp-content/uploads/2021/08/HackerEarth-logo.png?fit=540%2C280&ssl=1' alt='ee'/>
                    <p>HackerEarth is an Indian software company headquartered in San Francisco, US, that provides enterprise software that assists organizations with technical hiring. HackerEarth is used by organizations for technical skill assessment and remote video interviewing. In addition, HackerEarth also has a community and since inception built a base of 4M+ developers</p>
                    <a href='https://www.hackerearth.com/@K17EWA09' target='_blank'>My profile at hackerearth</a>
                </div>
            </div>
            </Slider>
        </div>
    </div>
  )
}

export default Testimonial