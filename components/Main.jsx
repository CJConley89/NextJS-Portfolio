import React from 'react';
import {AiOutlineMail} from 'react-icons/ai';
import {FaLinkedinIn, FaGithub} from 'react-icons/fa';
import {BsFillPersonLinesFill} from 'react-icons/bs';

const Main = () => {
  return (
    <div id="home" className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest'>
                    LET&rsquo;S BUILD SOMETHING TOGETHER
                </p>
                <h1 className='py-4 text-gray-700'>
                    Hi, I&rsquo;m <span className='text-[#294072]'>Chris</span>
                </h1>
                <h1 className='py-2 text-gray-700'>
                    A Full-Stack Web Developer
                </h1>
                <p className='py-4 text-gray-600 max-w[70%] m-auto'>
                    I&rsquo;m a full-stack web developer who puts the focus on clean, minimalist, and object-oriented code. I have experience setting up database schemas and virtual web servers as well as creating the front end pages our end users utilize to complete their daily tasks.
                </p>
                
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                <a href="https://www.linkedin.com/in/christopher-conley-935b9b242" target="_blank" rel='noopener noreferrer'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaLinkedinIn />
                    </div>
                </a>
                <a href='https://github.com/ChristopherJConley' target="_blank" rel='noopener noreferrer'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaGithub />
                    </div>
                </a>
                <a href="mailto:conley.christopher@hotmail.com" target='_blank' rel="noopener noreferrer">
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiOutlineMail />
                    </div>
                </a>
                <a href='https://my.indeed.com/p/christopherc-cbr3lsj' target="_blank" rel='noopener noreferrer'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <BsFillPersonLinesFill />
                    </div>
                </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main