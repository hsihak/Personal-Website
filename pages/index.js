import { useRouter } from 'next/router';
import Social from '../components/Social'; // Social Icons Component
import About from './about'; // About Component(Section)
import Projects from './projects'; // Project Component(Section)

export default function Home() {
  const router = useRouter();
  return (
    <>
      <section
        className='flex items-center justify-center h-screen bg-slate-100 dark:bg-gray-900 '
        id='hero'>
        <div className='flex flex-col gap-2 md:w-1/2'>
          <span className='text-2xl text-violet-500'>Hi There,</span>
          <h1 className='text-6xl font-semibold animate-fade-in-up pb-2'>
            {"I'm Hang 👋"}
          </h1>

          <p className='animate-fade-in-up'>
            {"I'm a First year Computer Science Student"}
          </p>
          <br />
          <div className='flex gap-4'>
            <button
              className='p-2 text-white transition duration-500 border-2 rounded-full bg-violet-500 hover:text-violet-500 hover:bg-white hover:border-violet-500'
              onClick={() => router.push('/')}>
              Resume
            </button>
            <button
              className='p-3 text-white transition duration-500 border-2 rounded-full bg-violet-500 hover:text-violet-500 hover:bg-white hover:border-violet-500'
              onClick={() => router.push('#about')}>
              About me
            </button>
          </div>
          <hr className='w-2/3 shadow-md md:w-1/2 border-violet-300' />
          <Social />
        </div>
      </section>
      <About />
      <Projects />
    </>
  );
}
