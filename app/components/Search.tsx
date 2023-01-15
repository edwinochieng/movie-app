"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { MdOutlineSearch } from "react-icons/md";

export default function SearchBar() {
  const [query, setQuery] = useState<string>("");
  const router = useRouter();

  const handleSubmit = (e: any): void => {
    e.preventDefault();
    router.push(`/search/${query}`);
  };

  return (
    <div className='relative max-w-[560px] mx-auto w-full'>
      <form
        onSubmit={handleSubmit}
        className='relative flex items-center w-full h-10 shadow-2xl shadow-gray-500 rounded-lg focus-within:shadow-xl bg-white overflow-hidden'
      >
        <input
          className='h-full w-full outline-none text-[14px] font-medium text-gray-800 pl-3 placeholder:text-gray-400'
          type='text'
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          placeholder='Search Movie, Tv Show or Actors..'
        />
        <div className='grid place-items-center h-full w-12 text-gray-500 cursor-pointer'>
          <MdOutlineSearch onClick={handleSubmit} size={20} />
        </div>
      </form>
    </div>
  );
}
