import styled from "styled-components";

const ButtonStyled = styled.button`
  align-self: center;
  background-color: ${({ theme }) => theme.colors.brand.primary};
  color: white;
  border-radius: 30px;
  cursor: pointer;
  border: none;
  outline: none;
  font-size: 1rem;
  line-height: 1rem;
  height: 1.5rem;
  padding: 0px 15px;

  :hover {
    background-color: ${({ theme }) => theme.colors.brand.secundary};
  }
`;

export default ButtonStyled;
