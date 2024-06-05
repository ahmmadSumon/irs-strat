import Image from 'next/image';
import React from 'react';
import vector1 from "../../../public/pictures/Vector.png";
import vector2 from "../../../public/pictures/Vector-1.png";
import { BsFillTelephoneFill } from "react-icons/bs";

const StartProgram = () => {
  return (
    <div className='my-5 flex justify-center items-center mx-auto max-w-[70vw]'>
      <div className='bg-[#d8e5ff] rounded h-[271px] flex justify-between items-center w-full'>
        <div>
          <Image src={vector1} alt='' />
        </div>
        <div className='flex flex-col justify-center items-center gap-6'>
          <h1 className='text-3xl text-center font-bold'>See If You Qualify For The IRS Fresh <br />Start Program Today!</h1>
          <button className='bg-[#ff4438] py-3 text-white flex justify-center items-center gap-2 w-[250px] text-xl font-bold rounded text-center'>
            <BsFillTelephoneFill /> 877 578 3520
          </button>
        </div>
        <div>
          <Image src={vector2} alt='' />
        </div>
      </div>
    </div>
  );
};

export default StartProgram;
