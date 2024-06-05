"use client"
import React, { useState } from 'react';
import Survey2 from '../components/Survey2';

const Survey: React.FC = () => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const options: string[] = [
    "I received a letter from the IRS",
    "My wages are being garnished",
    "There's a lien on my property",
    "My bank account was seized (levied)",
    "My employment status has changed",
    "Other"
  ];

  const toggleOption = (option: string) => {
    setSelectedOptions((prevSelected) =>
      prevSelected.includes(option)
        ? prevSelected.filter((item) => item !== option)
        : [...prevSelected, option]
    );
  };

  return (
    <div className="mt-24 mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl sm:text-5xl leading-9 font-extrabold text-[#00205b]">CONTACT US</h2>
        <h2 className="text-lg sm:text-2xl tracking-wide py-4 font-bold text-[#F9423A]">Thank you for wanting to contact IRS-Freshstart.org</h2>
        <p className="text-base sm:text-xl">
          Our mission is to connect you with the most qualified tax professionals who can assist with your specific situation.
        </p>
        <p className='text-base sm:text-xl font-bold leading-5 py-4'>
          IRSFreshStart.org is owned and operated by:<br />
          Consult US, LLC 4000 Hollywood Blvd. Suite 555-S Hollywood, FL 33021
        </p>
        <p className='text-base sm:text-xl text-[#CC3366] font-extrabold'>info@irs-freshstart.org</p>
      </div>

     <Survey2/>
    </div>
  );
};

export default Survey;
