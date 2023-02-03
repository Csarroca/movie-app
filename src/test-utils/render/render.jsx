import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import styles from "../../styles/styles";

export const Wrapper = ({ children }) => {
  return (
    <ThemeProvider theme={styles}>
      <BrowserRouter>{children}</BrowserRouter>
    </ThemeProvider>
  );
};
