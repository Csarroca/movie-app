import Button from "../Button/Button";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import RadioGroupStyled from "./RadioGroupStyled";

const RadioGroup = () => {
  const genres = ["Romance", "Comedy", "Horror"];
  const navigate = useNavigate();
  const { genre } = useParams();
  const location = useLocation();

  const selecteedGenre =
    location.pathname !== "/" ? genre?.split("=")[1].toLowerCase() : "";

  const handleRadio = (event) => {
    const filteredTag = event.target.value;
    navigate(`/genre=${filteredTag.toLowerCase()}`);
  };

  return (
    <RadioGroupStyled>
      <h2 className="form-radio-group__title">Choose a genre </h2>
      <ul role="group" id="radio-group" className="form-radio-group">
        {genres.map((element) => {
          return (
            <li key={element}>
              <label>
                <input
                  onChange={handleRadio}
                  type="radio"
                  name="tag"
                  value={element}
                  checked={selecteedGenre === element.toLocaleLowerCase()}
                />
                {element}
              </label>
            </li>
          );
        })}
      </ul>
      <Button
        type="button"
        className="simple-button"
        buttonText="Reset"
        onClick={() => {
          navigate("/");
        }}
      />
    </RadioGroupStyled>
  );
};

export default RadioGroup;
