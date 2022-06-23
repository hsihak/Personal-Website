// React icons
import { MdEmail } from 'react-icons/md';
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';
// Next useRouter
import { useRouter } from 'next/router';

function Social() {
  const router = useRouter();

  const handleClick = e => {
    e.preventDefault();
    router.push(href);
  };
  return (
    <div className='flex items-center gap-4 text-3xl animate-fade-in-up'>
      <button
        className='cursor-pointer hover:scale-110 hover:transition hover:duration-400'
        onClick={() => router.push('mailto:s.hsihak@gmail.com')}>
        <MdEmail />
      </button>
      <button
        className='cursor-pointer hover:scale-110 hover:transition hover:duration-400'
        onClick={() => router.push('https://github.com/hsihak')}>
        <BsGithub />
      </button>
      <button
        className='cursor-pointer hover:scale-110 hover:transition hover:duration-400'
        onClick={() => router.push('https://www.linkedin.com/in/hangsin/')}>
        <BsLinkedin />
      </button>
      <button
        className='cursor-pointer hover:scale-110 hover:transition hover:duration-400'
        onClick={() => router.push('/')}>
        <BsTwitter />
      </button>
    </div>
  );
}

export default Social;
