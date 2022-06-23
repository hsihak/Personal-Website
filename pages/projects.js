import Image from 'next/dist/client/image';
import React from 'react';

const projectData = [
  {
    id: 1,
    title: 'Personal Website',
    github: 'https://github.com/hsihak/Personal-Website',
    live: 'https://personal-website-hsihak.vercel.app/',
    description: 'Welcome to my website',
    tools: ['JS', 'NextJS', 'Tailwind', 'Headless UI'],
    img: '../public/assets/project.png',
  },
  {
    id: 2,
    title: 'Personal Website',
    github: 'https://github.com/hsihak/Personal-Website',
    live: 'https://personal-website-hsihak.vercel.app/',
    description: 'Welcome to my website',
    tools: ['JS', 'NextJS', 'Tailwind', 'Headless UI'],
    img: '../public/assets/project.png',
  },
  {
    id: 3,
    title: 'Personal Website',
    github: 'https://github.com/hsihak/Personal-Website',
    live: 'https://personal-website-hsihak.vercel.app/',
    description: 'Welcome to my website',
    tools: ['JS', 'NextJS', 'Tailwind', 'Headless UI'],
    img: '../public/assets/project.png',
  },
  {
    id: 4,
    title: 'Personal Website',
    github: 'https://github.com/hsihak/Personal-Website',
    live: 'https://personal-website-hsihak.vercel.app/',
    description: 'Welcome to my website',
    tools: ['JS', 'NextJS', 'Tailwind', 'Headless UI'],
    img: '../public/assets/project.png',
  },
  {
    id: 5,
    title: 'Personal Website',
    github: 'https://github.com/hsihak/Personal-Website',
    live: 'https://personal-website-hsihak.vercel.app/',
    description: 'Welcome to my website',
    tools: ['JS', 'NextJS', 'Tailwind', 'Headless UI'],
    img: '../public/assets/project.png',
  },
  {
    id: 6,
    title: 'Personal Website',
    github: 'https://github.com/hsihak/Personal-Website',
    live: 'https://personal-website-hsihak.vercel.app/',
    description: 'Welcome to my website',
    tools: ['JS', 'NextJS', 'Tailwind', 'Headless UI'],
    img: '../public/assets/project.png',
  },
];

const Projects = () => {
  return (
    <div className='min-h-screen pt-20 bg-slate-100 dark:bg-gray-900 animate-fade-in-down '>
      <div className='w-5/6 mx-auto lg:w-1/3'>
        <h1 className='py-10 text-4xl '>Projects</h1>
        <div className='grid gap-2 animate-fade-in-up'>
          {projectData.map(project => {
            return (
              <React.Fragment key={project.id}>
                <div className='relative '>
                  <div className='absolute inset-x-0 bottom-0 z-20 grid justify-center w-full max-h-full gap-3 overflow-hidden text-center opacity-70 hover:opacity-95 bg-slate-300 dark:text-black hover:h-1/2 hover:transition-all hover:duration-500'>
                    <h3 className='font-semibold md:text-2xl'>
                      {project.title}
                    </h3>
                    <div>
                      <h4 className='font-semibold '>Description</h4>
                      <p>{project.description}</p>
                    </div>
                    <div>
                      <h4 className='font-semibold '>Languages/Frameworks</h4>
                      <div className='flex gap-2 p-2'>
                        {project.tools.map((tool, index) => {
                          return <div key={index}>{tool}</div>;
                        })}
                      </div>
                    </div>
                  </div>
                  <div className='opacity-100 hover:opacity-80 rounded-xl'>
                    <Image
                      src={`/${project.img}`}
                      layout={'responsive'}
                      width={300}
                      height={200}
                      priority={true}
                      alt={project.title}
                    />
                  </div>
                </div>
                <div className='flex justify-center gap-4 pb-10'>
                  <button className='p-2 text-white transition duration-500 border-2 rounded-full bg-violet-500 hover:text-violet-500 hover:bg-white hover:border-violet-500'>
                    Live Demo
                  </button>
                  <button className='p-2 text-white transition duration-500 border-2 rounded-full bg-violet-500 hover:text-violet-500 hover:bg-white hover:border-violet-500'>
                    Github
                  </button>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
