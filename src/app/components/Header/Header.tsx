"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="flex  bg-[#ED7014] justify-between h-20 p-4 items-center ">
      <button title="button" onClick={toggleMenu}>
        {!isOpen ? (
          <IoMdMenu size={20} className="md:hidden lg:hidden block " />
        ) : (
          <RxCross2 size={20} className="md:hidden lg:hidden block " />
        )}
      </button>
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold italic mr-20  ">
        RoverRoutes
      </h1>
      <nav className="hidden md:flex lg:flex flex-grow justify-center">
        <ul className="text-2xl flex flex-row justify-center gap-14 font-semibold italic  ">
          <li>
            <Link href="#">Home</Link>
          </li>
          <li>
            <Link href="#">Destinations</Link>
          </li>
          <li>
            <Link href="/#">Advanture Activities</Link>
  
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <div className="hidden md:block lg:block">
          <button className="bg-orange-400 text-black font-semibold italic text-center py-2 px-4 rounded-lg hover:bg-orange-500">
            Book Now
          </button>
        </div>

      {isOpen && (
        <nav className="md:hidden lg:hidden absolute top-20 left-0 w-full">
          <ul className="flex flex-col font-semibold gap-4 p-4  bg-pink-200 w-full absolute    rounded-lg shadow-lg ">
            <li>
              <Link href="#">Home</Link>
            </li>
            <li>
              <Link href="/#" >Destinations</Link>
            </li>
            <li>
              <Link href="/about">Advanture Activities</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <button className="bg-orange-400 hover:bg-orange-500 text-black block  md:hidden lg:hidden font-semibold italic text-center px-4 py-2 rounded-lg cursor-pointer">
              Book Now
            </button>
          </ul>
          
        </nav>
      )}

            
          
    </header>
  );
};

export default Navbar;