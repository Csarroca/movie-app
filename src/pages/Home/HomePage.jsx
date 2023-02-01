import { useState } from "react";
import { useSelector } from "react-redux";
import Searcher from "../../components/Searcher/Searcher";
import Form from "../../components/Form/Form";
import Loader from "../../components/Loader/Loader";
import MovieCardList from "../../components/MovieCardList/MovieCardList";
import RadioGroup from "../../components/RadioGroup/RadioGroup";

const HomePage = () => {
  const { movies, isLoading } = useSelector((state) => state.movies);
  const [search, setSearch] = useState("");

  const searcher = (e) => {
    setSearch(e.target.value);
  };

  const list = !search
    ? movies
    : movies.filter((movie) =>
        movie.name.toLowerCase().includes(search.toLocaleLowerCase())
      );
  return (
    <>
      <Form />
      <Searcher
        label={"Filter by movie name"}
        searcher={searcher}
        search={search}
        placeholder={"Example: Lord of Rings"}
      />
      <RadioGroup />

      {isLoading ? <Loader /> : <MovieCardList list={list} />}
    </>
  );
};

export default HomePage;
