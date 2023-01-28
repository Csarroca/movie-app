import styled from "styled-components";

const ButtonStyled = styled.button`
  align-self: center;
  width: 80px;
  background-color: ${({ theme }) => theme.colors.brand.primary};
  color: white;
  height: 25px;
  border-radius: 30px;
  cursor: pointer;
  border: none;
  outline: none;
  font-size: 0.6rem;

  :hover {
    background-color: ${({ theme }) => theme.colors.brand.secundary};
  }
`;

export default ButtonStyled;
