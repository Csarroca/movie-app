import styled from "styled-components";

const TagsInputStyled = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-weight: bold;
  width: 290px;

  .close {
    color: ${({ theme }) => theme.colors.brand.primary};
    border: none;
    background-color: unset;
    cursor: pointer;
    margin-left: 10px;
  }

  .text {
    font-weight: lighter;
  }
  input {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.brand.primary};
    padding: 20px;
    border: 1px solid rgba(0, 0, 0, 0.16);
    border-radius: 5%;
    font-size: 14px;
    font-weight: lighter;
    width: 100%;
  }

  input[type="text"]:focus {
    border: 2px solid ${({ theme }) => theme.colors.brand.primary};
    outline: none;
  }

  .input-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    color: ${({ theme }) => theme.colors.brand.primary};
  }
`;

export default TagsInputStyled;
