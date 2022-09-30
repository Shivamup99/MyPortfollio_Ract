import React from 'react'
import './exp.css'
const Experience = () => {

  const experienceDev = [
    {
      year:'2022 April - Current',
      title:'Associate Engineer',
      desc:'I joined NCSI Pune as a fullstack developer and my profile is Associate Engineer.'
    },
    {
      year:'2021 Febuary - 2021 August',
      title:'Internship',
      desc:'I did 6 month internship in the field of MERN Stack.'
    },
    {
      year:'2017 - 2021',
      title:'Student',
      desc:'I completed my degree in Lovely Professional University in Computer Science.'
    }
  ]

  return (
    <div className='experience'>
      <h2>Experience</h2>
      <div className="exp-content-data">
      <div className="exp-content">
        {
          experienceDev.map((item,i)=>(
            <div className="exp-data" key={i}>
            <span className='exp-icon'><i class="ri-briefcase-line"></i></span>
            <h6>{item.year}</h6>
            <h5>{item.title}</h5>
            <p>{item.desc}</p>
          </div>
          ))
        }
      </div>
      <div className="exp-content">
        {
          experienceDev.map((item,i)=>(
            <div className="exp-data" key={i}>
            <span className='exp-icon'><i class="ri-briefcase-line"></i></span>
            <h6>{item.year}</h6>
            <h5>{item.title}</h5>
            <p>{item.desc}</p>
          </div>
          ))
        }
      </div>
      </div>
    </div>
  )
}

export default Experience