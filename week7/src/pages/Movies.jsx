import React from 'react';
import { movies } from '../movieDummy';
import MovieBox from '../components/MovieBox';

export default function Movies() {
  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {movies.results.map((movie) => {
          return (
            <MovieBox
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
