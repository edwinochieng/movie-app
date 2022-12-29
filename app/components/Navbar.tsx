"use client";

import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { RxAvatar } from "react-icons/rx";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

export default function Navbar() {
  const [openNav, setOpenNav] = useState<boolean>(false);

  const handleNav = (): void => {
    setOpenNav((prevValue) => !prevValue);
  };
  return (
    <div className='fixed top-0 left-0 w-full z-10 ease-in duration-300 px-6 md:px-16'>
      <div className='flex justify-between items-center text-gray-300 font-semibold text-[17px]'>
        {/*mobile toggle button*/}

        <div onClick={handleNav} className='block z-10 sm:hidden'>
          {openNav ? <AiOutlineClose size={22} /> : <AiOutlineMenu size={22} />}
        </div>

        {/*Desktop menu */}
        <ul className='hidden sm:flex'>
          <li className='py-4 pr-4 hover:text-gray-500'>
            <Link href='/'>Home</Link>
          </li>
          <li className='p-4 hover:text-gray-500'>
            <Link href='/movies'>Movies</Link>
          </li>
          <li className='p-4 hover:text-gray-500'>
            <Link href='/tvshows'>TV Shows</Link>
          </li>
          <li className='p-4 hover:text-gray-500'>
            <Link href='/watchlist'>Watch List</Link>
          </li>
        </ul>

        <ul className='flex'>
          <li className='hidden sm:block p-4 hover:text-gray-600'>
            <Link href='/search'>
              <BsSearch size={20} />
            </Link>
          </li>
          <li className='py-4 pl-6 hover:text-gray-600'>
            <RxAvatar size={26} />
          </li>
        </ul>

        {/* mobile menu */}

        {openNav && (
          <div className='absolute top-0 bottom-0 left-0 max-w-[300px] w-full h-screen bg-black ease-in duration-300 sm:hidden'>
            <ul className='px-6 pt-20 text-gray-300'>
              <li className='pt-3' onClick={handleNav}>
                <Link href='/'>Home</Link>
              </li>
              <li className='pt-3' onClick={handleNav}>
                <Link href='/search'>Search</Link>
              </li>
              <li className='pt-3' onClick={handleNav}>
                <Link href='/movies'>Movies</Link>
              </li>
              <li className='pt-3' onClick={handleNav}>
                <Link href='/tvshows'>TV Shows</Link>
              </li>
              <li className='pt-3' onClick={handleNav}>
                <Link href='/watchlist'>Watch List</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
