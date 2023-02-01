import styled from "styled-components";

const InputStyled = styled.div`
  padding: 20px;
  font-weight: bold;
  width: 290px;

  .input-container {
    gap: 10px;
    display: flex;
    flex-direction: column;
    color: ${({ theme }) => theme.colors.brand.primary};
  }

  input {
    all: unset;
    cursor: pointer;
    padding: 20px;
    border: 1px solid rgba(0, 0, 0, 0.16);
    border-radius: 3px;
    font-size: 14px;
    font-weight: lighter;
  }

  input[type="text"]:focus {
    border: 2px solid ${({ theme }) => theme.colors.brand.primary};
    outline: none;
  }
`;

export default InputStyled;
