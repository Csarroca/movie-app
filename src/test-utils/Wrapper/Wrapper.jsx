import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { store } from "../../store/store";
import styles from "../../styles/styles";

export const Wrapper = ({ children }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={styles}>
        <BrowserRouter>{children}</BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
};
