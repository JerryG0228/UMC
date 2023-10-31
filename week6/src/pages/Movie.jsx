import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import MovieDetail from '../components/MovieDetail';

export default function Movie() {
  const { title } = useParams();
  const { state } = useLocation();

  console.log(title);
  console.log(state);

  return <MovieDetail title={title} poster_path={state.poster_path} />;
}
