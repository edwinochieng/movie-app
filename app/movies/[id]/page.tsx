import React from "react";

import { baseURL } from "../../../utils/urls";
import Details from "../../../components/Details";
import Slider from "../../../components/Slider";

const getMovieDetails = async (id: number) => {
  const res = await fetch(
    `${baseURL}/movie/${id}?api_key=${process.env.API_KEY}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Data not fetched!");
  }

  return res.json();
};

const getMovieRecommendations = async (id: number) => {
  const res = await fetch(
    `${baseURL}/movie/${id}/recommendations?api_key=${process.env.API_KEY}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Data not fetched!");
  }

  return res.json();
};

export default async function MovieDetails({
  params,
}: {
  params: { id: number };
}) {
  const movieDetails = await getMovieDetails(params.id);
  const movieRecommendations = await getMovieRecommendations(params.id);

  const [details, recommendations] = await Promise.all([
    movieDetails,
    movieRecommendations,
  ]);

  return (
    <div>
      <Details data={details} />
      <Slider title='You May Also Like' sliderID='1' data={recommendations} />
    </div>
  );
}
