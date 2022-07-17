import React, {useState, useEffect} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {AiOutlineClose, AiOutlineMenu, AiOutlineMail} from 'react-icons/ai';
import {FaLinkedinIn, FaGithub} from 'react-icons/fa';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import {useRouter} from 'next/router';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);
    const [navBg, setNavBg] = useState('#ecf0f3');
    const [linkColor, setLinkColor] = useState('#1f2937');
    const router = useRouter();

    useEffect(() => {
        if(
            router.asPath === '/csp' ||
            router.asPath === '/erc' ||
            router.asPath === '/esri' ||
            router.asPath === '/travel-blog' ||
            router.asPath === '/conference'
        ) {
            setNavBg('transparent');
            setLinkColor('#ecf0f3');
        } else {
            setNavBg('#ecf0f3');
            setLinkColor('#1f2937');
        }
    }, [router]);

    const handleNav = () => {
        setNav(!nav)
    }

    useEffect(()=> {
        const handleShadow = () => {
            if(window.scrollY >= 90){
                setShadow(true);
            } else {
                setShadow(false);
            }
        }
        window.addEventListener('scroll', handleShadow);
    }, []);

    return(
        <div style={{backgroundColor: `${navBg}`}} className={shadow ? 'fixed w-full h-20 shadow-xl z-[100]' : 'fixed w-full h-20 z-[100]'}>
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                <Link href="/#home">
                    <Image src="/../public/assets/logo.png" alt="/" width='80' height='80'/>
                </Link>
                <div>
                    <ul style={{color: `${linkColor}`}} className='hidden md:flex'>
                        <Link href="/#home">
                            <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
                        </Link>
                        <Link href="/#about">
                            <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
                        </Link>
                        <Link href="/#skills">
                            <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
                        </Link>
                        <Link href="/#work">
                            <li className='ml-10 text-sm uppercase hover:border-b'>Work</li>
                        </Link>
                        <Link href="/#project">
                            <li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>
                        </Link>
                        <Link href="/#contact">
                            <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
                        </Link>
                    </ul>
                    <div onClick={handleNav} className='md:hidden'>
                        <AiOutlineMenu size={25}/>
                    </div>
                </div>
            </div>
            <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
                <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500' 
                                    : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
                    <div>
                        <div className='flex w-full items-center justify-between'>
                            <Link href="/#home">
                                <Image src="/../public/assets/logo.png" alt="/" width="60" height="60"/>
                            </Link>
                            <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                                <AiOutlineClose />
                            </div>
                        </div>
                        <div className='border-b border-gray-300 my-4'>
                            <p className='w-[85%] md:w-[90%] py-4'>Let&rsquo;s build something legendary together</p>
                        </div>
                    </div>
                    <div className='py-4 flex flex-col'>
                        <ul className='uppercase'>
                            <Link href="/#home">
                                <li onClick={()=> setNav(false)} className='py-4 text-sm'>Home</li>
                            </Link>
                            <Link href="/#about">
                                <li onClick={()=> setNav(false)} className='py-4 text-sm'>About</li>
                            </Link>
                            <Link href="/#skills">
                                <li onClick={()=> setNav(false)} className='py-4 text-sm'>Skills</li>
                            </Link>
                            <Link href="/#work">
                                <li onClick={()=> setNav(false)} className='py-4 text-sm'>Work</li>
                            </Link>
                            <Link href="/#project">
                                <li onClick={()=> setNav(false)} className='py-4 text-sm'>Projects</li>
                            </Link>
                            <Link href="/#contact">
                                <li onClick={()=> setNav(false)} className='py-4 text-sm'>Contact</li>
                            </Link>
                        </ul>
                        <div className='pt-40'>
                            <p className='uppercase tracking-widest text-[#294072]'>Let&rsquo;s Connect</p>
                            <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                            <a href="https://www.linkedin.com/in/christopher-conley-935b9b242" target="_blank" rel='noopener noreferrer'>
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300'>
                                        <FaLinkedinIn />
                                    </div>
                                </a>
                                <a href='https://github.com/ChristopherJConley' target="_blank" rel='noopener noreferrer'>
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300'>
                                        <FaGithub />
                                    </div>
                                </a>
                                <a href="mailto:conley.christopher@hotmail.com" target='_blank' rel="noopener noreferrer">
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300'>
                                        <AiOutlineMail />
                                    </div>
                                </a>
                                <a href='https://my.indeed.com/p/christopherc-cbr3lsj' target="_blank" rel='noopener noreferrer'>
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300'>
                                        <BsFillPersonLinesFill />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;