import { getPopularMovies } from "@/api/movies";
import MovieCard from "@/components/movie/MovieCard";
import React from "react";

const MoviesPage = async () => {
  const data = await getPopularMovies();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 container">
      {data.map((movie, i) => (
        <MovieCard data={movie} key={i} />
      ))}
    </div>
  );
};

export default MoviesPage;
