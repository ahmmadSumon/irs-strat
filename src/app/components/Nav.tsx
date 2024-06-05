"use client";
import { useState } from 'react';
import Link from 'next/link';
import { FiShoppingCart } from 'react-icons/fi';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { AiOutlineClose , AiOutlineDown } from 'react-icons/ai'; // Import the close icon
import Image from 'next/image';
import logo from '../../../public/pictures/Logoimage.png';
import DropDown from './dropdown/DropDown';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropDown, setOpenDropDown] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropDown = (index:any) => {
    setOpenDropDown(openDropDown === index ? null : index);
  };

  const dropdownData = [
    {
      placeholder: "TAX SOLUTIONS",
      data: [
        { name: "IRS TAX DEBT FORGIVENESS", link: "/taxdebt" },
        { name: "IRS Back Taxes", link: "/taxback" },
        { name: "Help With The IRS", link: "/help" },
        { name: "Owe With IRS", link: "/owe" }
      ]
    },
    {
      placeholder: "TAX SERVICES",
      data: [
        { name: "IRS TAX DEBT FORGIVENESS", link: "/taxdebt" },
        { name: "IRS Back Taxes", link: "/taxback" },
        { name: "Help With The IRS", link: "/help" },
        { name: "Owe With IRS", link: "/owe" }
      ]
    }
  ];

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6">
        <div className="flex justify-between h-[88px] items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <div className="text-2xl font-bold text-gray-800 cursor-pointer">
                <Image src={logo} alt="Logo" />
              </div>
            </Link>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-5 flex-grow justify-center">
            <DropDown 
              placeholder="TAX SOLUTIONS" 
              data={[
                { name: "IRS TAX DEBT FORGIVENESS", link: "/taxdebt" },
                { name: "IRS Back Taxes", link: "/taxback" },
                { name: "Help With The IRS", link: "/help" },
                { name: "Owe With IRS", link: "/owe" }
              ]}
            />
            <DropDown 
              placeholder="TAX SERVICES" 
              data={[
                { name: "IRS TAX DEBT FORGIVENESS", link: "/taxdebt" },
                { name: "IRS Back Taxes", link: "/taxback" },
                { name: "Help With The IRS", link: "/help" },
                { name: "Owe With IRS", link: "/owe" }
              ]}
            />
            <Link href="/businesstaxes">
              <div className="text-gray-800 hover:bg-gray-200 hover:shadow-md px-3 py-2 rounded-md cursor-pointer transition duration-300">BUSINESS TAXES</div>
            </Link>
            <Link href="/faqsection">
              <div className="text-gray-800 hover:bg-gray-200 hover:shadow-md px-3 py-2 rounded-md cursor-pointer transition duration-300">FAQS</div>
            </Link>
            <Link href="/aboutsection">
              <div className="text-gray-800 hover:bg-gray-200 hover:shadow-md px-3 py-2 rounded-md cursor-pointer transition duration-300">ABOUT</div>
            </Link>
            <Link href="/contact">
              <div className="text-gray-800 hover:bg-gray-200 hover:shadow-md px-3 py-2 rounded-md cursor-pointer transition duration-300">CONTACT</div>
            </Link>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-4">
            <p className="text-[#ff4438] flex justify-center items-center gap-2 text-xl font-bold cursor-pointer">
              <BsFillTelephoneFill /> 877 578 3520
            </p>
          </div>
          <div className="flex items-center md:hidden space-x-4">
            <button onClick={toggleMenu} className="text-gray-800 hover:text-gray-600 focus:outline-none">
              {isOpen ? (
                <AiOutlineClose className="h-6 w-6" /> // Render the close icon when the menu is open
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 py-2 pb-3 space-y-1 sm:px-3">
            <div className=" flex flex-col items-start space-y-1">
            {dropdownData.map((dropdown, index) => (
              <div key={index} className="">
                <div
                  className="text-gray-800 hover:bg-gray-200 hover:shadow-md px-3 py-2 rounded-md cursor-pointer transition duration-300 flex items-center justify-between"
                  onClick={() => toggleDropDown(index)}
                >
                  <span>{dropdown.placeholder}</span>
                  <AiOutlineDown/>
                </div>
                {openDropDown === index && (
                  <div className="flex flex-col items-start space-y-1 pl-4">
                    {dropdown.data.map((item, subIndex) => (
                      <Link key={subIndex} href={item.link}>
                        <div className="text-gray-800 hover:bg-gray-200 hover:shadow-md px-3 py-2 rounded-md cursor-pointer transition duration-300">{item.name}</div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
           
            </div>
            <Link href="/businesstaxes">
              <div className="text-gray-800 hover:bg-gray-200 hover:shadow-md px-3 py-2 rounded-md cursor-pointer transition duration-300">BUSINESS TAXES</div>
            </Link>
            <Link href="/faqsection">
              <div className="text-gray-800 hover:bg-gray-200 hover:shadow-md px-3 py-2 rounded-md cursor-pointer transition duration-300">FAQS</div>
            </Link>
            <Link href="/aboutsection">
              <div className="text-gray-800 hover:bg-gray-200 hover:shadow-md px-3 py-2 rounded-md cursor-pointer transition duration-300">ABOUT</div>
            </Link>
            <Link href="/contact">
              <div className="text-gray-800 hover:bg-gray-200 hover:shadow-md px-3 py-2 rounded-md cursor-pointer transition duration-300">CONTACT</div>
            </Link>
            <p className="text-[#ff4438] flex justify-center items-center gap-2 text-xl font-bold cursor-pointer">
              <BsFillTelephoneFill /> 877 578 3520
            </p>
          </div>
        </div>
      )}
    </nav>
  );
}
