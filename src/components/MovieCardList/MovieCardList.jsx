import { useSelector } from "react-redux";
import MovieCard from "../MovieCard/MovieCard";
import MovieCardListStyled from "./MovieCardListStyled";

const MovieCardList = () => {
  const { movies } = useSelector((state) => state.movies);

  return (
    <MovieCardListStyled>
      <ul className="cards-list">
        {movies.map((movie) => (
          <li key={movie.id} className="cards-list__card">
            <MovieCard movie={movie} />
          </li>
        ))}
      </ul>
    </MovieCardListStyled>
  );
};

export default MovieCardList;
