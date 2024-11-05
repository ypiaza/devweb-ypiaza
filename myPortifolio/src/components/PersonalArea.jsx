import React from 'react'
import CardApresentation from './CardApresentation'
import Skills from './Skills'

const PersonalArea = () => {
  return (
    <div className='grid grid-cols-2'>
        <CardApresentation />
        <Skills />
    </div>
  )
}

export default PersonalArea