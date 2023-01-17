import Image from "next/image";
import React from "react";
import { baseURL, posterURL } from "../../../utils/urls";

const getActorDetails = async (id: number) => {
  const res = await fetch(
    `${baseURL}/person/${id}?api_key=${process.env.API_KEY}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Data not fetched!");
  }

  return res.json();
};
export default async function Actor({ params }: { params: { id: number } }) {
  const data = await getActorDetails(params.id);

  return (
    <div className='w-full grid place-items-center'>
      <div className='flex flex-col lg:flex-row'>
        <div className='w-[300px]'>
          <Image
            src={`${posterURL}${data?.profile_path}`}
            height='300'
            width='300'
            alt={data?.name}
            className='rounded-lg'
          />
        </div>
        <div className='lg:pl-8'>
          <h1 className='text-3xl text-white font-bold'>{data?.name}</h1>
          <div className='flex text-sm text-gray-400 font-semibold py-1'>
            <span>Date of Birth: {data?.birthday}</span>
            {data?.deathday && (
              <span className='pl-4'>Died: {data?.deathday}</span>
            )}
          </div>
          <div className='max-w-[700px]'>
            <h1 className='text-xl text-gray-100 font-semibold'>Biography</h1>
            <p className='text-sm md:text-base text-gray-300'>
              {data?.biography}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
