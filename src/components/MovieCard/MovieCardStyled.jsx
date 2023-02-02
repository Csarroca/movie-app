import styled from "styled-components";

const MovieCardStyled = styled.article`
  background-color: ${({ theme }) => theme.colors.brand.tertiary};
  border-radius: 5%;
  max-width: 360px;

  .card-info {
    gap: 8px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    &__input-edit {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    &__title {
      margin-bottom: 8px;
      color: ${({ theme }) => theme.colors.brand.primary};
      text-transform: uppercase;
      text-align: center;
    }

    &__group {
      display: flex;
      gap: 20px;
      flex-direction: row;
      align-items: center;
    }

    &__tag {
      text-transform: capitalize;
      font-weight: bold;
    }

    &__genres {
      display: flex;
      flex-direction: column;
      max-width: 100%;
      gap: 20px;
      color: ${({ theme }) => theme.colors.brand.primary};
    }
  }

  .checkbox {
    box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.brand.secundary};

    &-container {
      display: flex;
      gap: 5px;
    }
  }

  .delete-button {
    all: unset;
    color: ${({ theme }) => theme.colors.brand.primary};
    font-size: 30px;
  }

  .save-button {
    all: unset;
    color: ${({ theme }) => theme.colors.brand.primary};
    font-size: 30px;
  }

  .card-info__button-container {
    display: flex;
    gap: 150px;
  }
`;

export default MovieCardStyled;
