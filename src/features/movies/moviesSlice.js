import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  isLoading: false,
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
});

export const {} = moviesSlice.actions;

export const moviesReducer = moviesSlice.reducer;
