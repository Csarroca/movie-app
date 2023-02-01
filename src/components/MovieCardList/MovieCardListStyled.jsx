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
`;

export default MovieCardListStyled;
