import Image from 'next/dist/client/image'; // Nextjs Image Component
import Link from 'next/link';
import React from 'react'; // Use for empty tag or React Fragment
import { BsGithub } from 'react-icons/bs'; // Github icon from React icons
import Fade from 'react-reveal/Fade';
import { Reveal } from 'react-reveal';

// Project data
const projectData = [
  {
    id: 1,
    title: 'Social Media Dashboard',
    github: 'https://github.com/hsihak/Social-media-dashboard',
    live: 'https://hsihak-social-media-dashboard.netlify.app/',
    description: 'Social Media Dashboard aspired by Frontend Mentor Challenge',
    tools: ['JS', 'Tailwind'],
    img: '/social-media-dashboard.png',
    alt: 'social media project',
  },
  {
    id: 2,
    title: 'Personal Website',
    github: 'https://github.com/hsihak/Personal-Website',
    live: 'https://personal-website-hsihak.vercel.app/',
    description: 'Welcome to my website',
    tools: ['JS', 'NextJS', 'Tailwind', 'Headless UI'],
    img: '/personal-website.png',
    alt: 'personal website',
  },
  {
    id: 3,
    title: 'Future projects',
    github: 'https://github.com/hsihak',
    live: 'https://github.com/hsihak',
    description: 'Coming soon',
    tools: ['JS', 'NextJS', 'Tailwind', 'Headless UI'],
    img: '/coming-soon.jpg',
    alt: 'future projects',
  },
];

const Projects = () => {
  return (
    <main
      id='projects'
      className='min-h-screen bg-slate-100 dark:bg-gray-900 animate-fade-in-down py-10'>
      <div className='w-5/6 mx-auto '>
        <div className='flex justify-center flex-col items-center px-6 py-10'>
          <Fade bottom cascade>
            <h1 className=' pb-4 text-3xl md:text-5xl'>Projects</h1>
          </Fade>
          <hr className='w-1/2 border-violet-300 md:w-1/6 border-t-2' />
        </div>
        <div className='grid grid-flow-row gap-6 md:grid-cols-2 lg:grid-cols-3'>
          <Fade bottom duration={3000}>
            {projectData.map(project => {
              return (
                <Fade key={project.id} bottom cascade>
                  <div className='overflow-hidden transition duration-500 bg-white border-2 rounded-lg cursor-pointer dark:text-white dark:hover:text-white dark:bg-violet-400 dark:hover:bg-violet-500 border-violet-500 hover:text-white hover:bg-violet-500'>
                    <Link href={project.live}>
                      <a
                        className='overflow-hidden hover:duration-500'
                        target={'_blank'}>
                        <Image
                          src={project.img}
                          layout={'responsive'}
                          width={100}
                          height={50}
                          priority={true}
                          alt={project.alt}
                        />
                      </a>
                    </Link>
                    <div className='grid gap-4 p-4'>
                      <div className='grid gap-4'>
                        <h3 className='font-semibold md:text-lg'>
                          {project.title}
                        </h3>
                        <p className='text-sm'>{project.description}</p>
                      </div>
                      <div className='flex items-center gap-6 font-semibold'>
                        <Link href={project.live}>
                          <a target={'_blank'}>Explore demo</a>
                        </Link>
                        <Link href={project.github}>
                          <a
                            className='flex items-center justify-center gap-2'
                            target={'_blank'}>
                            View code
                            <BsGithub />
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Fade>
              );
            })}
          </Fade>
        </div>
      </div>
    </main>
  );
};

export default Projects;
