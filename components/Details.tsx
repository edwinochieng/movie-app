"use client";

import Image from "next/image";
import React from "react";
import { BsFillStarFill, BsBookmarkStarFill } from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";
import { Results } from "../utils/interfaces";
import { backdropURL, posterURL } from "../utils/urls";

interface Details {
  data: Results;
}

export default function Details({
  data: {
    backdrop_path,
    poster_path,
    original_name,
    title,
    release_date,
    vote_average,
    first_air_date,
    original_title,
    status,
    number_of_seasons,
    genres,
    overview,
    runtime,
  },
}: Details) {
  return (
    <div className='w-full h-[85vh] sm:h-[75vh]'>
      <div className='relative w-full h-full '>
        <div className='absolute w-full h-full bg-gradient-to-r from-black' />
        <Image
          src={`${backdropURL}${backdrop_path}`}
          height='600'
          width='1920'
          alt={title || original_name || original_title}
          className='h-full'
        />
        <div className='absolute top-[5%] md:top-[15%] px-4 md:px-12 flex flex-col lg:flex-row'>
          <div className='w-[180px] lg:w-[300px] pb-2'>
            <Image
              src={`${posterURL}${poster_path}`}
              height='300'
              width='300'
              alt={title || original_name}
              className='rounded-lg h-full'
            />
          </div>
          <div className='lg:pl-6'>
            <h1 className='text-3xl md:text-4xl lg:text-6xl font-bold text-white'>
              {title || original_name || original_title}
            </h1>
            <div className='flex font-medium text-gray-300 text-sm'>
              <div className=' flex items-center'>
                <BsFillStarFill className='text-yellow-400' />
                <span className='pl-0.5'>
                  {Number(vote_average).toFixed(1)}
                </span>
              </div>
              {number_of_seasons && (
                <div className='ml-2'>{number_of_seasons} Seasons</div>
              )}
              {runtime && (
                <div className='ml-2 flex items-center'>
                  <BiTimeFive className='mr-0.5' />
                  {runtime} minutes
                </div>
              )}
            </div>
            <div className='flex flex-wrap w-full max-w-[90%] md:max-w-[80%] lg:max-w-[65%]'>
              {genres.map((genre) => (
                <div
                  key={genre.id}
                  className='font-semibold text-sm text-gray-500 pr-3'
                >
                  {genre.name}
                </div>
              ))}
            </div>
            <div className='py-0.5 text-gray-300 text-sm flex font-medium'>
              {release_date && <span>Release Date: {release_date}</span>}
              {first_air_date && (
                <div className='flex'>
                  <span>First Air Date: {first_air_date}</span>
                </div>
              )}
              {status && <span className='ml-2'>Status: {status}</span>}
            </div>
            <div className='py-1'>
              <p className='w-full max-w-[90%] md:max-w-[80%] lg:max-w-[60%] text-gray-200 font-semibold text-sm'>
                {overview}
              </p>
            </div>

            <div className='mt-1 max-w-[35px] py-1 px-2 flex bg-black/80 items-center rounded cursor-pointer'>
              <BsBookmarkStarFill className='text-gray-600' size={24} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
