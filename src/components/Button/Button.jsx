import ButtonStyled from "./ButtonStyled";

const Button = ({ buttonText, onClick, type, isDisabled, className }) => {
  return (
    <ButtonStyled
      className={className}
      type={type}
      disabled={isDisabled}
      onClick={onClick}
    >
      {buttonText}
    </ButtonStyled>
  );
};

export default Button;
