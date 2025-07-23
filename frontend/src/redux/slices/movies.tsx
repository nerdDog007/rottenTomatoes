// moviesSlice.js
import { createSlice } from "@reduxjs/toolkit";

const genres = [
  "thriller", "action", "adventure", "animation", "comedy",
  "crime", "documentary", "drama", "family", "fantasy",
  "history", "horror", "music", "mystery", "romance",
  "sci_fi", "sport", "war", "western"
];

const initialState = {
  movies: [],
  isLoading: true,
  error: null,
  nowShowing: [],
  imageUrl: "https://image.tmdb.org/t/p/w500/",
  search:'',
  searchResults:[],
  movieDetails:{},
};

genres.forEach(genre => {
  initialState[genre] = [];
});


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
    setSearch: (state, action) => {
      state.search = action.payload
    },
    setSearchResults: (state, action) => {
      state.searchResults = action.payload
    },
    setMovieDetails: (state, action) => {
      state.movieDetails = action.payload
    },

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
  setSearch,
  setSearchResults,
  setMovieDetails,
  ...genreActions // You can access dynamically generated ones from here
} = moviesSlice.actions;

export default moviesSlice.reducer;
