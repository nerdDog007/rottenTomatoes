// moviesSlice.js
import { createSlice } from "@reduxjs/toolkit";

// ✅ Genre list for dynamic state & reducer creation
const genres = [
  "thriller", "action", "adventure", "animation", "comedy",
  "crime", "documentary", "drama", "family", "fantasy",
  "history", "horror", "music", "mystery", "romance",
  "sci_fi", "sport", "war", "western"
];

// ✅ Initial State
const initialState = {
  movies: [],
  isLoading: true,
  error: null,
  nowShowing: [],
  imageUrl: "https://image.tmdb.org/t/p/w500/",
};

// Add empty arrays for each genre
genres.forEach(genre => {
  initialState[genre] = [];
});

// ✅ Slice
export const moviesSlice = createSlice({
  name: "moviesHero",
  initialState,
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
    setNowShowing: (state, action) => {
      state.nowShowing = action.payload;
    },

    // ✅ Dynamically generate reducers like setAction, setThriller, etc.
    ...Object.fromEntries(
      genres.map(genre => [
        `set${capitalize(genre)}`,
        (state, action) => {
          state[genre] = action.payload;
        }
      ])
    ),
  },
});

// ✅ Helper function to capitalize camelCase reducer names
function capitalize(str) {
  return str
    .split("_")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
}

// ✅ Export actions and reducer
export const {
  setMovies,
  setIsLoading,
  setError,
  setNowShowing,
  ...genreActions // You can access dynamically generated ones from here
} = moviesSlice.actions;

export default moviesSlice.reducer;
