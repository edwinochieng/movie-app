import React from "react";
import { Results } from "../../../utils/interfaces";
import { baseURL } from "../../../utils/urls";
import SearchedResults from "../../components/Results";

const getSearched = async (query: string) => {
  const res = await fetch(
    `${baseURL}/search/multi?api_key=${process.env.API_KEY}&&query=${query}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Data not fetched!");
  }

  return res.json();
};

export default async function SearchResults({
  params,
}: {
  params: { slug: string };
}) {
  const data = await getSearched(params.slug);

  return (
    <div>
      <h1 className='text-white font-bold text-2xl text-center'>
        Search Results
      </h1>
      <div className='pt-3 flex flex-wrap justify-center gap-3'>
        {data?.results.map((item: Results) => (
          <SearchedResults key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}
