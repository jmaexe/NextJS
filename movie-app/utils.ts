export const getMovies = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.PUBLIC_KEY}`,
      },
    }
  );
  const data = await response.json();
  return data.results;
};
