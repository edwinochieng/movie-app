import Slider from "./components/Slider";
import { baseURL } from "../utils/urls";

const getTrending = async () => {
  const res = await fetch(
    `${baseURL}/trending/all/day?api_key=${process.env.API_KEY}`
  );

  if (!res.ok) {
    throw new Error("Data not fetched!");
  }

  return res.json();
};
export default async function Home() {
  const data = await getTrending();
  console.log(data);

  return (
    <div className='font-bold text-white'>
      <Slider title='Trending Now' sliderID='1' data={data} />
    </div>
  );
}
