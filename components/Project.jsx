import React from 'react'
import esriImg from '../public/assets/projects/ArcGIS_API_Testing.PNG';
import travelImg from '../public/assets/projects/travel-blog.png';
import ProjectItem from '../components/ProjectItem';

const Project = () => {
  return (
    <div id="project" className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#294072]'>Personal Projects</p>
            <h2 className='py-4'>What I&rsquo;ve Built In My Free Time</h2>
            <div className='grid md:grid-cols-2 gap-8'>
                <ProjectItem 
                    title='ArcGIS API Testing' 
                    backgroundImg={esriImg} 
                    projectUrl="/esri" 
                    languages="HTML, CSS, JS, ArcGIS API"
                />
                <ProjectItem 
                    title='MERN Stack Travel Blog' 
                    backgroundImg={travelImg} 
                    projectUrl="/travel-blog" 
                    languages="Next.js, Node.js, React.js, Sanity.IO, MongoDB" 
                />
            </div>
        </div>
    </div>
  )
}

export default Project