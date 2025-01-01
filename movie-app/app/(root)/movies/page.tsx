import { Movie } from "@/types";
import { getMovies } from "@/utils";

const MoviesPage = async () => {
  const movies: Movie[] = await getMovies();
  return (
    <>
      <div>TITLE</div>
      {movies.map((movie) => (
        <div key={movie.id}>{movie.title}</div>
      ))}
    </>
  );
};

export default MoviesPage;
