import React from 'react'
import { useRef } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import '../components/Navbar.css'
import Logo from '../assets/img/Logo.png'

/* NavBar Function */
function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
  }
    const logo = Logo
  return (
    <>
    <header>
      <div className="logo logo-out"><img src={logo} alt="" /></div>
    <nav ref={navRef}>
    <div className="logo logo-nav"><img src={logo} alt="" /></div>
        <ul className='menu'>
            <li><a href="#">Home</a></li>
            <li><a href="#">Product</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Location</a></li>
        </ul>
        <button className='contact-us'>Contact Us</button>
        <button className='nav-btn nav-close-btn' onClick={showNavbar}><FaTimes/></button>
    </nav>
    <button className='nav-btn' onClick={showNavbar}><FaBars/></button>
    </header>
    </>
  )
}

export default Navbar