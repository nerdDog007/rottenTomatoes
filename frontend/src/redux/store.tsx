import { configureStore } from "@reduxjs/toolkit";

import moviesReducer from "./slices/movies";
import authReducer from "./slices/auth";


const store = configureStore({
  reducer: {
    movies: moviesReducer,
    auth: authReducer,
  },
});

export default store;