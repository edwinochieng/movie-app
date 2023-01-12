
export interface Results {
    adult: boolean;
    id: number;
    backdrop_path: string | null;
    poster_path: string;
    title: string;
    overview: string;
    release_date: string;
    vote_average: number;
    original_name: string;
    first_air_date: string;
    original_title: string;
    genres: Genres[]
    video:boolean
    last_air_date:string
    number_of_seasons:number
    status:string
 }

type Genres = {
    id:number,
    name:string
}

export type Data = { results: Results[] };