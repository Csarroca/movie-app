import Header from "./Header";
import { screen, render } from "@testing-library/react";
import { Wrapper } from "../../test-utils/Wrapper/Wrapper";

describe("Given a Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should show an imagen with the alternative text 'Logo of Movies app' in the header", () => {
      const alternativeText = "Logo of Movies app";

      render(<Header />, { wrapper: Wrapper });

      const picture = screen.getByRole("img", {
        name: alternativeText,
      });

      expect(picture).toBeInTheDocument();
    });

    test("Then it should render a h1 with the text Movies App", () => {
      const titleContent = "Movies App";

      render(<Header />, { wrapper: Wrapper });

      const title = screen.getByText(titleContent);

      expect(title).toBeInTheDocument();
    });
  });
});
