import React from 'react';

const ScheduleFree = () => {
  return (
    <div className='bg-[#2d60c2] h-[300px] md:h-[250px] lg:h-[300px] w-full flex flex-col justify-center items-center gap-4 px-4 md:px-8'>
      <h1 className='text-2xl md:text-3xl lg:text-4xl text-white font-bold text-center'>
        Can’t Afford To Pay Your Taxes?
      </h1>
      <button className='bg-[#ff4438] py-3 px-4 md:px-6 lg:px-8 text-white flex justify-center items-center max-w-[380px] w-full text-xl font-bold text-center'>
        SCHEDULE A FREE CONSULTATION
      </button>
    </div>
  );
};

export default ScheduleFree;
