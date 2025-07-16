


import mongoose from 'mongoose';
import dotenv from 'dotenv';
import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

dotenv.config();
const app = express();
app.use(cors({
  origin: '*', // Or specify frontend domain like 'http://localhost:3000'
  methods: ['GET', 'POST']
}));

const port = process.env.PORT || 5000;
const uri = process.env.MONGODB_URI;

const movieSchema = new mongoose.Schema({
  adult: Boolean,
  backdrop_path: String,
  genre_ids: [Number],
  id: Number,
  original_language: String,
  original_title: String,
  overview: String,
  poster_path: String,
  release_date: String,
  title: String,
  video: Boolean,
  vote_average: Number,
  vote_count: Number,
  genre: String
});

const Movie = mongoose.model('Movie', movieSchema);

// const v = Movie.find({adult:false,genre:"Thriller"});

// // v.then(movies => {
// //   console.log(movies);
// // });

app.get('/api/movies', async (req, res) => {
  // const movies = await Movie.find({adult:false,genre:"Thriller"}).limit(20);
  // res.json(movies).status(200);
  console.log(req.query)
  const {genre} = req.query;
  const movies = await Movie.find({adult:false,genre:genre}).limit(8);
  res.json(movies).status(200);
});

// ✅ Connect DB, then fetch movies
async function startServer() {
  try {
    await mongoose.connect(uri);

    app.listen(port, () => {
      console.log(`🚀 Server is running on port ${port}`);
    });

  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  }
}

startServer();
