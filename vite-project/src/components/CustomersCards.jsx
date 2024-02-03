import React from 'react'
import CustomerDatas from '../CustomersData' 
import Customers from './Customers'
import '../components/Customers.css'

function CustomersCards() {
    const CustomerData = CustomerDatas.map(e => {
        return <Customers description={e.description} name={e.name} occupation= {e.occupation} person={e.img_person} />
    })
  return (
    <>
    <div className="text-container">
   <h1>Our Customer <span>Testimonial</span></h1>
   <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores dolore iure non, quasi asperiores eos recusandae amet! Labore, modi animi.</p>
   </div>
    {CustomerData}
    
    </>
  )
}

export default CustomersCards