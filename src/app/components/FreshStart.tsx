import React from 'react';
import { VscPass } from "react-icons/vsc";
import FreshImg from '../../../public/pictures/image-4.png'
import Image from 'next/image';
const FreshStart = () => {
  return (
    <div className='bg-[#f5f9ff] '>
      <div className=' justify-between max-w-[90rem] mx-auto px-4 sm:px-6  grid grid-cols-1 md:grid-cols-2'>
        <div className='flex-col '>
          <h1 className='text-[40px] text-[#00205b] font-extrabold my-2 mt-10'>What’s The Fresh Start Program?</h1>
          <h3 className='text-xl font-xl text-center mb-6'>
          The Fresh Start Program, also known as the Fresh Start Initiative, was created to help struggling taxpayers reduce their debt and get a “fresh start” through various tax relief options.
          </h3>
            <h4 className='mb-2 flex text-xl text-center font-medium items-center gap-3'>There are four debt relief options offered under the IRS Fresh Start Program, including:</h4>
            <ul className='flex flex-col gap-5 mt-3'>
                <li className='flex items-center gap-2'> <VscPass className='text-[#2c60ca] font-extrabold text-2xl opacity-1'/><span className='font-extrabold text-md flex items-center gap-2 opacity-[.7]'>Offer in Compromise –</span> settle for less than you owe</li>
                <li className='flex  items-center gap-2'> <VscPass className='text-[#2c60ca] font-extrabold text-2xl opacity-1'/><span className='font-extrabold text-md  flex items-center gap-2 opacity-[.7]'> Currently Not Collectible Status –</span> stop payments and collection actions</li>
                <li className='flex  items-center gap-2'><VscPass className='text-[#2c60ca] font-extrabold text-2xl opacity-1'/><span className='font-extrabold text-md  flex items-center gap-2 opacity-[.7]'> Installment Agreements – </span> settle for less than you owe</li>
                <li className='flex  items-center gap-2'> <VscPass className='text-[#2c60ca] font-extrabold text-2xl opacity-1'/><span className='font-extrabold text-md  flex items-center gap-2 opacity-[.7]'>Penalty Abatement –</span> waive or reduce penalty fees</li>
            </ul>
         <p className='px-8 py-2 my-3 bg-[#2c60ca] text-white text-center rounded'>Each has its own set of eligibility requirements and application rules. During your free consultation, our tax partners will review your case and determine if you qualify for one or more of these tax relief options.</p>
         
        </div>
      
      <div className='flex justify-center items-center '>
        <Image src={FreshImg} alt='Hero' />
        
      </div>
      </div>
    </div>
  );
};

export default FreshStart;
