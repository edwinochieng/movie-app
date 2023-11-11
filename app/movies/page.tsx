import React from "react";
import Slider from "../../components/Slider";
import { baseURL } from "../../utils/urls";

const getTrendingMovies = async () => {
  const res = await fetch(
    `${baseURL}/trending/movie/day?api_key=${process.env.API_KEY}`,
    { next: { revalidate: 30 } }
  );

  if (!res.ok) {
    throw new Error("Data not fetched!");
  }

  return res.json();
};

const getPopularMovies = async () => {
  const res = await fetch(
    `${baseURL}/movie/popular?api_key=${process.env.API_KEY}`,
    { next: { revalidate: 30 } }
  );

  if (!res.ok) {
    throw new Error("Data not fetched!");
  }

  return res.json();
};
const getTopRatedMovies = async () => {
  const res = await fetch(
    `${baseURL}/movie/top_rated?api_key=${process.env.API_KEY}`,
    { next: { revalidate: 30 } }
  );

  if (!res.ok) {
    throw new Error("Data not fetched!");
  }

  return res.json();
};

const getNowPlaying = async () => {
  const res = await fetch(
    `${baseURL}/movie/now_playing?api_key=${process.env.API_KEY}`,
    { next: { revalidate: 30 } }
  );

  if (!res.ok) {
    throw new Error("Data not fetched!");
  }

  return res.json();
};
export default async function MoviesPage() {
  const trendingMovies = await getTrendingMovies();
  const popularMovies = await getPopularMovies();
  const topRatedMovies = await getTopRatedMovies();
  const nowPlaying = await getNowPlaying();

  const [trending, popular, topRated, inTheatres] = await Promise.all([
    trendingMovies,
    popularMovies,
    topRatedMovies,
    nowPlaying,
  ]);

  return (
    <div>
      <Slider title='Trending Now' sliderID='1' data={trending} />
      <Slider title='Popular' sliderID='2' data={popular} />
      <Slider title='Top Rated' sliderID='3' data={topRated} />
      <Slider title='In Theatres' sliderID='4' data={inTheatres} />
    </div>
  );
}
