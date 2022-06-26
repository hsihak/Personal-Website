import Image from 'next/image'; // Nextjs Image Component
import avatar from '/public/Avatar.jpg'; // Profile Photo for the About Section
import Social from '../components/Social'; // Social Icons Component

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiSass,
  SiTailwindcss,
  SiReact,
} from 'react-icons/si'; // Social icons from React icons

// About Section
const About = () => {
  return (
    <>
      <div
        className='flex items-center justify-center animate-fade-in-down '
        id='about'>
        <div className='flex flex-col items-center justify-center w-11/12 px-6 py-10 rounded-md h-4/6 md:w-3/5 md:h-4/6'>
          <h1 className='pb-4 text-3xl md:text-5xl font-base'>About Me</h1>
          <hr className='w-1/2 border-b border-violet-300 md:w-1/4' />
          <div className='flex flex-row '>
            <div className='flex flex-col gap-8 pt-4 md:gap-20 md:flex-row'>
              <div className='flex flex-col items-center gap-4'>
                <Image
                  alt='Profile Photo'
                  src={avatar}
                  quality={100}
                  objectFit={'contain'}
                  width={200}
                  height={300}
                  placeholder={'blur'}
                />
                <Social />
              </div>
              <div className='flex flex-col gap-2 pt-2 '>
                <h2 className='text-xl text-center md:text-left animate-fade-in-up'>
                  Hangsihak Sin
                </h2>
                <p className=' animate-fade-in-up dark:font-light dark:text-gray-300'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorum nisi, error molestiae sed adipisci dicta delectus
                  ipsam, aut dignissimos ducimus vel voluptatum debitis vero
                  explicabo, assumenda expedita quia culpa non cum officia illo.
                  Saepe eaque tempora voluptatum laboriosam commodi. Voluptas
                  minima enim optio inventore velit iusto, sit amet quasi atque
                  molestiae repellat dolor alias aliquam cupiditate incidunt
                  repellendus officiis labore vitae esse doloribus fugit fuga
                  corporis eveniet deserunt? Impedit similique accusantium
                  beatae porro? Quibusdam est numquam ut ex sunt quas, dicta
                  dolores cumque ratione sed dignissimos ab. Quod id dolor vel
                  iusto ipsa dolorum. Enim sed possimus beatae aut, voluptatibus
                  laborum laudantium suscipit dolore repellat rerum quia. Magni
                  distinctio corrupti similique quod unde illum adipisci tempora
                  assumenda officiis suscipit. Ad quod error mollitia et illum.
                </p>
                <div className='flex flex-col md:flex-row md:justify-around md:gap-4'>
                  <div className='grid gap-2 py-4 skills '>
                    <h3 className='text-2xl font-semibold text-center '>
                      Skills
                    </h3>
                    <div className='flex justify-center gap-4 text-3xl animate-fade-in-up '>
                      <div className='flex flex-col items-center justify-center gap-2'>
                        <SiHtml5 className=' hover:fill-orange-500' />
                        <p className='text-base '>HTML</p>
                      </div>
                      <div className='flex flex-col items-center justify-center gap-2'>
                        <SiCss3 className=' hover:fill-blue-600' />
                        <p className='text-base '>CSS</p>
                      </div>
                      <div className='flex flex-col items-center justify-center gap-2'>
                        <SiJavascript className=' hover:fill-yellow-300 hover:bg-black' />
                        <p className='text-base '>JavaScript</p>
                      </div>
                    </div>
                  </div>
                  <div className='grid gap-2 py-4 technologies'>
                    <h3 className='text-2xl font-semibold text-center '>
                      Frameworks
                    </h3>
                    <div className='flex justify-center gap-4 text-3xl animate-fade-in-up '>
                      <div className='flex flex-col items-center justify-center gap-2'>
                        <SiSass className=' hover:fill-fuchsia-400' />
                        <p className='text-base'>Sass</p>
                      </div>
                      <div className='flex flex-col items-center justify-center gap-2'>
                        <SiTailwindcss className=' hover:fill-blue-400' />
                        <p className='text-base'>Tailwind</p>
                      </div>
                      <div className='flex flex-col items-center justify-center gap-2'>
                        <SiReact className=' hover:fill-cyan-300' />
                        <p className='text-base'>React</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
