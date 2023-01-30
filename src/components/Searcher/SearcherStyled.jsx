import styled from "styled-components";

const SearcherStyled = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  padding: 20px;

  .filter {
    &__input {
      color: ${({ theme }) => theme.colors.neutral.secundaryText};
      border: 1px solid rgba(0, 0, 0, 0.16);
      border-radius: 3px;
      padding: 7px;
      font-weight: lighter;
      font-size: 10px;
    }
  }
`;

export default SearcherStyled;
