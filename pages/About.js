import Image from 'next/image';
import avatarImage from '../public/assets/Avatar.jpg';

const About = () => {
  return (
    <div
      className='flex items-center justify-center h-screen bg-slate-300 dark:bg-gray-900'
      id='about'>
      <div className='p-10 bg-white'>
        <h1 className='text-5xl font-base'>About Me</h1>
        <hr className='border-b border-black' />
        <div className='flex flex-row'>
          {/* <Image
            alt='Profile Photo'
            src={avatarImage}
            quality={100}
            objectFit='none'
          /> */}
          <img
            src={`/../public/assets/Avatar.jpg`}
            alt=''
            className=' w-72 h-96'
          />
          <div>
            <h2>Hangsihak Sin</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
