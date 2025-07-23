import Movie from '../models/Movie.js';

export const getMoviesByGenre = async (req, res) => {
  const { genre } = req.query;
  const movies = await Movie.find({ adult: false, genre }).limit(8);
  res.status(200).json(movies);
};

export const getMovieById = async (req, res) => {
  const { id } = req.params;
  const movie = await Movie.findOne({ id });
  res.status(200).json(movie);
};

export const getMoviesByGenreParam = async (req, res) => {
  const { genre } = req.params;
  const movies = await Movie.find({ adult: false, genre }).limit(20);
  res.status(200).json(movies);
};

export const getMovieByTitle = async (req, res) => {
  const { movieName } = req.query;
  const movie = await Movie.find({ title: movieName });
  res.status(200).json(movie);
};
