import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { genreActions, setMovies } from '../../redux/Movies/movies';
import useGenreMovies from '../../hooks/getMovies';
import NavBar from '../../layouts/NavBar';
import Header from '../../components/Header';
import HighLight from '../../components/HighLight';
import NowShowing from '../../layouts/NowShowing';
import MovieList from '../../components/MovieList';

function LandingPage() {
  const dispatch = useDispatch();
  const { movies: thrillerMovies } = useGenreMovies('Thriller');
  const { movies: RomanceMovies } = useGenreMovies('Romance');
  const { movies: actionMovies } = useGenreMovies('Action');

  useEffect(() => {
    if (thrillerMovies?.length > 0) {
      dispatch(genreActions.setThriller(thrillerMovies));
    }

    if (actionMovies?.length > 0) {
      dispatch(setMovies(actionMovies)); // Featured movies
    }
  }, [thrillerMovies, actionMovies, dispatch]);

  return (
    <div className="lg:w-[60vw] flex flex-col overflow-x-hidden lg:h-fit mx-auto">
      <Header />
      <NavBar />
      <HighLight />
      <NowShowing />
      <MovieList movies={thrillerMovies} />
    </div>
  );
}

export default LandingPage;
