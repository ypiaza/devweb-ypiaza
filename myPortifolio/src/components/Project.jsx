import React from 'react'

const Project = (props) => {
  return (
    <div className='flex items-center justify-center'>
        <h3><a className='font-semibold' href={props.link} target='_blank'>{props.title}</a></h3>
    </div>
  )
}

export default Project