import { useState } from "react";
import TagsInputStyled from "./TagsInputStyled";

const TagsInput = ({ placeholder, selectedTags, setSelectedTags }) => {
  const [input, setInput] = useState("");

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      if (
        !input.trim().toLowerCase() ||
        selectedTags.includes(input.trim().toLowerCase())
      ) {
        setInput("");
        return;
      }

      setSelectedTags([...selectedTags, input.trim().toLowerCase()]);
      setInput("");
    }
  };

  const handleOnChange = (event) => {
    const value = event.target.value;
    setInput(value);
  };

  const removeTag = (index) => {
    setSelectedTags(selectedTags.filter((el, i) => i !== index));
  };

  return (
    <TagsInputStyled className="tags-input-container">
      {selectedTags.map((tag, index) => (
        <div className="tag-item" key={index}>
          <span className="text">{tag}</span>
          <span className="close" onClick={() => removeTag(index)}>
            &times;
          </span>
        </div>
      ))}
      <label className="input-container">
        Movies genres
        <input
          value={input}
          onChange={handleOnChange}
          onKeyDown={handleKeyDown}
          type="text"
          placeholder={placeholder}
        />
      </label>
    </TagsInputStyled>
  );
};

export default TagsInput;
