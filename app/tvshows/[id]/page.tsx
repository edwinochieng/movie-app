import React from "react";
import { baseURL } from "../../../utils/urls";
import Details from "../../../components/Details";
import Slider from "../../../components/Slider";
import type { Metadata, ResolvingMetadata } from "next";

const getTvDetails = async (id: number) => {
  const res = await fetch(
    `${baseURL}/tv/${id}?api_key=${process.env.API_KEY}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Data not fetched!");
  }

  return res.json();
};

const getTvRecommendations = async (id: number) => {
  const res = await fetch(
    `${baseURL}/tv/${id}/recommendations?api_key=${process.env.API_KEY}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Data not fetched!");
  }

  return res.json();
};

export async function generateMetadata(
  { params }: { params: { id: number } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.id;

  const tvDetails = await getTvDetails(id);

  return {
    title: tvDetails.title,
  };
}

export default async function ShowDetails({
  params,
}: {
  params: { id: number };
}) {
  const tvDetails = await getTvDetails(params.id);
  const tvRecommendations = await getTvRecommendations(params.id);

  const [details, recommendations] = await Promise.all([
    tvDetails,
    tvRecommendations,
  ]);

  return (
    <div>
      <Details data={details} />
      {recommendations.results.length > 0 && (
        <Slider title='You May Also Like' sliderID='1' data={recommendations} />
      )}
    </div>
  );
}
