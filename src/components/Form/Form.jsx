import TagsInput from "../TagsInput/TagsInput";
import { useDispatch } from "react-redux";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { useState } from "react";
import { createMovie } from "../../features/movies/useApi";
import FormStyled from "./FormStyled";

const Form = () => {
  const dispatch = useDispatch();
  const [selectedTags, setSelectedTags] = useState([]);
  const [inputName, setInputName] = useState("");

  const addMovie = (event) => {
    event.preventDefault();
    const movie = {
      name: inputName,
      genres: selectedTags,
      watched: false,
    };
    dispatch(createMovie(movie));
    setInputName("");
  };

  return (
    <FormStyled onSubmit={addMovie} className="form">
      <div className="form-container">
        <Input
          onChange={(event) => setInputName(event.target.value)}
          value={inputName}
          name="name"
          placeholder="Titanic"
          type="text"
          required
          label={"Movie title"}
        />

        <TagsInput
          placeholder="Horror"
          selectedTags={selectedTags}
          setSelectedTags={setSelectedTags}
        />

        <Button type="submit" buttonText="Add movie" />
      </div>
    </FormStyled>
  );
};

export default Form;
