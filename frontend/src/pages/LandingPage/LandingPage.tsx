import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { genreActions, setMovies } from '../../redux/slices/movies';
import useGenreMovies from '../../hooks/getMoviesByGenre';
import NavBar from '../../layouts/NavBar';
import Header from '../../components/Header';
import HighLight from '../../components/HighLight';
import NowShowing from '../../layouts/NowShowing';
import MovieList from '../../components/MovieList';
import Footer from '../../layouts/Footer';
import Auth from '../../components/Auth';

function LandingPage() {
  const dispatch = useDispatch();
  const { movies: thrillerMovies } = useGenreMovies('Thriller');
  const { movies: actionMovies } = useGenreMovies('Action');
  const { movies: WarMovies } = useGenreMovies('War');
  const {movies: horrorMovies} = useGenreMovies('Drama');
  // sci_fi
  const {movies:scifiMovies} = useGenreMovies('ScienceFiction');
  console.log(scifiMovies)

  useEffect(() => {
    if (thrillerMovies?.length > 0) {
      dispatch(genreActions.setThriller(thrillerMovies));
    }

    if (actionMovies?.length > 0) {
      dispatch(setMovies(actionMovies)); // Featured movies
    }
  }, [thrillerMovies, actionMovies, dispatch]);

  return (
    <div className="lg:w-[60vw] flex flex-col relative overflow-x-hidden h-fit mx-auto">
      <Header />
      <NavBar />
      <HighLight />
      <NowShowing />
      <MovieList movies={thrillerMovies} title="Thriller" />
      <MovieList movies={actionMovies} title="Action" />
      <MovieList movies={WarMovies} title="War" />
      <Footer />
      <Auth />
    </div>
  );
}

export default LandingPage;
