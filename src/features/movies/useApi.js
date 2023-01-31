import {
  addMovieApi,
  changeWatchedMovieApi,
  deleteMovieToApi,
  updateMovieToApi,
} from "../../services/movies";
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

      response = await deleteMovieToApi(id);
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
      response = await changeWatchedMovieApi(id);
      dispatch(setMovieWatched(id));
    } catch (error) {}
    return response;
  };
  const updateMovie = (movie) => async (dispatch) => {
    let response;
    try {
      dispatch(setIsLoading(true));
      response = await updateMovieToApi(movie);
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
