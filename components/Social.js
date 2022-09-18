// React icons
import { MdEmail } from 'react-icons/md';
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';
// Next Link
import Link from 'next/link';
import Fade from 'react-reveal/Fade';

function Social() {
  return (
    <div className='flex items-center gap-4 text-3xl '>
      <Fade bottom duration={2000}>
        <Link href={'mailto:s.hsihak@gmail.com'}>
          <a
            className='cursor-pointer hover:scale-110 hover:transition hover:duration-400'
            target={'_blank'}>
            <MdEmail className=' hover:fill-blue-500' />
          </a>
        </Link>

        <Link href={'https://github.com/hsihak'}>
          <a
            className='cursor-pointer hover:scale-110 hover:transition hover:duration-400'
            target={'_blank'}>
            <BsGithub className=' hover:fill-purple-600' />
          </a>
        </Link>

        <Link href={'https://www.linkedin.com/in/hangsin/'}>
          <a
            className='cursor-pointer hover:scale-110 hover:transition hover:duration-400'
            target={'_blank'}>
            <BsLinkedin className=' hover:fill-blue-700' />
          </a>
        </Link>

        <Link href={'https://twitter.com/'}>
          <a
            className='cursor-pointer hover:scale-110 hover:transition hover:duration-400'
            target={'_blank'}>
            <BsTwitter className=' hover:fill-sky-400' />
          </a>
        </Link>
      </Fade>
    </div>
  );
}

export default Social;
