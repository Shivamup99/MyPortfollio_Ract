import React from 'react'
import './skills.css'
const Skills = () => {
    const frontendSkill =[
        {
            title:'React Js',
            width:'85%',
            percentage:'75%'
        },
        {
            title:'Java Script',
            width:'85%',
            percentage:'75%'
        },
        {
            title:'HTML & CSS',
            width:'85%',
            percentage:'85%'
        },
        {
            title:'SCSS & BOOTSTRAP',
            width:'85%',
            percentage:'85%'
        },
        {
            title:'Redux & Redux Toolkits',
            width:'85%',
            percentage:'70%'
        },

    ]
  const backendSkill =[
    {
        title:'Node Js & Git',
        width:'85%',
        percentage:'70%'
    },
    {
        title:'Express Js & Github',
        width:'85%',
        percentage:'70%'
    },
    {
        title:'MySql & MongoDB',
        width:'85%',
        percentage:'70%'
    },
    {
        title:'Spring Boot',
        width:'85%',
        percentage:'60%'
    },
    {
        title:'Java Core & Sql',
        width:'85%',
        percentage:'70%'
    },
  ]
  return (
    <div className='skills'>
        <div className="frontend-skiils" style={{width:'50%'}}>
            {
                frontendSkill.map((item,i)=>(
                    <div className="skill-data" key={i}>
                        <div className="skill-title">
                            <h4>{item.title}</h4>
                            <span>{item.percentage}</span>
                        </div>
                        <div className="skill-bar">
                            <span className='skill-bar-percentage' style={{width:`${item.percentage}`}} ></span>
                        </div>
                    </div>
                ))
            }
        </div>
        <div className="frontend-skiils" style={{width:'50%'}}>
            {
                backendSkill.map((item,i)=>(
                    <div className="skill-data" key={i}>
                        <div className="skill-title">
                            <h4>{item.title}</h4>
                            <span>{item.percentage}</span>
                        </div>
                        <div className="skill-bar">
                            <span className='skill-bar-percentage' style={{width:`${item.percentage}`}} ></span>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Skills