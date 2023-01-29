import styled from "styled-components";

const InputStyled = styled.div`
  padding: 20px;
  font-weight: bold;

  .input-container {
    gap: 10px;
    display: flex;
    flex-direction: column;
    width: 213px;
    color: ${({ theme }) => theme.colors.brand.primary};
  }

  input {
    all: unset;
    cursor: pointer;
    padding: 5px;
    border: 1px solid rgba(0, 0, 0, 0.16);
    border-radius: 3px;
    font-size: 10px;
    font-weight: lighter;
  }

  input[type="text"]:focus {
    border: 2px solid ${({ theme }) => theme.colors.brand.primary};
    outline: none;
  }
`;

export default InputStyled;
