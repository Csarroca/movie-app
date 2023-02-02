import TagsInput from "../TagsInput/TagsInput";
import { useDispatch } from "react-redux";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { useState } from "react";
import useApi from "../../features/movies/useApi";
import FormStyled from "./FormStyled";

const Form = () => {
  const dispatch = useDispatch();
  const [selectedTags, setSelectedTags] = useState([]);
  const [inputName, setInputName] = useState("");

  const { createMovie } = useApi();

  const addMovie = (event) => {
    event.preventDefault();
    const movie = {
      name: inputName,
      genres: selectedTags,
      watched: false,
    };
    dispatch(createMovie(movie));
    setInputName("");
    setSelectedTags([]);
  };

  return (
    <FormStyled onSubmit={addMovie} className="form">
      <Input
        onChange={(event) => setInputName(event.target.value)}
        value={inputName}
        name="name"
        placeholder="Example: Titanic
          "
        type="text"
        required
        label={"Movie title"}
      />

      <TagsInput
        placeholder="Example: Drama"
        selectedTags={selectedTags}
        setSelectedTags={setSelectedTags}
        required
      />

      <Button type="submit" buttonText="Add movie" className="button-add" />
    </FormStyled>
  );
};

export default Form;
