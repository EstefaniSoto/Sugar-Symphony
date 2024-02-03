import React from 'react'
import '../components/CakeProm.css'
import CakeShop from '../assets/img/cake-shop.png'
function CakeProm() {
  return (
    <>
    
    <section className="cakeshop-container">
    <div className="cakeshopimg">
    <img className="cakeshop" src={CakeShop} alt="" /> 
    </div>

    <div className="cakeshop-text">
      <h1>Taking Cakes To New<span className='color-span'> Heights</span></h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora neque vitae magnam ab dolores sed.</p>
      <button className='learn-btn'>Learn More</button>
    </div>
    </section>

    </>
  )
}

export default CakeProm