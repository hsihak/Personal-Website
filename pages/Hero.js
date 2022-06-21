import Social from '../components/Social';

const Hero = () => {
  return (
    <div
      className='flex items-center justify-center h-screen bg-slate-100 dark:bg-gray-900'
      id='hero'>
      <div className='flex flex-col gap-4 md:w-1/2'>
        <span className='text-2xl text-violet-500'>Hi There,</span>
        <h1 className='text-6xl font-bold'>{"I'm Hang 👋"}</h1>
        <p>{"I'm a First year Computer Science Student"}</p>
        <br />
        <Social />
      </div>
    </div>
  );
};

export default Hero;
