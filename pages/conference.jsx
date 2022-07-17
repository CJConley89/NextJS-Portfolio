import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import img4 from '../public/assets/projects/portfolio4.jpg'
import {RiRadioButtonFill} from 'react-icons/ri';

const conference = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[50vh] bg-black/70 z-10' />
        <Image 
          className='absolute z-1' 
          layout="fill" 
          objectFit='cover' 
          src={img4} 
          alt="/"
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Conference Department Portal</h2>
          <h3>HTML / CSS / JS / PHP / MySQL</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p className='text-[#294072]'>Project</p>
          <h2>Overview</h2>
          <p>This was another internal resource project. The Conference Department Portal was a solo project that was a new creation to replace their paper record keeping setup at the time. Setup a LAMP stack from scratch on new hardware, created digital version of all forms and documents required for the department using HTML, CSS, PHP, JS, jQuery, AJAX, JS, MySQL, and the Bootstrap 3 framework. This application also implemented the MVC framework, CodeIgniter.</p>
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
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1'/>CodeIgniter
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

export default conference