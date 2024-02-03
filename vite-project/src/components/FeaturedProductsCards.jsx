import React from 'react'
import Featured from './FeaturedProducts'
import data from '../FeaturedData'
import '../components/FeaturedProductsCards.css'

function FeaturedProductsCards() {
    const getDataFeatured = data.map(e => {
            return <Featured title={e.name} price= {e.price} img={e.img} />  
        })
   
    return(
    <>
    <div className='bg-featured'>
    <h1 className='cake_title'>Our Featured<span> Products</span></h1>
       {getDataFeatured} 
    </div>
    
    </>
    )
   
    }
  


export default FeaturedProductsCards