import React from 'react';
import footerImg from '../../../public/pictures/footer.png';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className='bg-[#01163C] flex flex-col justify-center items-center text-white p-4 md:p-8 lg:px-32 lg:py-12'>
      <p className='text-center text-xs md:text-sm opacity-70'>
        Disclaimer - This site is not endorsed or affiliated with any government or regulatory agencies, including the IRS. The information on this website is for general information purposes only and nothing on this site should be taken as legal advice for any individual case or situation. It is recommended that consumers seek the advice of a licensed tax expert to fully understand all options. Upon the request of visitors, a free consultation is provided with no obligation.
      </p>
      <p className='text-center text-xs md:text-sm opacity-70 mt-4 md:mt-8'>
        © 2024 IRS-FreshStart.org – Privacy | Terms of Use | Contact | About
      </p>
      <div className='mt-4 md:mt-8'>
        <Image src={footerImg} alt='Footer Logo' />
      </div>
    </div>
  );
}

export default Footer;
