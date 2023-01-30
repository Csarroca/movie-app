import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  isLoading: false,
  id: 0,
  error: null,
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovieToStore: (state, { payload }) => {
      state.movies.push({ ...payload, id: state.id });
      state.id += 1;
    },
    deleteMovieFromStore: (state, { payload }) => {
      state.movies = state.movies.filter((movie) => movie.id !== payload);
    },
    setMovieWatched: (state, { payload }) => {
      state.movies.forEach((movie) =>
        movie.id === payload ? (movie.watched = !movie.watched) : movie.watched
      );
      state.movies.sort((movie1, movie2) => movie1.watched - movie2.watched);
      state.movies.sort((movie1, movie2) => movie1.id - movie2.id);
    },
    setIsLoading: (state, { payload }) => {
      state.isLoading = payload;
    },
    setUpdateMovie: (state, { payload }) => {
      state.movies.find((e) => e.id === payload.id)[payload.name] =
        payload.value;
      state.movies.sort((movie1, movie2) => movie1.id - movie2.id);
      state.movies.sort((movie1, movie2) => movie1.watched - movie2.watched);
    },
  },
});

export const {
  addMovieToStore,
  deleteMovieFromStore,
  setMovieWatched,
  setIsLoading,
  setUpdateMovie,
} = moviesSlice.actions;

export const moviesReducer = moviesSlice.reducer;
