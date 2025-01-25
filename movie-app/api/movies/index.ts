export type Movie = {
  id: string;
  title: string;
  popularity: number;
  release_date: string;
  backdrop_path: string;
};

export type MovieDetails = Movie & {
  budget: number;
  genres: { id: number; name: string }[];
  overview: string;
  poster_path: string;
  runtime: number;
  vote_average: number;
  vote_count: number;
};
export const getPopularMovies = async (): Promise<Movie[]> => {
  const res = await fetch(`${process.env.BASE_URL}movie/popular`, {
    headers: {
      Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
    },
  });
  console.log(JSON.stringify(res));
  const data = await res.json();
  return data.results;
};
