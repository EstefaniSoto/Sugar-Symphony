import React from 'react'
import './FeaturedProducts.css'
import imguse from '../assets/img/variant_3.png'

function FeaturedProducts({title = "This is the title" ,img = imguse, price = "price"}) {
  
  return (
    <>
    <section className="card-container-pt2">
      <div className="card-pt2">
        <img src={img} alt="" className='img-use'/>
        <h2>{title}</h2>
        <h2>{price}</h2>
        <button className="check-it">Check it now</button>
      </div>
    </section>
    </>
  )
}

export default FeaturedProducts