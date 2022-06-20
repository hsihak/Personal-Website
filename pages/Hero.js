import Social from '../components/Social';

const Hero = () => {
  return (
    <div
      className='flex items-center h-screen justify-evenly bg-slate-100'
      id='hero'>
      <div className='flex flex-col gap-4'>
        <span className='text-xl text-violet-500'>Hi There,</span>
        <h1 className='text-5xl font-bold te'>I'm Hang 👋</h1>
        <p>I'm a First year Computer Science Student</p>
        <br />
        <Social />
      </div>
    </div>
  );
};

export default Hero;
