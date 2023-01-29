import MovieCard from "../MovieCard/MovieCard";
import MovieCardListStyled from "./MovieCardListStyled";

const MovieCardList = ({ list }) => {
  return (
    <MovieCardListStyled>
      <ul className="cards-list">
        {list.map((movie) => (
          <li key={movie.id} className="cards-list__card">
            <MovieCard movie={movie} />
          </li>
        ))}
      </ul>
    </MovieCardListStyled>
  );
};

export default MovieCardList;
