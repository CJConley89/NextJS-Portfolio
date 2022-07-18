import React, {useRef} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {AiOutlineMail} from 'react-icons/ai';
import {FaLinkedinIn, FaGithub} from 'react-icons/fa';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import {HiOutlineChevronDoubleUp} from 'react-icons/hi';
import emailjs from '@emailjs/browser';
import contactImg from "/../public/assets/projects/portfolio1.jpg";

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_ov24c6o', 'template_aiwb60o', form.current, 'rBszRBDl1V0ex9ZMa')
        e.target.reset();
      };

  return (
    <div id="contact" className='w-full lg:h-screen'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
            <p className='text-xl tracking-widest uppercase text-[#294072]'>Contact</p>
            <h2 className='py4'>Get In Touch</h2>
            <div className='grid lg:grid-cols-5 gap-8'>
                {/* left */}
                <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='lg:p-4 h-full'>
                        <div>
                            <Image className='rounded-xl hover:scale-105 ease-in duration-300' src={contactImg} alt="/" width="400" height="500"/>
                        </div>
                        <div>
                            <h2 className='py-2'>Christopher J Conley</h2>
                            <p className='py-4'>I am available for full-time positions. Contact me and let&rsquo;s talk.</p>
                        </div>
                        <div>
                            <p className='uppercase pt-8'>Connect With Me</p>
                            <div className='flex items-center justify-between py-4'>
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
                {/* right */}
                <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                    <div className='p-4'>
                        <form ref={form} onSubmit={sendEmail}>
                            <div className='grid md:grid-cols-2 gap-4 w-full py-4'>
                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2'>Name</label>
                                    <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" />
                                </div>
                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2'>Phone Number</label>
                                    <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" />
                                </div>
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Email</label>
                                <input className="border-2 rounded-lg p-3 flex border-gray-300" type="email" />
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Subject</label>
                                <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" />
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Message</label>
                                <textarea className='border-2 rounded-lg p-3 border-gray-300' rows="10"></textarea>
                            </div>
                            <button className='w-full p-4 text-gray-100 mt-4'>Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className='flex justify-center py-12'>
                <Link href="/">
                    <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <HiOutlineChevronDoubleUp size={30} className="m-auto text-[#294072]"/>
                    </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Contact