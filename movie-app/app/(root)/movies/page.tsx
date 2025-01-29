import { getPopularMovies } from "@/api/movies";
import GenreSelect from "@/components/genre/GenreSelect";
import MovieCard from "@/components/movie/MovieCard";
import React from "react";

const MoviesPage = async () => {
  const data = await getPopularMovies();
  return (
    <div className="container grid place-items-center gap-4">
      <div className="flex flex-col items-center w-4/5">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Popular Movies
        </h1>
        <div className="self-start">
          <GenreSelect />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((movie, i) => (
          <MovieCard data={movie} key={i} />
        ))}
      </div>
    </div>
  );
};

export default MoviesPage;
