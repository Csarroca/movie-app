import { useState } from "react";
import TagsInputStyled from "./TagsInputStyled";

function TagsInput() {
  const [tags, setTags] = useState([]);

  function handleKeyDown(event) {
    if (event.key !== "Enter") return;
    const value = event.target.value;
    if (!value.trim()) return;
    setTags([...tags, value]);
    event.target.value = "";
  }

  function removeTag(index) {
    setTags(tags.filter((el, i) => i !== index));
  }

  return (
    <TagsInputStyled className="tags-input-container">
      {tags.map((tag, index) => (
        <div className="tag-item" key={index}>
          <span className="text">{tag}</span>
          <span className="close" onClick={() => removeTag(index)}>
            &times;
          </span>
        </div>
      ))}
      <input
        onKeyDown={handleKeyDown}
        type="text"
        placeholder="Type some movie genre"
      />
    </TagsInputStyled>
  );
}

export default TagsInput;
