import styled from "styled-components";

const RadioGroupStyled = styled.div`
  background-color: ${({ theme }) => theme.colors.brand.primary};
  padding: 1em;
  display: flex;
  flex-direction: column;
  border-radius: 25%;
  gap: 20px;
  align-items: center;
  align-self: center;

  .simple-button {
    background-color: white;
    color: ${({ theme }) => theme.colors.brand.primary};
    font-weight: bold;
  }

  .form-radio-group {
    color: white;
  }

  .form-radio-group__title {
    color: white;
  }
`;

export default RadioGroupStyled;
