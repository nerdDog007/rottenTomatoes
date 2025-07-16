import { createSlice } from "@reduxjs/toolkit";

export const moviesSlice = createSlice({
  name: "moviesHero",
  initialState: {
    movies: [],
    isLoading: true,
    error: null,
    imageUrl:"https://image.tmdb.org/t/p/w500/"
  },
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setMovies, setIsLoading, setError } = moviesSlice.actions;

export default moviesSlice.reducer;