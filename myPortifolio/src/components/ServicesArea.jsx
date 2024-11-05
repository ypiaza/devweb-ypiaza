import React from 'react'
import Project from './Project'
import Social from './Social';


const ServicesArea = () => {
    const projects = [
        { title: 'To do List', link: 'https://ypiaza.github.io/To-Do-List/' },
        { title: 'Project 2', link: 'https://ypiaza.github.io/To-Do-List/' },
        { title: 'Project 3', link: 'https://ypiaza.github.io/To-Do-List/' },
    ];

    return (

        <div className='grid grid-cols-1 lg:grid-cols-3 text-white/50'>

            <div className='flex items-center justify-center bg-gray-900/50 border border-white/10 cursor-pointer hover:bg-blue-600/20 duration-500 hover:border-white/30 hover:scale-95 hover:text-white'>

                <Project title={projects[0].title} link={projects[0].link} />

            </div>

            <div className='grid grid-cols-1'>
                <div className='flex items-center justify-center bg-gray-900/50 border border-white/10 cursor-pointer hover:bg-blue-600/20 duration-500 hover:border-white/30 hover:scale-95 hover:text-white'>

                    <Project title={projects[1].title} link={projects[1].link} />

                </div>
                
                <div className='flex items-center justify-center bg-gray-900/50 border border-white/10 cursor-pointer hover:bg-blue-600/20 duration-500 hover:border-white/30 hover:scale-95 hover:text-white'>

                    <Project title={projects[2].title} link={projects[2].link} />
                </div>
            </div>

            <Social />
        </div>
    )
}

export default ServicesArea