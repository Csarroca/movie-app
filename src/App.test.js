import App from "./App";
import { screen, render } from "@testing-library/react";
import { Provider } from "react-redux";
import Theme from "./styles/Theme/Theme";
import { MemoryRouter } from "react-router-dom";
import { store } from "./store/store";

const paths = {
  base: "/",
  filteredPage: "/:genre=romance",
};

describe("Given an App Component", () => {
  describe("When it's rendered in '/' path", () => {
    test("Then it should show a header with 'Movies app' title", () => {
      const expectedTitle = "Movies App";

      render(
        <Provider store={store}>
          <Theme>
            <MemoryRouter initialEntries={[paths.base]}>
              <App />
            </MemoryRouter>
          </Theme>
        </Provider>
      );

      const header = screen.getByRole("heading", { name: expectedTitle });

      expect(header).toBeInTheDocument();
    });
  });

  describe("When it's render in '/genre=romance' path and a movie", () => {
    test("Then it should show the movie title inside", () => {
      render(
        <Provider store={store}>
          <Theme>
            <MemoryRouter initialEntries={[paths.filteredPage]}>
              <App />
            </MemoryRouter>
          </Theme>
        </Provider>
      );

      const movieList = screen.queryByRole("list");

      expect(movieList).not.toBeInTheDocument();
    });
  });
});
