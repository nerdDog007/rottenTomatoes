import express from 'express';
import {
  getMoviesByGenre,
  getMovieById,
  getMoviesByGenreParam,
  getMovieByTitle
} from '../controllers/movieController.js';

const router = express.Router();

router.get('/api/movies', getMoviesByGenre);
router.get('/api/moviess/:id', getMovieById);
router.get('/api/movies/:genre', getMoviesByGenreParam);
router.get('/api/movie', getMovieByTitle);

export default router;