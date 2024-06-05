"use client"
import React, { useState } from 'react';

const Survey: React.FC = () => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const questions: string[] = [
    "Why are you seeking tax relief help?",
    "Which type of tax relief do you need?",
    "Why are you seeking tax relief help?",
    "Which type of tax relief do you need?",
    "Why are you seeking tax relief help?",
    "Which type of tax relief do you need?",
    "Why are you seeking tax relief help?",
    "Why are you seeking tax relief help?",
    "Which type of tax relief do you need?",
    "Why are you seeking tax relief help?",
    // Add more headings for additional pages if needed
  ];

  const options: string[][] = [
    [
      "I received a letter from the IRS",
      "My wages are being garnished",
      "There's a lien on my property",
      "My bank account was seized (levied)",
      "My employment status has changed",
      "Other"
    ],
    [
      "Personal",
      "Business",
      "Both"
      // Add more options for page 2 if needed
    ],
    [
      "Personal",
      "Business",
      "Both"
      // Add more options for page 3 if needed
    ],
    [
      "Personal",
      "Business",
      "Both"
      // Add more options for page 3 if needed
    ],
    [
      "Personal",
      "Business",
      "Both"
      // Add more options for page 3 if needed
    ],
    [
      "Personal",
      "Business",
      "Both"
      // Add more options for page 3 if needed
    ],
    [
      "Personal",
      "Business",
      "Both"
      // Add more options for page 3 if needed
    ],
    [
      "Personal",
      "Business",
      "Both"
      // Add more options for page 3 if needed
    ],
    [
      "Personal",
      "Business",
      "Both"
      // Add more options for page 3 if needed
    ],
    // Add more pages with their respective options
  ];

  const toggleOption = (option: string) => {
    setSelectedOptions((prevSelected) =>
      prevSelected.includes(option)
        ? prevSelected.filter((item) => item !== option)
        : [...prevSelected, option]
    );
  };

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-5xl leading-9 font-extrabold text-[#00205b]">Need Tax Relief?</h2>
        <p className="mt-8 max-w-2xl mx-auto text-xl leading-7 font-bold">
          Complete the Questionnaire Below to See If You Qualify
        </p>
      </div>
      <div className="mt-10">
        <div className="flex justify-center space-x-5">
          {[...Array(questions.length)].map((_, i) => (
            <div
              key={i}
              className={`w-8 h-8 rounded-full text-xl font-semibold flex items-center justify-center ${
                i + 1 === currentPage ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"
              }`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-12">
        <h3 className="text-3xl leading-6 font-bold text-[#00205b] text-center">
          {questions[currentPage - 1]}
        </h3>
        <p className="mt-3 text-center text-2xl leading-5">Select all that apply</p>
        <form className="mt-6">
          <div className="rounded-md shadow-sm flex flex-col items-center w-full">
            {options[currentPage - 1].map((option, index) => (
              <div
                key={index}
                className={`mt-4 px-5 py-4 rounded-xl cursor-pointer w-full max-w-md text-center border-2 ${
                  selectedOptions.includes(option) ? 'bg-[#2D60C2] text-white' : 'bg-[#f5f9ff] text-black'
                }`}
                style={{ borderColor: '#00205b', borderWidth: '1px' }}
                onClick={() => toggleOption(option)}
              >
                <label className={`block text-lg font-medium leading-5 ${selectedOptions.includes(option) ? 'text-white' : 'text-black'}`}>
                  {option}
                </label>
              </div>
            ))}
          </div>
          <div className="mt-6 flex justify-center ">
            <span className="block w-full max-w-xs rounded-md shadow-sm gap-3">
              {currentPage > 1 && (
                <button
                  type="button"
                  onClick={prevPage}
                  className="inline-flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#FF4438] hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red active:bg-red-700 mr-4"
                >
                  ← Previous
                </button>
              )}
              {currentPage < options.length && (
                <button
                  type="button"
                  onClick={nextPage}
                  className="inline-flex justify-center py-2 px-28 border border-transparent text-sm font-medium rounded-md text-white bg-[#FF4438] hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red active:bg-red-700"
                >
                  Next →
                </button>
              )}
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Survey;
