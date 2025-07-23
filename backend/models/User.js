import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  likedMovies: [String],
  likedGenres: [String],
  bookmarkedMovies: [String],
  watchedMovies: [String],
  watchedGenres: [String]
});

export default mongoose.model('User', userSchema);