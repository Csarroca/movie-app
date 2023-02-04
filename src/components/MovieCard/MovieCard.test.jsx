import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MovieCard from "./MovieCard";
import { Wrapper } from "../../test-utils/Wrapper/Wrapper";

const mockAction = jest.fn();
jest.mock("../../store/features/movies/useApi", () => () => ({
  deleteMovie: mockAction,
}));

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
  describe("if users clicks delete icon", () => {
    test("Then it should call delete function", async () => {
      render(<MovieCard movie={mock} />, { wrapper: Wrapper });

      const deleteButton = screen.getByTestId("delete-button");
      await userEvent.click(deleteButton);

      debugger;

      expect(mockAction).toHaveBeenNthCalledWith(1, mock.id);
    });
  });
});
