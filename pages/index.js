import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from './Hero';
import About from './About';

export default function Home() {
  return (
    <div className='home '>
      <Head>
        <title>Hangsihak Sin</title>
        <meta name='description' content='Hangsihak Sin' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}
