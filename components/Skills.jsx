import React from 'react';
import Image from 'next/image';

const Skills = () => {
  return (
    <div id="skills" className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest uppercase text-[#294072]'>Skills</p>
            <h2 className='py-4'>What I Can Do</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src="/../public/assets/skills/html5.png" alt="html icon" width="64" height="64"/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>HTML</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src="/../public/assets/skills/css3.png" alt="css3 icon" width="64" height="64"/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>CSS</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src="/../public/assets/skills/javascript.png" alt="javascript icon" width="64" height="64"/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Javascript</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src="/../public/assets/skills/bootstrap.png" alt="bootstrap icon" width="64" height="64"/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Bootstrap</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src="/../public/assets/skills/react.png" alt="react icon" width="64" height="64"/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>React.js</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src="/../public/assets/skills/mysql.png" alt="mysql icon" width="64" height="64"/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>MySQL</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src="/../public/assets/skills/node-js.png" alt="node-js icon" width="64" height="64"/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Node.js</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src="/../public/assets/skills/nextjs.png" alt="nextjs icon" width="64" height="64"/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Next.js</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src="/../public/assets/skills/php.png" alt="php icon" width="64" height="64"/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>PHP</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src="/../public/assets/skills/github.png" alt="Github icon" width="64" height="64"/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Github</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src="/../public/assets/skills/csharp.png" alt="csharp icon" width="64" height="64"/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>C#</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src="/../public/assets/skills/mongo.png" alt="mongo icon" width="64" height="64"/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>MongoDB</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src="/../public/assets/skills/tailwind.png" alt="tailwind icon" width="64" height="64"/>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Tailwind</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills