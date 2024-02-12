import React from 'react'
import StoryData from '../StoryData'
import Story from './Story'

function Story_Cards() {
  const StoryMap = StoryData.map(e => {
    return <Story titleStory={e.name} imgStory={e.img} description={e.description} link={e.link} />

  })
  return (
    <>
    {StoryMap}
    </>
    )
  
}

export default Story_Cards