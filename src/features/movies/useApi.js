import { addMovieApi } from "../../services/movies";
import { addMovie } from "./moviesSlice";

export const createMovie = (movie) => async (dispatch) => {
  let response;
  try {
    response = await addMovieApi(movie);
    dispatch(addMovie(movie));
  } catch (error) {}
  return response;
};
