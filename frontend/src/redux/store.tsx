import { configureStore } from "@reduxjs/toolkit";

import moviesReducer from "./Movies/movies";

const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});

export default store;