import Slider from "../components/Slider";
import { baseURL } from "../utils/urls";
import Banner from "../components/Banner";

const getTrending = async () => {
  const res = await fetch(
    `${baseURL}/trending/all/day?api_key=${process.env.API_KEY}`,
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

export default async function Home() {
  const trendingShows = await getTrending();
  const popularShows = await getPopularShows();
  const popularMovies = await getPopularMovies();

  const [trending, shows, movies] = await Promise.all([
    trendingShows,
    popularShows,
    popularMovies,
  ]);
  return (
    <div className='font-bold text-white'>
      <Banner data={trending} />
      <Slider title='Trending Now' sliderID='1' data={trending} />
      <Slider title='TV Shows' sliderID='2' data={shows} />
      <Slider title='Movies' sliderID='3' data={movies} />
    </div>
  );
}
