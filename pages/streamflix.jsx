import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import esriImg from '../public/assets/projects/ArcGIS_API_Testing.PNG'
import {RiRadioButtonFill} from 'react-icons/ri';

const esri = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[50vh] bg-black/70 z-10' />
        <Image 
          className='absolute z-1' 
          layout="fill" 
          objectFit='cover' 
          src={esriImg} 
          alt="/"
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>ArcGIS API Testing</h2>
          <h3>HTML / CSS / JS / ArcGIS API</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p className='text-[#294072]'>Project</p>
          <h2>Overview</h2>
          <p>Showcasing the ArcGIS API to create a map and perform spatial analysis on the geography of the land. This tests adding a point, line, and polygon to the ArcGIS basemap layer and utilizes the Buffer, Intersect, and Union geometry functions. Buffer is used to create a buffer area around the point by a given amount or to a given distance. Intersect then takes the polygon and sees where it will intersect with the buffer and line. Union combines all of the three into one entity allowing the user to create one area. From this point further diving into the API could be done to calculate area, distance, etc. of the selected region of the map.</p>
          <a 
            href="https://christopherjconley.com/Side_Projects/ArcGIS.html"
            target="_blank"
            rel="noreferrer"
          >
            <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
          </a>
          <a 
            href="https://github.com/ChristopherJConley/react-portfolio-website/blob/master/src/Projects/ArcGIS.html"
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
                <RiRadioButtonFill className='pr-1'/>Firebase
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1'/>Firestore
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1'/>Tailwind.css
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

export default esri