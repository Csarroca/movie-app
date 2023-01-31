import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import MovieCardList from "../../components/MovieCardList/MovieCardList";
import Loader from "../../components/Loader/Loader";
import RadioGroup from "../../components/RadioGroup/RadioGroup";

const FilteredPage = () => {
  const { genre } = useParams();
  const { movies, isLoading } = useSelector((state) => state.movies);

  const filteredList = movies.filter((movie) => {
    return movie.genres.includes(genre.toLowerCase());
  });

  return (
    <>
      <RadioGroup />

      {isLoading ? <Loader /> : <MovieCardList list={filteredList} />}
    </>
  );
};

export default FilteredPage;
