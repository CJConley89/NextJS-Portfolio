import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import img3 from '../public/assets/projects/portfolio3.jpg'
import {RiRadioButtonFill} from 'react-icons/ri';

const csp = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[50vh] bg-black/70 z-10' />
        <Image 
          className='absolute z-1' 
          layout="fill" 
          objectFit='cover' 
          src={img3} 
          alt="/"
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Internal Employee Resource Center</h2>
          <h3>HTML / CSS / JS / PHP / MySQL</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p className='text-[#294072]'>Project</p>
          <h2>Overview</h2>
          <p>Completely overhauled the in-place system with a responsive portal that utilized Bootstrap 4. The original system was a system of simple HTML pages that displaced help articles, troubleshooting steps, etc. for the support staff. Rewrote the majority of this information in a C.R.U.D. application style so that one front end could populate any article once it was entered into the database. Also streamlined many php functions and SQL tables on to make them more efficient and allow more pertinent data to be stored and displayed.</p>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1'/>HTML
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1'/>CSS
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1'/>Javascript
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1'/>PHP
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1'/>MySQL
              </p>
            </div>
          </div>
        </div>
        <Link href="/#work">
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  )
}

export default csp