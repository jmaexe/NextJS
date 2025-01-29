type Genre = { id: number; name: string };
export const getMovieGenres = async (): Promise<Genre[]> => {
  const res = await fetch(`${process.env.BASE_URL}genre/movie/list`, {
    headers: {
      Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
    },
  });
  const data = await res.json();
  return data.genres;
};
