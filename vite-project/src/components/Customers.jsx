import React from 'react'
import score from '../assets/img/stars-score.png'
import quote from '../assets/img/quote.png'
import '../components/Customers.css'


function Customers({description = "This is a description", person = "src/assets/img/woman.jpg", name = "This is the name", occupation = "Doctor"}) {
  return (
   <>
   
   <div className="card_pt3_container">
    <div className="card_pt3">
    <img src={score} alt="" className='stars' />
   <p>{description}</p>
   <div className="person-info">
   <img src={person} alt="" />
   <div className="person_occupation">
   <h3>{name}</h3>
    <h4>{occupation}</h4>
    </div>
    <img src={quote} alt="" className='quote'/>
    </div>
   </div>
  </div>
   </>
  )
}

export default Customers