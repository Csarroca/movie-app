import ButtonStyled from "./ButtonStyled";

const Button = ({ buttonText, onClick, type, className }) => {
  return (
    <ButtonStyled className={className} type={type} onClick={onClick}>
      {buttonText}
    </ButtonStyled>
  );
};

export default Button;
