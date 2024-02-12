import React from 'react'
import '../components/Story.css'
import imgReplace from '../assets/img/chefcake.jpg'

function Story({titleStory = "title", imgStory = {imgReplace}, description = "parr" , link = "link"}) {
  return (
    <>
    <section className="StoryCard">
      <div className="StoryCard_Container">
        <div className="StoryCards">
          <section className="img-container">
            <img src={imgStory} alt="" className='picture'/>
          </section>
          <div className="date-div">
           <h4 className='date'>24 jan</h4>
           </div>
          <div className="all_text">
            
          <h3>{titleStory}</h3>
          <p>{description}</p>
          <a href={link}>Read More</a></div>

          

        </div>
      </div>

    </section>
    
    </>
  )
}

export default Story