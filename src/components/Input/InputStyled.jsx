import styled from "styled-components";

const InputStyled = styled.div`
  padding: 20px;
  font-weight: bold;

  .input-container {
    gap: 10px;
    display: flex;
    flex-direction: column;
    width: 150px;
    color: ${({ theme }) => theme.colors.brand.primary};
  }

  input {
    all: unset;
    cursor: pointer;
    padding: 5px;
    border: 1px solid ${({ theme }) => theme.colors.neutral.secundaryText};
    border-radius: 5%;
    font-size: 10px;
    font-weight: lighter;
  }

  input[type="text"]:focus {
    border: 2px solid ${({ theme }) => theme.colors.brand.primary};
    outline: none;
  }
`;

export default InputStyled;
