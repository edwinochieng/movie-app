import React from "react";
import { baseURL } from "../../../utils/urls";

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

  return <div>SearchResults</div>;
}
