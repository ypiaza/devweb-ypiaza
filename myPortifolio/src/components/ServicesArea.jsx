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

        <div className='grid grid-cols-2 text-white/70'>

            <div className='flex items-center justify-center bg-[url("./assets/todolist.png")] bg-center bg-cover bg-no-repeat cursor-pointer duration-200 hover:border-white/70 hover:scale-95 hover:text-gray-900/60 hover:shadow-2xl hover:shadow-white/50' >

                <Project title={projects[0].title} link={projects[0].link} />

            </div>

            <div className='flex items-center justify-center bg-gray-900/50 border border-white/10 cursor-pointer hover:bg-blue-600/20 duration-500 hover:border-white/30 hover:scale-95 hover:text-white'>

                <Project title={projects[1].title} link={projects[1].link} />

            </div>
                
            <div className='flex items-center justify-center bg-gray-900/50 border border-white/10 cursor-pointer hover:bg-blue-600/20 duration-500 hover:border-white/30 hover:scale-95 hover:text-white'>

                <Project title={projects[2].title} link={projects[2].link} />
            </div>
            
            <Social />
        </div>
    )
}

export default ServicesArea