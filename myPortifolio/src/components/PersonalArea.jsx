import React from 'react'
import CardApresentation from './CardApresentation'
import Skills from './Skills'

const PersonalArea = () => {
  return (
    <div className='grid grid-rows-[80%,20%] h-full'>
        <CardApresentation />
        <Skills />
    </div>
  )
}

export default PersonalArea