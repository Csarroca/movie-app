import styled from "styled-components";

const FormStyled = styled.form`
  padding: 10px;

  .form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .form-container__label {
    color: ${({ theme }) => theme.colors.brand.primary};
    font-weight: bold;
  }
`;

export default FormStyled;
