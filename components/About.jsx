import React from 'react';
import Image from 'next/image';
import me from "/public/assets/me.jpg";

const About = () => {
  return (
    <div id="about" className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#294072]'>About</p>
                <h2 className='py-4'>Who I Am</h2>
                <p className='py-2 text-gray-600'>A Passion for Learning and Troubleshooting</p>
                <p className='py-2 text-gray-600'><span className='font-bold'>Experience 5+ Years</span> - I have been working in the web development field since 2017.</p>
                <p className='py-2 text-gray-600'><span className='font-bold'>Clients 2 Global Organizations</span> - I have worked for 2 large clients that both serve world-wide markets.</p>
                <p className='py-2 text-gray-600'><span className='font-bold'>Projects 25+ Projects</span> - I have completed and continued support for over 25 projects.</p>
                <p className='py-2 text-gray-600'>
                  Currently I am a federal contractor working for ECS Federal on their contract with USPS has given me experience with working on a multitude of applications. These applications range in scope and complexity from small maintenance apps for our data scientists to our international scale applications that help to keep the Postal Service running. I have a desire to learn new technologies and to determine if they are applicable for my current organization.
                </p>
                
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <Image className="rounded-xl" src={me} alt="picture of me and my cat Church" width="500" height="600"/>
            </div>
        </div>
    </div>
  )
}

export default About