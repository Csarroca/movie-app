import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  justify-content: center;
  height: 80px;
  margin: 10px 5px 5px 20px;
  gap: 10px;
  align-items: center;

  .header-title {
    color: ${({ theme }) => theme.colors.brand.primary};
    font-size: 2rem;
  }
`;

export default HeaderStyled;
