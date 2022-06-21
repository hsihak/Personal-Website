import Image from 'next/image';
import avatarImage from '../public/assets/Avatar.jpg';
import pic from '../public/assets/pic.jpg';

const About = () => {
  return (
    <div
      className='flex items-center justify-center min-h-screen bg-slate-300 dark:bg-gray-900'
      id='about'>
      <div className='w-2/3 p-10 bg-white h-4/6 dark:bg-gray-700 md:w-2/3 md:h-4/6'>
        <h1 className='text-3xl md:text-5xl font-base'>About Me</h1>
        <hr className='border-b border-black' />
        <div className='flex flex-row '>
          {/* <img src={avatarImage} alt='' className=' w-72 h-96' /> */}
          <div className='flex flex-col gap-2 md:flex-row'>
            <Image
              alt='Profile Photo'
              src={pic}
              quality={100}
              objectFit={'contain'}
              width={200}
              height={300}
            />
            <div className='flex flex-col gap-2 pt-2'>
              <h2 className='text-xl'>Hangsihak Sin</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Officia beatae, repellendus maiores nisi minus eos cum
                reprehenderit quaerat numquam asperiores.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
