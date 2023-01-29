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
    addMovie: (state, { payload }) => {
      state.movies.push({ ...payload, id: state.id });
      state.id += 1;
    },
  },
});

export const { addMovie } = moviesSlice.actions;

export const moviesReducer = moviesSlice.reducer;
