import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import MovieCardList from "../../components/MovieCardList/MovieCardList";
import Loader from "../../components/Loader/Loader";
import RadioGroup from "../../components/RadioGroup/RadioGroup";
import { useEffect, useState } from "react";

const FilteredPage = () => {
  const { genre } = useParams();
  const { movies } = useSelector((state) => state.movies);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  const filteredList = movies.filter((movie) => {
    return movie.genres.includes(genre.split("=")[1].toLowerCase());
  });

  return (
    <>
      <RadioGroup />

      {isLoading ? <Loader /> : <MovieCardList list={filteredList} />}
    </>
  );
};

export default FilteredPage;
