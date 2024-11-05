import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosDocument } from "react-icons/io";
import BtnContact from './BtnContact';



const Social = () => {
    return (
        <div className='grid grid-cols-4 lg:grid-cols-1 w-full  text-white/40'>
            <div className='flex items-center justify-center bg-gray-900/50 border border-white/10 cursor-pointer hover:bg-blue-600/20 duration-500 hover:border-white/30 hover:scale-95 hover:text-white'>
                <FaGithub className=' text-4xl' />
            </div>
            <div className='flex items-center justify-center bg-gray-900/50 border border-white/10 cursor-pointer hover:bg-blue-600/20 duration-500 hover:border-white/30 hover:scale-95 hover:text-white'>
                <FaLinkedin className=' text-4xl' />
            </div>
            <div className='flex items-center justify-center bg-gray-900/50 border border-white/10 cursor-pointer hover:bg-blue-600/20 duration-500 hover:border-white/30 hover:scale-95 hover:text-white'>
                <IoIosDocument className=' text-4xl' />
            </div>
            <div className='flex items-center justify-center bg-gray-900/50 border border-white/10 cursor-pointer hover:bg-blue-600/20 duration-500 hover:border-white/30 hover:scale-95 hover:text-white'>
                <BtnContact />
            </div>
        </div>
    )
}

export default Social