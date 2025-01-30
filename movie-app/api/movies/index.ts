export type Movie = {
  id: number;
  title: string;
  popularity: number;
  release_date: string;
  backdrop_path: string;
  genre_ids: number[];
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
export const getPopularMovies = async ({
  genre: id_genre,
}: {
  genre: number | null;
}): Promise<Movie[]> => {
  const res = await fetch(`${process.env.BASE_URL}movie/popular`, {
    headers: {
      Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
    },
  });

  const data = (await res.json()).results as Movie[];

  if (id_genre) {
    const dataFiltered = data.filter((movie) =>
      movie.genre_ids.includes(id_genre)
    );
    console.log(dataFiltered);

    return dataFiltered;
  }
  return data;
};
