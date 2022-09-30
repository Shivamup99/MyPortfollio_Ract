import React from 'react'
import './project.css'
const Projects = () => {
    const projects =[
        {
            icon:"ri-code-s-slash-line",
            title:'E-commarce App',
            desc:'It is a e-commarce app I used the MERN stack tecnolgy , for designing I used Html and SCSS.',
            git:'https://github.com/Shivamup99/E-commarce-Best-App'
        },
        {
            icon:"ri-code-line",
            title:'Car Rent App',
            desc:'It is a car rent app I used the MERN stack tecnolgy and redux, for designing I used Html and CSS.',
            git:'https://github.com/Shivamup99/RentCarApp'
        },
        {
            icon:"ri-code-s-slash-line",
            title:'Car Rent App',
            desc:'It is a car rent app I used the MERN stack tecnolgy and redux, for designing I used Html and CSS.',
            git:'https://github.com/Shivamup99/RentCarApp'
        },
        {
            icon:"ri-code-line",
            title:'Zomato Clone',
            desc:'It is basic design like zomato app I used react form making this clone.',
            git:'https://github.com/Shivamup99/zomato-clone-react' 
        },
        {
            icon:"ri-code-s-slash-line",
            title:'Employee Detail',
            desc:'In this project I used spring boot and mysql for backend and angular for frontend.',
            git:'https://github.com/Shivamup99/SpringBoot-Angular-CRUD' 
        },
        {
            icon:"ri-braces-line",
            title:'Employee Detail',
            desc:'In this project I used spring boot and mysql for backend and angular for frontend.',
            git:'https://github.com/Shivamup99/SpringBoot-Angular-CRUD' 
        }

    ]
  return (
    <div className='projects'>
        <h2>Personal Projects</h2>
        <div className="projects-content">
            {projects.map((item,i)=>(
            <div className="project-data">
               <span className='pro-icon'><i className={item.icon}></i></span>
               <h2>{item.title}</h2>
               <p>{item.desc}</p>
               <div className="git">
               <i className="ri-github-line"></i>
               <a href={item.git} target="_blank">Check Code</a>
               </div>
           </div>
            ))}
        </div>
    </div>
  )
}

export default Projects