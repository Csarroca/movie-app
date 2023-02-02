import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  height: 80px;
  margin: 10px 5px 5px 20px;
  gap: 10px;
  align-items: center;

  .header-title {
    color: ${({ theme }) => theme.colors.brand.primary};
    font-size: 2re;
  }

  @media (min-width: 800px) {
    justify-content: center;
    gap: 100px;
  }
`;

export default HeaderStyled;
