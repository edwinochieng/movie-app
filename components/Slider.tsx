"use client";

import React from "react";
import MovieCard from "./MovieCard";
import { MdChevronRight, MdChevronLeft } from "react-icons/md";
import { Data } from "../utils/interfaces";

interface Props {
  title: string;
  sliderID: string;
  data: Data;
}

export default function Slider({ title, sliderID, data }: Props) {
  const slideLeft = (): void => {
    var slider = document.getElementById("slider" + sliderID) as HTMLElement;
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = (): void => {
    var slider = document.getElementById("slider" + sliderID) as HTMLElement;
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div>
      <h2 className='text-white font-bold md:text-xl px-1 py-2 md:py-4'>
        {title}
      </h2>
      <div className='relative group flex items-center'>
        <MdChevronLeft
          className='absolute left-0 rounded-full bg-white text-black/70 hover:text-black opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
          onClick={slideLeft}
          size={35}
        />
        <div
          id={"slider" + sliderID}
          className='h-full w-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'
        >
          {data?.results?.map((movie: any) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
        <MdChevronRight
          className='absolute right-0 rounded-full bg-white text-black/50 hover:text-black opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
          onClick={slideRight}
          size={35}
        />
      </div>
    </div>
  );
}
