"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { Results } from "../../utils/interfaces";
import { posterURL } from "../../utils/urls";

interface Movie {
  movie: Results;
}

export default function SearchedResults({
  movie: {
    id,
    poster_path,
    first_air_date,
    original_name,
    release_date,
    title,
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
      className='w-[155px] md:w-[175px] cursor-pointer'
      onClick={handleClick}
    >
      <Image
        src={`${posterURL}${poster_path}`}
        height='300'
        width='300'
        alt={original_name || title}
        className='rounded-lg'
      />
    </div>
  );
}
