import Social from '../components/Social';
import { useRouter } from 'next/router';
import navItems from '../components/navItems';

const Hero = () => {
  const router = useRouter();
  return (
    <>
      <div
        className='flex items-center justify-center h-screen bg-slate-100 dark:bg-gray-900 '
        id='hero'>
        <div className='flex flex-col gap-2 md:w-1/2'>
          <span className='text-2xl text-violet-500'>Hi There,</span>
          <h1 className='text-6xl font-bold animate-fade-in-up'>
            {"I'm Hang "}
            <span className=' animate-wiggle'>👋</span>
          </h1>
          <p className='animate-fade-in-up'>
            {"I'm a First year Computer Science Student"}
          </p>
          <br />
          <div className='flex gap-4'>
            <button className='p-2 text-white transition duration-500 border-2 rounded-full bg-violet-500 hover:text-violet-500 hover:bg-white hover:border-violet-500'>
              Resume
            </button>
            <button
              className='p-3 text-white transition duration-500 border-2 rounded-full bg-violet-500 hover:text-violet-500 hover:bg-white hover:border-violet-500'
              onClick={() => router.push(navItems[1].href)}>
              About me
            </button>
          </div>
          <hr className='w-2/3 shadow-md md:w-1/2 border-violet-300' />
          <Social />
        </div>
      </div>
    </>
  );
};

export default Hero;
