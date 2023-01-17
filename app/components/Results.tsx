"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { Results } from "../../utils/interfaces";
import { posterURL, alternativeImage } from "../../utils/urls";

interface SearchResults {
  data: Results;
}

export default function SearchedResults({
  data: {
    id,
    poster_path,
    first_air_date,
    original_name,
    release_date,
    title,
    profile_path,
  },
}: SearchResults) {
  const router = useRouter();

  const handleClick = (): void => {
    if (release_date || title) {
      router.push(`/movies/${id}`);
    } else if (first_air_date || original_name) {
      router.push(`/tvshows/${id}`);
    } else if (profile_path) {
      router.push(`/actors/${id}`);
    }
  };

  return (
    <div
      className='w-[155px] md:w-[175px] cursor-pointer'
      onClick={handleClick}
    >
      <Image
        src={
          poster_path || profile_path
            ? `${posterURL}${poster_path || profile_path}`
            : alternativeImage
        }
        height='300'
        width='300'
        alt={original_name || title}
        className='rounded-lg h-full'
      />
    </div>
  );
}
