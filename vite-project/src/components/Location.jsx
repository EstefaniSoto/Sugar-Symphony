import React from 'react'
import Locationimg from '../assets/img/Location-icon.png'
import '../components/Location.css'
import Locationpic from '../assets/img/cake-shop-img.jpg'

function Location() {
  return (
    <>
    <section className="card-location-container">
      <h1 className="title">Our Shop <span>Location</span></h1>
    <img src={Locationpic} alt="" className='location_pic'/>
      <div className="card-location">
        <div className="title_and_img">
        <img src={Locationimg} alt="" className='location-logo' />
        <h2 className='title_location'>2443 Oak Ridge Omaha, QA 45065</h2>
        </div>
        <hr />
        <h3 className='title_hr'>Open Hours:</h3>
        <h3>Monday - Friday</h3>
        <p className='hours'>09:00 AM - 05:00 PM</p>
        <h3>Monday - Friday</h3>
        <p className='hours_2'>09:00 AM - 05:00 PM</p>
        <hr />
        <button className="see_map">See Map</button>

      </div>
      
    </section>

    
    
    </>
  )
}

export default Location