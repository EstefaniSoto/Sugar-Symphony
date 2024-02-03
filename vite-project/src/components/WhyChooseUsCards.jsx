import React from 'react'
import '../components/WhyChooseUsCard.css'
import imglogo from '../assets/img/Cake_minilogo.png'

function WhyChooseUsCards({title = "Title", img = imglogo, description = "Description" }) {
    
  return (
   <>
   <section className="WCU-container">
   <img src={img} alt=""className='cake_mini' />
  <div className="texts">
   <h2>{title}</h2>
   <p>{description}</p>
   </div>
   </section>
   
   </>
  )
}

export default WhyChooseUsCards