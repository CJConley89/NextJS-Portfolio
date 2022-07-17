import React from 'react'
import img1 from '../public/assets/projects/portfolio4.jpg';
import img2 from '../public/assets/projects/portfolio2.jpg';
import img3 from '../public/assets/projects/portfolio3.jpg';
import WorkItem from '../components/WorkItem';

const Work = () => {
  return (
    <div id="work" className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#294072]'>Work Experience</p>
            <h2 className='py-4'>What I&rsquo;ve Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>
                <WorkItem title='Critical Spare Parts Application' backgroundImg={img1} projectUrl="/csp" languages="HTML, CSS, JS, PHP, PL/SQL"/>
                <WorkItem title='Employee Resource Center' backgroundImg={img2} projectUrl="/erc" languages="HTML, CSS, JS, PHP, MySQL" />
                <WorkItem title='Conference Department Portal' backgroundImg={img3} projectUrl="/conference" languages="HTML, CSS, JS, PHP, MySQL"/>
            </div>
        </div>
    </div>
  )
}

export default Work