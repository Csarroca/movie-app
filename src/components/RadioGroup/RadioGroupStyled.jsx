import styled from "styled-components";

const RadioGroupStyled = styled.div`
  padding: 1em;
  display: flex;
  flex-direction: column;
  border-radius: 25%;
  gap: 20px;
  padding: 40px;

  .simple-button {
    width: 107px;
    margin: 0 auto;
  }

  .form-radio-group {
    color: ${({ theme }) => theme.colors.brand.primary};
    display: flex;
    flex-direction: column;
    gap: 20px;

    &__title {
      font-size: 16px;
      color: ${({ theme }) => theme.colors.brand.primary};
    }
  }
`;

export default RadioGroupStyled;
