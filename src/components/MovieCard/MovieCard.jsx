import { useState } from "react";
import { useDispatch } from "react-redux";
import useApi from "../../store/features/movies/useApi";
import Button from "../Button/Button";
import Input from "../Input/Input";
import MovieCardStyled from "./MovieCardStyled";
import { FaTimesCircle, FaEdit } from "react-icons/fa";

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
              buttonText={<FaEdit className="card-delete" />}
              type="button"
              onClick={handleEdit}
            />
          </div>
        ) : (
          <>
            <h2 className="card-info__title">{name}</h2>
            <div className="card-info__group">
              <img
                alt={`${name} avatar`}
                src="/images/movie.png"
                className="card-info__image"
                height={150}
                widht={150}
              />

              <ul className="card-info__genres">
                {genres.map((genre) => {
                  return (
                    <li className="card-info__tag" key={genre}>
                      {genre}
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="checkbox-container">
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
                Watched
              </label>
            </div>
            <div className="card-info__button-container">
              <Button
                className="save-button"
                buttonText={<FaEdit className="card-delete" />}
                type="button"
                onClick={() => setOpenUpdate(true)}
              />

              <Button
                className="delete-button"
                buttonText={<FaTimesCircle className="card-delete" />}
                type="button"
                onClick={handleDelete}
              />
            </div>
          </>
        )}
      </div>
    </MovieCardStyled>
  );
};

export default MovieCard;
