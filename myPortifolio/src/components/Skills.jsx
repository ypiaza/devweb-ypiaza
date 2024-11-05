import React from 'react'

import { FaReact, FaHtml5, FaCss3, FaGitAlt, FaGithub } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript, SiJavascript } from "react-icons/si";


const Skills = () => {
  return (
    <div className='grid grid-cols-4 lg:grid-cols-2 text-white/40'>
      <div className = 'flex items-center justify-center bg-gray-900/50 border border-white/10 cursor-pointer hover:bg-blue-600/20 duration-500 hover:border-white/30 hover:scale-95 hover:text-white'>
        <FaHtml5 className=' text-4xl' />
      </div>
      <div className = 'flex items-center justify-center bg-gray-900/50 border border-white/10 cursor-pointer hover:bg-blue-600/20 duration-500 hover:border-white/30 hover:scale-95 hover:text-white'>
        <FaCss3 className=' text-4xl' />
      </div>
      <div className = 'flex items-center justify-center bg-gray-900/50 border border-white/10 cursor-pointer hover:bg-blue-600/20 duration-500 hover:border-white/30 hover:scale-95 hover:text-white'>
        <SiJavascript className=' text-4xl' />
      </div>
      <div className = 'flex items-center justify-center bg-gray-900/50 border border-white/10 cursor-pointer hover:bg-blue-600/20 duration-500 hover:border-white/30 hover:scale-95 hover:text-white'>
        <FaGitAlt className=' text-4xl' />
      </div>
      <div className = 'flex items-center justify-center bg-gray-900/50 border border-white/10 cursor-pointer hover:bg-blue-600/20 duration-500 hover:border-white/30 hover:scale-95 hover:text-white'>
        <FaGithub className=' text-4xl' />
      </div>
      <div className = 'flex items-center justify-center bg-gray-900/50 border border-white/10 cursor-pointer hover:bg-blue-600/20 duration-500 hover:border-white/30 hover:scale-95 hover:text-white'>
        <FaReact className=' text-4xl' />
      </div>
      <div className = 'flex items-center justify-center bg-gray-900/50 border border-white/10 cursor-pointer hover:bg-blue-600/20 duration-500 hover:border-white/30 hover:scale-95 hover:text-white'>
        <RiTailwindCssFill className=' text-4xl' />
      </div>
      <div className = 'flex items-center justify-center bg-gray-900/50 border border-white/10 cursor-pointer hover:bg-blue-600/20 duration-500 hover:border-white/30 hover:scale-95 hover:text-white'>
      <SiTypescript className=' text-4xl' />
      </div>
    </div>
  )
}

export default Skills