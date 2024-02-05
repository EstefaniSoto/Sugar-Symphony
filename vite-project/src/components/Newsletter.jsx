import React from 'react'
import "../components/Newsletter.css"

function Newsletter() {
  return (
    <section className="newsletter">
    <h1 className='newsletter_title'>Join Our <span>Newsletter</span></h1>
    <input type="text" name="" id="emailAddress" placeholder='Enter Your Email Address'/>
    <button className='sub-btn'>Subscribe Now</button>
    </section>
  )
}

export default Newsletter