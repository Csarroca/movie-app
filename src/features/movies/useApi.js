import {
  addMovieApi,
  changeWatchedMovieApi,
  deleteMovieToApi,
} from "../../services/movies";
import {
  addMovieToStore,
  deleteMovieFromStore,
  setMovieWatched,
} from "./moviesSlice";

export const createMovie = (movie) => async (dispatch) => {
  let response;
  try {
    response = await addMovieApi(movie);
    dispatch(addMovieToStore(movie));
  } catch (error) {}
  return response;
};

export const deleteMovie = (id) => async (dispatch) => {
  let response;
  try {
    response = await deleteMovieToApi(id);
    dispatch(deleteMovieFromStore(id));
  } catch (error) {}
  return response;
};

export const changeWatchedMovie = (id) => async (dispatch) => {
  let response;
  try {
    response = await changeWatchedMovieApi(id);
    dispatch(setMovieWatched(id));
  } catch (error) {}
  return response;
};
