import React from 'react';
import { TbCoins } from "react-icons/tb";
import heroImg from '../../../public/pictures/happy-business-man-sitting-table-with-laptop_1262-5093-1-1.png'
import Image from 'next/image';
const HeroSection = () => {
  return (
    <div className='bg-[#f5f9ff] min-h-[20vh] mt-24 '>
      <div className=' justify-between items-center pt-8  max-w-[90rem] mx-auto px-4 sm:px-6  grid grid-cols-1 md:grid-cols-2'>
        <div className=' flex-col justify-center items-start'>
            <p className='mb-2 flex text-xl font-bold items-center gap-3'><TbCoins /> Your Lifeline To Tax Relief</p>
          <h1 className='text-[55px] text-[#00205b] font-bold mb-2'>IRS Fresh Start Program</h1>
          <p className='text-l mb-6'>
          Each year, the IRS forgives millions in tax debt, if you owe $10,000 or more, you may be eligible for one of the tax relief options available through the Fresh Start Program.
          </p>
          <button className='bg-[#ff4438] text-white px-14 text-xl font-bold py-3 rounded-md'>See If You Qualify</button>
        </div>
      
      <div className='flex justify-center items-center '>
        <Image src={heroImg} alt='Hero' />
        
      </div>
      </div>
    </div>
  );
};

export default HeroSection;
