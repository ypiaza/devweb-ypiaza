import React from 'react'

import { FaReact, FaHtml5, FaCss3, FaGitAlt, FaGithub } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript, SiJavascript } from "react-icons/si";


const Skills = () => {
  return (
    <div className='grid grid-cols-8 text-white/40'>
      <div className = 'flex items-center justify-center  border border-white/10 cursor-pointer bg-[#E44D26]/60 duration-500 hover:border-white/30 hover:scale-95 hover:text-white hover:shadow-2xl hover:shadow-[#E44D26]'>
        <FaHtml5 className=' text-4xl' />
      </div>
      <div className = 'flex items-center justify-center  border border-white/10 cursor-pointer bg-[#1572B6]/60 duration-500 hover:border-white/30 hover:scale-95 hover:text-white hover:shadow-2xl hover:shadow-[#1572B6]'>
        <FaCss3 className=' text-4xl' />
      </div>
      <div className = 'flex items-center justify-center  border border-white/10 cursor-pointer bg-[#F7DF1E]/60 duration-500 hover:border-white/30 hover:scale-95 hover:text-white hover:shadow-2xl hover:shadow-[#F7DF1E]'>
        <SiJavascript className=' text-4xl' />
      </div>
      <div className = 'flex items-center justify-center  border border-white/10 cursor-pointer bg-[#F1502F]/60 duration-500 hover:border-white/30 hover:scale-95 hover:text-white hover:shadow-2xl hover:shadow-[#F1502F]'>
        <FaGitAlt className=' text-4xl' />
      </div>
      <div className = 'flex items-center justify-center  border border-white/10 cursor-pointer bg-[#6E7681]/60 duration-500 hover:border-white/30 hover:scale-95 hover:text-white hover:shadow-2xl hover:shadow-[#6E7681]'>
        <FaGithub className=' text-4xl' />
      </div>
      <div className = 'flex items-center justify-center  border border-white/10 cursor-pointer bg-[#61DAFB]/60 duration-500 hover:border-white/30 hover:scale-95 hover:text-white hover:shadow-2xl hover:shadow-[#61DAFB]'>
        <FaReact className=' text-4xl' />
      </div>
      <div className = 'flex items-center justify-center  border border-white/10 cursor-pointer bg-[#38B2AC]/60 duration-500 hover:border-white/30 hover:scale-95 hover:text-white hover:shadow-2xl hover:shadow-[#38B2AC]'>
        <RiTailwindCssFill className=' text-4xl' />
      </div>
      <div className = 'flex items-center justify-center  border border-white/10 cursor-pointer bg-[#3178C6]/60 duration-500 hover:border-white/30 hover:scale-95 hover:text-white hover:shadow-2xl hover:shadow-[#3178C6]'>
      <SiTypescript className=' text-4xl' />
      </div>
    </div>
  )
}

export default Skills