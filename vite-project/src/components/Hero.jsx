import React from 'react'
import heroimg from '../assets/img/banner-cake-1.png'
import '../components/Hero.css'

function Hero() {
   
  return (
    <>
    <div className="cake-container">
        <img className="cake" src={heroimg} alt="" />
        <div className="hero-text">
      <h1><span className='color-span'>Poppin´</span> Fresh Cake Shop</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora neque vitae magnam ab dolores sed.</p>
      <button className='try-btn'>Try it Now</button>
    </div>
    </div>

    



    </>
  )
}

export default Hero