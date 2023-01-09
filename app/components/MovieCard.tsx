"use client";
import React from "react";
import Image from "next/image";
import { BsFillStarFill, BsFillBookmarkHeartFill } from "react-icons/bs";
import { posterURL } from "../../utils/urls";

export interface Movie {
  movie: {
    adult: boolean;
    id: number;
    backdrop_path: string;
    poster_path: string;
    title: string;
    overview: string;
    release_date: string;
    vote_average: number;
    original_name: string;
    first_air_date: string;
    original_title: string;
  };
}

export default function MovieCard({
  movie: {
    poster_path,
    backdrop_path,
    original_name,
    title,
    release_date,
    vote_average,
    id,
    first_air_date,
    original_title,
  },
}: Movie) {
  return (
    <div className='relative inline-block w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] cursor-pointer m-1'>
      <Image
        src={`${posterURL}${backdrop_path} `}
        height='100'
        width='280'
        alt='movie'
        className='rounded-lg object-cover'
      />
      <div className='absolute top-0 left-0 w-full h-full rounded-lg px-2 bg-black/90 opacity-0 ease-in-out duration-100 hover:opacity-100 flex flex-col justify-between'>
        <div className='pt-2 flex justify-between items-center'>
          <div className='bg-white flex items-center rounded-xl px-1'>
            <BsFillStarFill className='text-yellow-400' size={10} />

            <span className='p-1 text-[10px] font-bold text-gray-900'>
              {Number(vote_average).toFixed(1)}
            </span>
          </div>

          <div className='pl-2 text-gray-200 cursor-pointer'>
            <BsFillBookmarkHeartFill size={20} />
          </div>
        </div>
        <div className='pb-2'>
          <h1 className='text-gray-50 font-semibold text-[19px] leading-[20px] truncate'>
            {title || original_name || original_title}
          </h1>
          <h2 className='text-[11px] text-gray-300 font-semibold'>
            {release_date || first_air_date}
          </h2>
        </div>
      </div>
    </div>
  );
}
