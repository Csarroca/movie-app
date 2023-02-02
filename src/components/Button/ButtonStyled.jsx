import styled from "styled-components";

const ButtonStyled = styled.button`
  background-color: ${({ theme }) => theme.colors.brand.primary};
  color: white;
  border-radius: 30px;
  cursor: pointer;
  border: none;
  outline: none;
  font-size: 1rem;
  padding: 10px 15px;
`;

export default ButtonStyled;
