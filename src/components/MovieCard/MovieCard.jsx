import { useDispatch } from "react-redux";
import { changeWatchedMovie, deleteMovie } from "../../features/movies/useApi";
import Button from "../Button/Button";
import MovieCardStyled from "./MovieCardStyled";

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();

  const { name, genres, watched, id } = movie;

  const toggleWhatched = () => {
    dispatch(changeWatchedMovie(id));
  };

  const handleDelete = (event) => {
    event.preventDefault();

    dispatch(deleteMovie(id));
  };

  return (
    <MovieCardStyled className="card" data-testid="card">
      <div className="card-info">
        <h2 className="title">{name}</h2>

        <ul className="card-info__genres">
          {genres.map((genre) => {
            return (
              <li className="tag" key={genre}>
                {genre}
              </li>
            );
          })}
        </ul>

        <div>
          <input
            id={name}
            data-testid="checkbox"
            className="checkbox"
            name={name}
            type="checkbox"
            onChange={toggleWhatched}
            required="required"
            checked={watched}
          />
          <span />
          <label htmlFor={name} className="checkbox-label">
            watched movie
          </label>
        </div>

        <Button
          className="delete-button"
          buttonText="delete"
          type="button"
          onClick={handleDelete}
        />
      </div>
    </MovieCardStyled>
  );
};

export default MovieCard;
