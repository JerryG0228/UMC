import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Celebrity from './pages/Celebrity';
import Home from './pages/Home';
import Movies from './pages/Movies';
import NotFound from './pages/NotFound';
import Tv from './pages/TV';
import Movie from './pages/Movie';
import LoginPage from './pages/LoginPage';
import Program from './pages/Program';

function App() {
  return (
    <div className='root-wrap'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/tv' element={<Tv />} />
          <Route path='/person' element={<Celebrity />} />
          <Route path='/*' element={<NotFound />} />
          <Route path='/movies/:title' element={<Movie />} />
          <Route path='/tv/:title' element={<Program />} />
          <Route path='/loginpage' element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
