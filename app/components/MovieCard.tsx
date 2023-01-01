"use client";
import React from "react";
import Image from "next/image";
import { BsFillStarFill, BsFillBookmarkHeartFill } from "react-icons/bs";

export default function MovieCard() {
  return (
    <div className='group max-w-[250px] w-full cursor-pointer ease-in duration-300 transform sm:hover:scale-125 hover:z-50'>
      <Image
        src='https://lh6.googleusercontent.com/B0uQRPzgf2AX6EVvlqNWwV7ql2-TbAuWbJcnkHuC_uzEtG0viA6__4_v-bfdas4iM8MqIm8wcoDeaLRxugVFycbVvaelnagmzAsH9-ug-y0X2BxvEjFfhavM_fvWHDEnNKBFamG9=s0'
        height='200'
        width='250'
        alt='movie'
      />
      <div className='px-2 pb-3 bg-gray-900 shadow opacity-0 ease-in-out duration-100 group-hover:opacity-100'>
        <h1 className='text-gray-100 font-semibold text-[14px]'>
          Tom cruise Oblivion
        </h1>

        <div className='flex justify-between items-center'>
          <h1 className='text-[13px] text-gray-400 font-semibold'>2022-8-11</h1>
          <div className='flex items-center'>
            <div className='bg-black flex items-center h-5 rounded-xl px-1'>
              <span className='text-yellow-600'>
                <BsFillStarFill size={9} />
              </span>
              <span className='p-1 text-[9px] font-bold text-gray-200'>
                7.3
              </span>
            </div>
            <div className='pl-2 text-gray-200 cursor-pointer'>
              <BsFillBookmarkHeartFill size={17} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
