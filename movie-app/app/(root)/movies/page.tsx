import { getPopularMovies } from "@/api/movies";
import ButtonTheme from "@/components/ButtonTheme";
import GenreSelect from "@/components/genre/GenreSelect";
import MovieCard from "@/components/movie/MovieCard";
import React from "react";

const MoviesPage = async ({
  searchParams,
}: {
  searchParams: { genre?: string };
}) => {
  const params = await searchParams;
  const genre = params.genre ? Number(params.genre) : null;
  const data = await getPopularMovies({ genre });

  return (
    <div className="container grid place-items-center gap-4">
      <div className="flex flex-col items-center w-4/5">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Popular Movies
        </h1>
        <div className="flex justify-between w-full mb-5 mt-8">
          {/* <div className="self-start"> */}
          <GenreSelect />
          {/* </div> */}
          <ButtonTheme />
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
