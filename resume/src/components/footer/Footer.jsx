import React from 'react'
import './footer.css'
const Footer = () => {
    const d = new Date()
    const year = d.getFullYear()
  return (
    <div className='footer'>
        <h2>Portfolio</h2>
        <span><i class="ri-copyright-line"></i> {year} Shivam Upadhyay  </span>
        <div className='links'>
        <span><a href="https://www.linkedin.com/in/shivamup" target='_blank'><i class="ri-linkedin-fill"></i></a></span>
        <span><a href="https://github.com/Shivamup99?tab=repositories" target='_blank'><i class="ri-github-fill"></i></a></span>
        <span><a href="https://instagram.com/whoshivam45" target='_blank'><i class="ri-instagram-line"></i></a></span>
        <span><a href="https://facebook.com/shivamup" target='_blank'><i class="ri-facebook-circle-fill"></i></a></span>
        </div>
    </div>
  )
}

export default Footer