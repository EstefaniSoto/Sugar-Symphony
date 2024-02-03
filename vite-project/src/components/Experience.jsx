import React from 'react'
import '../components/Experience.css'
import Cupcake from '../assets/img/cupcake-design.png'

function Experience() {
  return (
    <>
    <section className="experience">
      <img src={Cupcake} alt="" className='cupcake_img'/>
      <div className="card-container-pt3">
        <div className="card-pt3">
          <h2 className='title_text-1'>Taste It.</h2>
          <h2 className='title_text-2'>Experience It.</h2>
          <p className='main-p'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, velit.</p>
          <ul className='list'>
            <li>Lorem ipsum 1</li>
            <li>Lorem ipsum 2</li>
            <li>Lorem ipsum 3</li>
            <li>Lorem ipsum 4</li>
            <li>Lorem ipsum 5</li>
            <li>Lorem ipsum 6</li>
          </ul>
        </div>
      </div>

    </section>
    

    
    
    </>
  )
}

export default Experience