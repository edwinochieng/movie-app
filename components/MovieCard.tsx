"use client";
import React from "react";
import Image from "next/image";
import { BsFillStarFill } from "react-icons/bs";
import { alternativeImage, posterURL, backdropURL } from "../utils/urls";
import { useRouter } from "next/navigation";
import { Results } from "../utils/interfaces";

interface Movie {
  movie: Results;
}

export default function MovieCard({ movie }: Movie) {
  const router = useRouter();

  const handleClick = (): void => {
    if (movie?.release_date || movie?.title) {
      router.push(`/movies/${movie?.id}`);
    } else if (movie?.first_air_date || movie?.original_name) {
      router.push(`/tvshows/${movie?.id}`);
    }
  };

  return (
    <div
      className='relative inline-block w-[155px] cursor-pointer m-1'
      onClick={handleClick}
    >
      <Image
        src={`${backdropURL}/${movie?.backdrop_path!} `}
        height='300'
        width='300'
        alt={
          movie?.title ||
          movie?.original_name ||
          movie?.original_title ||
          "movie"
        }
        className='rounded-lg h-full'
      />

      <div className='absolute top-0 left-0 w-full h-full rounded px-2 bg-black/90 opacity-0 ease-in-out duration-100 hover:opacity-100 flex flex-col justify-between'>
        <div className='pt-2 flex justify-between items-center'>
          <div className='bg-black flex items-center rounded-lg px-1.5 text-sm'>
            <BsFillStarFill className='text-yellow-400 text-xs' />
            <span className='pl-1 font-bold text-white'>
              {Number(movie?.vote_average).toFixed(1)}
            </span>
          </div>
        </div>
        <div className='pb-2'>
          <h1 className='text-gray-50 font-semibold text-[19px] leading-[20px] truncate'>
            {movie?.title || movie?.original_name || movie?.original_title}
          </h1>
          <h2 className='text-[11px] text-gray-300 font-semibold'>
            {movie?.release_date || movie?.first_air_date}
          </h2>
        </div>
      </div>
    </div>
  );
}
