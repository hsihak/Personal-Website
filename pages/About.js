import Image from 'next/image';
import pic from '../public/assets/pic.jpg';
import Social from '../components/Social';

const About = () => {
  return (
    <>
      <div
        className='flex items-center justify-center min-h-screen pt-32 md:pt-0 bg-slate-100 animate-fade-in-down dark:bg-gray-900'
        id='about'>
        <div className='flex flex-col items-center justify-center w-2/3 gap-4 p-10 rounded-md h-4/6 dark:bg-gray-700 md:w-2/3 md:h-4/6'>
          <h1 className='text-3xl md:text-5xl font-base'>About Me</h1>
          <hr className='w-1/2 border-b border-violet-300 md:w-1/4' />
          <div className='flex flex-row '>
            {/* <img src={avatarImage} alt='' className=' w-72 h-96' /> */}
            <div className='flex flex-col gap-2 pt-4 md:flex-row'>
              <div className='flex flex-col items-center justify-center gap-4'>
                <Image
                  alt='Profile Photo'
                  src={pic}
                  quality={100}
                  objectFit={'contain'}
                  width={500}
                  height={500}
                  placeholder={'blur'}
                />
                <Social />
              </div>
              <div className='flex flex-col gap-2 pt-2'>
                <h2 className='text-xl animate-fade-in-up'>Hangsihak Sin</h2>
                <p className='animate-fade-in-up'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Officia beatae, repellendus maiores nisi minus eos cum
                  reprehenderit quaerat numquam asperiores.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
