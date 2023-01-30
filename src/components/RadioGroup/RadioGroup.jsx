import Button from "../Button/Button";
import RadioInput from "../RadioInput/RadioInput";
import { useNavigate } from "react-router-dom";

const RadioGroup = () => {
  const genres = ["Romance", "Comedy", "Horror"];

  const navigate = useNavigate();

  return (
    <div className="radio-group-container">
      <div className="radio-buttons-container">
        {genres.map((genre) => (
          <RadioInput
            key={genre}
            value={genre}
            text={genre}
            isSelected={genre.toLocaleLowerCase() === "romance"}
            onChange={() => {
              navigate(`/genre=${genre.toLocaleLowerCase()}`);
            }}
            id={genre}
            name={genre}
          />
        ))}
      </div>

      <Button
        type="button"
        className="simple-button"
        buttonText="Reset"
        handleClick={() => {
          navigate("/");
        }}
      />
    </div>
  );
};

export default RadioGroup;
