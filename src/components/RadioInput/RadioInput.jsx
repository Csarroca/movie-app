const RadioInput = ({
  value,
  text,
  isSelected,
  onChange,
  required,
  id,
  name,
}) => (
  <div className="radio-container">
    <input
      className="radio-container__input"
      id={id}
      type="radio"
      onChange={onChange}
      value={value}
      name={name}
      checked={isSelected}
      required={required}
      isSelected={isSelected}
    />
    <label className="radio-container__label" htmlFor={id}>
      {text}
    </label>
  </div>
);

export default RadioInput;
