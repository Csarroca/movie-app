import { useState } from "react";
import TagsInputStyled from "./TagsInputStyled";

const TagsInput = ({ placeholder, selectedTags, setSelectedTags }) => {
  const [input, setInput] = useState("");

  const handleKeyDown = (event) => {
    if (event.key !== "Enter") return;
    const value = event.target.value;
    if (!value.trim().toLowerCase() || input.includes(value.toLowerCase()))
      return;
    setInput(value.trim().toLowerCase());
    setSelectedTags([...selectedTags, value.trim().toLowerCase()]);
    event.target.value = "";
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
          onKeyDown={handleKeyDown}
          type="text"
          placeholder={placeholder}
        />
      </label>
    </TagsInputStyled>
  );
};

export default TagsInput;
