import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import netflixImg from '../public/assets/projects/streamflix.png';
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
          src={netflixImg} 
          alt="/"
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Flix Streamer</h2>
          <h3>Next.js / Node.js / React.js / Firebase / Firestore / Tailwind.css / TMDB API</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p className='text-[#294072]'>Project</p>
          <h2>Overview</h2>
          <p>This project was a tutorial for implementing Next.js and Firebase. Firebase authentication was used to allow a user to sign in or register an account. Firestore was used to store the user`&apos;`s information and saved movies.</p>
          <br />
          <p>Flix Streamer is designed to be a Netflix clone and look as similar to Netflix as possible. As of 7/19/2022 I have had to take down the hosted site from firebase hosting because it claims it is a `&quot;`too similar.`&quot;` Objective complete? An appeal has been requested since it is only for educational purposes.</p>
          <a 
            href="https://netflix-clone-c595d.firebaseapp.com/"
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
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1'/>TMDB (The Movie DB) API
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