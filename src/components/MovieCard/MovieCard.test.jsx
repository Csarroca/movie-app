import { render, screen } from "@testing-library/react";
import MovieCard from "./MovieCard";
import { Wrapper } from "../../test-utils/Wrapper/Wrapper";

describe("Given a MovieCard component", () => {
  const mock = {
    name: "test",
    id: 0,
    picture: "test avatar",
    genres: ["horror"],
    watched: false,
  };
  describe("When it receives a Movie with picture 'test-picture' and 'test avatar' as alternative text", () => {
    test("Then it should show the received picture with the received alternative text", () => {
      render(<MovieCard movie={mock} />, { wrapper: Wrapper });
      const picture = screen.getByRole("img", {
        name: mock.picture,
      });

      expect(picture).toBeInTheDocument();
      expect(picture.alt).toContain(mock.picture);
    });
  });

  describe("When it receives a name 'test'", () => {
    test("Then it should show a heading with 'test' inside", () => {
      render(<MovieCard movie={mock} />, { wrapper: Wrapper });
      const nameHeading = screen.getByRole("heading", {
        name: mock.name,
      });
      expect(nameHeading).toBeInTheDocument();
    });
  });
});
