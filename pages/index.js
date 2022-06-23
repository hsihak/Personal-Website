import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from './hero';

export default function Home() {
  return (
    <div className='home '>
      <Hero />
    </div>
  );
}
