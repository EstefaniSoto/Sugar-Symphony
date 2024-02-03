import React from 'react'
import RollCake from '../assets/img/Cake_roll.png'
import '../components/WhyChooseUs.css'

function WhyChooseUs() {
  return (
    <>
    <section className="wcu-container">
        <h1 className='wcu'>Why Choose Our <span> Cakes</span></h1>
    <img src={RollCake} className='rollcake' alt="" />
    <p className='p-description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati consectetur nobis dolore aliquam. Aliquam placeat nostrum quibusdam ratione beatae. Ullam!</p>

    </section>
    
    </>
  )
}

export default WhyChooseUs