import { useDispatch } from "react-redux";
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
  setError,
} from "./moviesSlice";

const useApi = () => {
  const dispatch = useDispatch();
  const createMovie = async (movie) => {
    let response;
    try {
      dispatch(setIsLoading(true));

      response = await addMovieApi(movie);
      dispatch(addMovieToStore(movie));
    } catch (error) {
      dispatch(setError(error.message));
    } finally {
      dispatch(setIsLoading(false));
    }
    return response;
  };

  const deleteMovie = async (id) => {
    let response;
    try {
      dispatch(setIsLoading(true));

      response = await deleteMovieApi(id);
      dispatch(deleteMovieFromStore(id));
    } catch (error) {
      dispatch(setError(error.message));
    } finally {
      dispatch(setIsLoading(false));
    }
    return response;
  };

  const changeWatchedMovie = async (id) => {
    let response;
    try {
      dispatch(setIsLoading(true));

      response = await changeWatchedMovieApi(id);
      dispatch(setMovieWatched(id));
    } catch (error) {
      dispatch(setError(error.message));
    } finally {
      dispatch(setIsLoading(false));
    }

    return response;
  };
  const updateMovie = async (movie) => {
    let response;
    try {
      dispatch(setIsLoading(true));
      response = await updateMovieApi(movie);
      dispatch(setUpdateMovie(movie));
    } catch (error) {
      dispatch(setError(error.message));
    } finally {
      dispatch(setIsLoading(false));
    }
    return response;
  };

  return { createMovie, deleteMovie, changeWatchedMovie, updateMovie };
};

export default useApi;
