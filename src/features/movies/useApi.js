import {
  addMovieApi,
  changeWatchedMovieApi,
  deleteMovieToApi,
} from "../../services/movies";
import {
  addMovieToStore,
  deleteMovieFromStore,
  setMovieWatched,
  setIsLoading,
} from "./moviesSlice";

export const createMovie = (movie) => async (dispatch) => {
  let response;
  try {
    dispatch(setIsLoading(true));

    response = await addMovieApi(movie);
    dispatch(addMovieToStore(movie));
  } catch (error) {
  } finally {
    dispatch(setIsLoading(false));
  }
  return response;
};

export const deleteMovie = (id) => async (dispatch) => {
  let response;
  try {
    dispatch(setIsLoading(true));

    response = await deleteMovieToApi(id);
    dispatch(deleteMovieFromStore(id));
  } catch (error) {
  } finally {
    dispatch(setIsLoading(false));
  }
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
