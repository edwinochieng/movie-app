import React from "react";
import { baseURL } from "../../utils/urls";
import SearchBar from "../../components/Search";
import SearchedResults from "../../components/Results";
import { Results } from "../../utils/interfaces";

const getTrending = async () => {
  const res = await fetch(
    `${baseURL}/trending/all/week?api_key=${process.env.API_KEY}`,
    { next: { revalidate: 30 } }
  );

  if (!res.ok) {
    throw new Error("Data not fetched!");
  }

  return res.json();
};
export default async function Search() {
  const data = await getTrending();
  return (
    <div>
      <div className='pt-1'>
        <SearchBar />
      </div>
      <div className='pt-3'>
        <h1 className='text-white font-bold text-2xl text-center'>
          Popular Searches
        </h1>
        <div className='pt-3 flex flex-wrap justify-center gap-3'>
          {data?.results?.slice(0, 14).map((movie: Results) => (
            <SearchedResults key={movie.id} data={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}
