import Movie from './components/Movie/Movie';
import { movies } from './movieDummy';
import { AppContainerBox } from './components/Movie/movie.stlye';

function App() {
  return (
    <div>
      <AppContainerBox>
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
      </AppContainerBox>
    </div>
  );
}
export default App;
