import React,{useState} from 'react'
import './nav.css'
const Navbar = () => {
  const [isScrolled,setIsScrolled] = useState(false)

  window.onscroll=()=>{
    setIsScrolled(window.pageYOffset===0 ? false :true)
    return ()=>(window.onscroll=null)
  }

  const handleClick =(e)=>{
    e.preventDefault()
    const targetTag = e.target.getAttribute('href')
    const location = document.querySelector(targetTag).offsetTop

    window.scrollTo({
      left:0,
      top:location-78
    })
  }

  return (
    <div className={isScrolled ? 'navbar scrolled':'navbar'}>
        <div className="nav-items">
            <div className="nav-left">
                <h2>Portfolio</h2>
            </div>
            <div className="nav-center">
                <a href='#home' onClick={handleClick}>Home</a>
                <a href='#about' onClick={handleClick}>About</a>
                <a href='#experience' onClick={handleClick}>Experience</a>
                <a href='#project' onClick={handleClick}>Projects</a>
            </div>
            <div className="nav-right">
               <button className='nav-btn'>Download CV</button>
               <span className='menu'><i className="ri-menu-2-fill"></i></span>
            </div>
        </div>
    </div>
  )
}

export default Navbar