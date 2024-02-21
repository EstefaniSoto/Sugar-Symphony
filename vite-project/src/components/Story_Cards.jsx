import React from 'react'
import StoryData from '../StoryData'
import Story from './Story'

function Story_Cards() {
  const StoryMap = StoryData.map(e => {
    return <Story titleStory={e.name} imgStory={e.img} description={e.description} link={e.link} />

  })
  return (
    <>
    <div className="text-container">
   <h1>Story <span>Around Us</span></h1>
   <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores dolore iure non, quasi asperiores eos recusandae amet! Labore, modi animi.</p>
   </div>
    {StoryMap}
    </>
    )
  
}

export default Story_Cards