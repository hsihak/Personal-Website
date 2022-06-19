import Head from 'next/head';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className='home'>
      <Head>
        <title>Personal Website</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
    </div>
  );
}
