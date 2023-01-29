import styled from "styled-components";

const MovieCardStyled = styled.article`
  padding-top: 2em;

  .card-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: ${({ theme }) => theme.boxShadow.regular};
    width: 200px;
  }

  .delete-button {
    margin: 10px;
  }

  .title {
    color: ${({ theme }) => theme.colors.brand.primary};
  }
`;

export default MovieCardStyled;
