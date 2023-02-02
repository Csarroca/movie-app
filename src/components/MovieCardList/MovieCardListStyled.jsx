import styled from "styled-components";

const MovieCardListStyled = styled.div`
  padding: 15px;
  .cards-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    &__card {
      width: 100%;
    }
  }

  @media (min-width: 800px) {
    .cards-list {
      display: flex;
      flex-direction: row;
      gap: 50px;
      flex-wrap: wrap;

      &__card {
        width: auto;
      }
    }
  }
`;

export default MovieCardListStyled;
