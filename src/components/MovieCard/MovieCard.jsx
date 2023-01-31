import { useState } from "react";
import { useDispatch } from "react-redux";
import useApi from "../../features/movies/useApi";
import Button from "../Button/Button";
import Input from "../Input/Input";
import MovieCardStyled from "./MovieCardStyled";

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();
  const [openUpdate, setOpenUpdate] = useState(false);
  const { deleteMovie, changeWatchedMovie, updateMovie } = useApi();
  const { name, genres, watched, id } = movie;

  const [inputValue, setInputValue] = useState(movie.name);

  const toggleWhatched = () => {
    dispatch(changeWatchedMovie(id));
  };

  const handleDelete = (event) => {
    event.preventDefault();

    dispatch(deleteMovie(id));
  };

  const handleEdit = () => {
    dispatch(updateMovie({ ...movie, name: inputValue }));
    setOpenUpdate(false);
  };
  return (
    <MovieCardStyled className="card" data-testid="card">
      <div className="card-info">
        {openUpdate ? (
          <div className="card-info__input-edit">
            <Input
              placeholder="Edit the movie's name"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              name="editName"
            />

            <Button
              className="save-button"
              buttonText="edit"
              type="button"
              onClick={handleEdit}
            />
          </div>
        ) : (
          <>
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

            <Button
              className="save-button"
              buttonText="edit"
              type="button"
              onClick={() => setOpenUpdate(true)}
            />
          </>
        )}
      </div>
    </MovieCardStyled>
  );
};

export default MovieCard;
