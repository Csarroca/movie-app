import InputStyled from "./InputStyled";

const Input = ({
  className,
  placeholder = "",
  type = "text",
  required,
  onChange,
  value,
  label,
}) => {
  return (
    <InputStyled>
      <label className="input-container">
        {label}
        <input
          value={value}
          className={className}
          placeholder={placeholder}
          type={type}
          required={required}
          onChange={onChange}
        />
      </label>
    </InputStyled>
  );
};

export default Input;
