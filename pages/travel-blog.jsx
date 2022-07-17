import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import travelBlogImg from '../public/assets/projects/travel-blog.PNG'
import {RiRadioButtonFill} from 'react-icons/ri';

const travel_blog = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[50vh] bg-black/70 z-10' />
        <Image 
          className='absolute z-1' 
          layout="fill" 
          objectFit='cover' 
          src={travelBlogImg} 
          alt="/"
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>ArcGIS API Testing</h2>
          <h3>Next.js / Node.js / React.js / Sanity.IO / MongoDB</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p className='text-[#294072]'>Project</p>
          <h2>Overview</h2>
          <p>Created Blog using Sanity.IO for backend and used Node.js and Next.js for the front end. Built off of a tutorial from Code with Ania Kubów on YouTube.</p>
          <a 
            href="https://travel-blog-tutorial.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
          </a>
          <a 
            href="https://github.com/ChristopherJConley/travel-blog-frontend"
            target="_blank"
            rel="noreferrer"
          >
            <button className='px-8 py-2 mt-4'>Code</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1'/>Next.js
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1'/>Node.js
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1'/>React.js
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1'/>Sanity.IO
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1'/>MongoDB
              </p>
            </div>
          </div>
        </div>
        <Link href="/#project">
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  )
}

export default travel_blog