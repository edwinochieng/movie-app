"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { backdropURL } from "../../utils/urls";
import { Data, Results } from "../../utils/interfaces";

interface Banner {
  data: Data;
}

export default function Banner({ data }: Banner) {
  const [movies, setMovies] = useState<Results[]>([]);

  useEffect(() => {
    setMovies(data.results);
  }, []);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  return (
    <div className='w-full h-[350px] md:h-[550px]'>
      <div className='relative w-full h-full '>
        <div className='absolute w-full h-full bg-gradient-to-r from-black' />
        <Image
          src={`${backdropURL}${movie?.backdrop_path}`}
          height='600'
          width='1920'
          alt={movie?.title || movie?.original_name}
          className='object-cover h-full'
        />
        <div className='absolute top-[30%] p-4 md:p-8'>
          <h1 className='text-3xl md:text-6xl font-bold'>
            {movie?.title || movie?.original_name || movie?.original_title}
          </h1>
          <p className='py-1 text-gray-300 text-sm'>
            Realesed: {movie?.release_date || movie?.first_air_date}
          </p>
          <p className='w-full md:max-w-[70%] lg:max-w-[50%] text-gray-200 font-semibold text-sm'>
            {movie?.overview}
          </p>
        </div>
      </div>
    </div>
  );
}
