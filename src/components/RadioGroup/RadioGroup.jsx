import Button from "../Button/Button";
import { useNavigate, useParams } from "react-router-dom";

const RadioGroup = () => {
  const genres = ["Romance", "Comedy", "Horror"];
  const navigate = useNavigate();
  const { genre } = useParams();

  const handleRadio = (event) => {
    const filteredTag = event.target.value;
    navigate(`/genre/${filteredTag.toLowerCase()}`);
  };

  return (
    <div className="radio-container">
      <label htmlFor="radio-group">Choose a genre </label>
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
                  checked={genre === element.toLocaleLowerCase()}
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
    </div>
  );
};

export default RadioGroup;
