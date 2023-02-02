import styled from "styled-components";

const HomePageStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 800px) {
    .container {
      display: flex;
      flex-direction: row;
      align-items: baseline;
    }
  }
`;

export default HomePageStyled;
