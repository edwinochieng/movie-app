"use client";
import React from "react";
import Image from "next/image";
import { BsFillStarFill } from "react-icons/bs";
import { alternativeImage, backdropURL } from "../utils/urls";
import { useRouter } from "next/navigation";
import { Results } from "../utils/interfaces";

interface Movie {
  movie: Results;
}

export default function MovieCard({
  movie: {
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
  const router = useRouter();

  const handleClick = (): void => {
    if (release_date || title) {
      router.push(`/movies/${id}`);
    } else if (first_air_date || original_name) {
      router.push(`/tvshows/${id}`);
    }
  };
  return (
    <div
      className='relative inline-block w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] cursor-pointer m-1'
      onClick={handleClick}
    >
      <Image
        src={
          backdrop_path ? `${backdropURL}${backdrop_path} ` : alternativeImage
        }
        height='200'
        width='280'
        alt={title || original_name}
        className='rounded h-[100px] sm:h-[160px]'
      />
      <div className='absolute top-0 left-0 w-full h-full rounded px-2 bg-black/90 opacity-0 ease-in-out duration-100 hover:opacity-100 flex flex-col justify-between'>
        <div className='pt-2 flex justify-between items-center'>
          <div className='bg-black flex items-center rounded-lg px-1.5 text-sm'>
            <BsFillStarFill className='text-yellow-400 text-xs' />
            <span className='pl-1 font-bold text-white'>
              {Number(vote_average).toFixed(1)}
            </span>
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
