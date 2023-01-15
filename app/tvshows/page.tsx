import React from "react";

import Slider from "../components/Slider";
import { baseURL } from "../../utils/urls";

const getTrendingShows = async () => {
  const res = await fetch(
    `${baseURL}/trending/tv/day?api_key=${process.env.API_KEY}`,
    { next: { revalidate: 30 } }
  );

  if (!res.ok) {
    throw new Error("Data not fetched!");
  }

  return res.json();
};

const getPopularShows = async () => {
  const res = await fetch(
    `${baseURL}/tv/popular?api_key=${process.env.API_KEY}`,
    { next: { revalidate: 30 } }
  );

  if (!res.ok) {
    throw new Error("Data not fetched!");
  }

  return res.json();
};
const getTopRatedShows = async () => {
  const res = await fetch(
    `${baseURL}/tv/top_rated?api_key=${process.env.API_KEY}`,
    { next: { revalidate: 30 } }
  );

  if (!res.ok) {
    throw new Error("Data not fetched!");
  }

  return res.json();
};

const getAiringToday = async () => {
  const res = await fetch(
    `${baseURL}/tv/airing_today?api_key=${process.env.API_KEY}`,
    { next: { revalidate: 30 } }
  );

  if (!res.ok) {
    throw new Error("Data not fetched!");
  }

  return res.json();
};

export default async function TvShows() {
  const trendingShows = await getTrendingShows();
  const popularShows = await getPopularShows();
  const topRatedShows = await getTopRatedShows();
  const airingToday = await getAiringToday();

  const [trending, popular, topRated, airing] = await Promise.all([
    trendingShows,
    popularShows,
    topRatedShows,
    airingToday,
  ]);
  return (
    <div>
      <Slider title='Trending Now' sliderID='1' data={trending} />
      <Slider title='Popular' sliderID='2' data={popular} />
      <Slider title='Top Rated' sliderID='3' data={topRated} />
      <Slider title='Airing Today' sliderID='4' data={airing} />
    </div>
  );
}
