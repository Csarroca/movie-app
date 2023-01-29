import { useState } from "react";
import { useSelector } from "react-redux";
import Searcher from "../../components/Filter/Searcher";
import Form from "../../components/Form/Form";
import MovieCardList from "../../components/MovieCardList/MovieCardList";

const HomePage = () => {
  const { movies } = useSelector((state) => state.movies);
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
        label={"filtra por nombre de peli"}
        searcher={searcher}
        search={search}
      />
      <MovieCardList list={list} />
    </>
  );
};

export default HomePage;
