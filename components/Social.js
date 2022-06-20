// React icons
import { MdEmail } from 'react-icons/md';
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';

function Social() {
  return (
    <div className='flex items-center justify-center gap-4 text-3xl'>
      <MdEmail />
      <BsGithub />
      <BsLinkedin />
      <BsTwitter />
    </div>
  );
}

export default Social;
