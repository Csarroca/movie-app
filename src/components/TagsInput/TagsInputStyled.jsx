import styled from "styled-components";

const TagsInputStyled = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-weight: bold;

  .close {
    color: ${({ theme }) => theme.colors.brand.primary};
    border: none;
    background-color: unset;
    cursor: pointer;
  }

  .tag-item {
    color: ${({ theme }) => theme.colors.brand.primary};
  }
  input {
    all: unset;
    cursor: pointer;
    width: 200px;
    color: ${({ theme }) => theme.colors.brand.primary};

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

export default TagsInputStyled;
