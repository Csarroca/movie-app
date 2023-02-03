import {
  addMovieApi,
  changeWatchedMovieApi,
  deleteMovieApi,
  updateMovieApi,
} from "../../../services/movies";
import {
  addMovieToStore,
  deleteMovieFromStore,
  setMovieWatched,
  setIsLoading,
  setUpdateMovie,
} from "./moviesSlice";

const useApi = () => {
  const createMovie = (movie) => async (dispatch) => {
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

  const deleteMovie = (id) => async (dispatch) => {
    let response;
    try {
      dispatch(setIsLoading(true));

      response = await deleteMovieApi(id);
      dispatch(deleteMovieFromStore(id));
    } catch (error) {
    } finally {
      dispatch(setIsLoading(false));
    }
    return response;
  };

  const changeWatchedMovie = (id) => async (dispatch) => {
    let response;
    try {
      dispatch(setIsLoading(true));

      response = await changeWatchedMovieApi(id);
      dispatch(setMovieWatched(id));
    } catch (error) {
    } finally {
      dispatch(setIsLoading(false));
    }

    return response;
  };
  const updateMovie = (movie) => async (dispatch) => {
    let response;
    try {
      dispatch(setIsLoading(true));
      response = await updateMovieApi(movie);
      dispatch(setUpdateMovie(movie));
    } catch (error) {
    } finally {
      dispatch(setIsLoading(false));
    }
    return response;
  };

  return { createMovie, deleteMovie, changeWatchedMovie, updateMovie };
};

export default useApi;
