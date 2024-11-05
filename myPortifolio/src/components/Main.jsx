import React from 'react'
import PersonalArea from './PersonalArea'
import ServicesArea from './ServicesArea'


const Main = () => {
  

  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 h-[100%] lg:h-[87%]'>
        <PersonalArea />
        <ServicesArea />
    </div>
  )
}

export default Main