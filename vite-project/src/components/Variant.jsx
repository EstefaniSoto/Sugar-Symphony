import React from 'react'
import cake_v from '../assets/img/variant_1.png'
import '../components/Variant.css'


function Variant({title = "Cake title", img = cake_v , description = "This is the description"}) {
  
  return (
    <>
    <section className="card-container">
        <div className="card">
            <img src={img} alt="" className="cake_variant" />
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    </section>
    
    
    </>
  )
}

export default Variant