import React from 'react';
import Movie from '../components/Moviebox';
import { movies } from '../movieDummy';

export default function Movies() {
  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {movies.results.map((movie) => {
          return (
            <Movie
              title={movie.title}
              poster_path={movie.poster_path}
              vote_average={movie.vote_average}
              overview={movie.overview}
            />
          );
        })}
      </div>
    </div>
  );
}
