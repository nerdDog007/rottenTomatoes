


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
app.use(express.json()); // ✅ This parses incoming JSON bodies
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

app.get('/api/movies/:genre', async (req, res) => {
  const {genre} = req.params;
  const movies = await Movie.find({adult:false,genre:genre}).limit(20);
  res.json(movies).status(200);
});

const userSchema = new mongoose.Schema({
  email:{
    type:String,
    required:true,
    unique:true
  },
  password:{
    type:String,
    required:true
  
  },
  likedMovies:[String],
  likedGenres:[String],
  bookmarkedMovies:[String],
  watchedMovies:[String],
  watchedGenres:[String]
});

const User = mongoose.model('User', userSchema);

app.post('/auth/register', async (req, res) => {
})

app.post('/auth/login', async (req, res) => {
  const {email,password} = req.body;
  const user = await User.findOne({email:email});
  if(user){
    if(user.password===password){
      console.log("this")
      res.status(200).json({ validation:true,email:email,password:password });
    }
    else{
      res.status(400).json({ validation:false,error:'Invalid Email or Password'});
    }
  }
  else if(!user){
    const newUser = new User({email,password});
    await newUser.save();
    res.status(200).json({ validation:true,email:email,password:password });
  }
});
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
