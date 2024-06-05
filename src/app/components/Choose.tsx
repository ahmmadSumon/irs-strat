import React from 'react';

const Choose = () => {
  return (
    <div className='flex justify-center items-center w-full h-[70vh]' style={{ 
        backgroundImage: `url('/pictures/meee.jpg')`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center' 
      }}>
      <div className='flex mx-auto w-full p-4 md:p-8 lg:max-w-7xl'>
        <div className='bg-white flex flex-col w-full p-6 md:p-8 rounded-xl'>
          <h1 className='text-2xl md:text-3xl font-bold'>
            <span className='text-[#00205b]'>Why Choose</span> <span className='text-[#ff4438]'>IRS Fresh Start?</span>
          </h1>
          <h4 className='text-lg md:text-xl font-bold opacity-70 py-2 md:py-3'>
            Our mission is to help taxpayers find affordable solutions for their tax problems.
          </h4>
          <p className='text-sm md:text-base py-2 md:py-3'>
            We know that you have many options when it comes to choosing a tax relief company. That’s why we’ve done the research for you and only partner with tax professionals who have extensive experience with both state and federal tax debt cases.
          </p>
          <p className='text-sm md:text-base'>
            Our tax partners have been in the tax relief business for decades and are A+ rated by the Better Business Bureau. There is no fee for your consultation and case review, and no obligation to purchase any services offered. We encourage you to carefully review all available tax solutions before making a decision to ensure you receive the best possible results.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Choose;
