import React from 'react'
import About from '../components/abouts/About'
import Banner from '../components/banner/Banner'
import Experience from '../components/experience/Experience'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'
import Projects from '../components/projects/Projects'
import Testimonial from '../components/slick-test/Testimonial'

const Home = () => {
  return (
    <div className='home'>
        <Navbar/>
        <Banner/>
        <About/>
        <Experience/>
        <Projects/>
        <Testimonial/>
        <Footer/>
    </div>
  )
}

export default Home