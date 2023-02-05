import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import MovieCardList from "../../components/MovieCardList/MovieCardList";
import Loader from "../../components/Loader/Loader";
import RadioGroup from "../../components/RadioGroup/RadioGroup";
import { useState } from "react";

const FilteredPage = () => {
  const { genre } = useParams();
  const { movies } = useSelector((state) => state.movies);
  const [isLoading, setIsLoading] = useState(false);

  const filteredList = movies.filter((movie) => {
    return movie.genres.includes(genre.split("=")[1].toLowerCase());
  });

  return (
    <>
      <RadioGroup setIsLoading={setIsLoading} isLoading={isLoading} />

      {isLoading ? <Loader /> : <MovieCardList list={filteredList} />}
    </>
  );
};

export default FilteredPage;
