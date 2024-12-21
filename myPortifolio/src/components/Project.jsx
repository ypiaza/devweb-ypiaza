import React from 'react'

const Project = (props) => {
  return (
    <div className='flex items-center justify-center bg-blue-900/50 backdrop-blur-sm h-full w-full hover:bg-transparent hover:backdrop-blur-none duration-300'>
        <h3><a className='font-semibold' href={props.link} target='_blank'>{props.title}</a></h3>
    </div>
  )
}

export default Project