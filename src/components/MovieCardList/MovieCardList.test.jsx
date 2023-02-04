import { render, screen } from "@testing-library/react";
import { Wrapper } from "../../test-utils/Wrapper/Wrapper";
import MovieCardList from "../MovieCardList/MovieCardList";

describe("Given a MovieCardList component", () => {
  describe("When it's rendered and the store gives a list of two movies", () => {
    test("Then it should show two Moviecards", () => {
      const movies = [
        {
          name: "test",
          id: 0,
          picture: "test avatar",
          genres: ["horror"],
          watched: false,
        },
        {
          name: "test2",
          id: 1,
          picture: "test2 avatar",
          genres: ["horror"],
          watched: false,
        },
      ];

      render(<MovieCardList list={movies} />, { wrapper: Wrapper });

      const names = screen.getAllByRole("heading");

      expect(names).toHaveLength(movies.length);
      expect(names[0].textContent).toBe(movies[0].name);
      expect(names[1].textContent).toBe(movies[1].name);
    });
  });
});
