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

  describe("When it receives a valid movie", () => {
    test("Then it should show the correct data introduced", () => {
      render(<MovieCard movie={mock} />, { wrapper: Wrapper });

      expect(mock).toBeInstanceOf(Object);
      expect(mock).toHaveProperty("name");
      expect(typeof mock.name).toBe("string");
      expect(mock).toHaveProperty("id");
      expect(typeof mock.id).toBe("number");
      expect(mock).toHaveProperty("picture");
      expect(typeof mock.picture).toBe("string");
      expect(mock).toHaveProperty("genres");
      expect(mock.genres).toBeInstanceOf(Array);
      expect(mock).toHaveProperty("watched");
      expect(typeof mock.watched).toBe("boolean");
      expect(mock.name).not.toBe("lalala");
      expect(mock).not.toHaveProperty("createDate");
    });
  });

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

  describe("if users clicks delete icon", () => {
    test("Then it should call delete function", async () => {
      render(<MovieCard movie={mock} />, { wrapper: Wrapper });

      const deleteButton = screen.getByTestId("delete-button");
      await userEvent.click(deleteButton);

      expect(mockAction).toHaveBeenNthCalledWith(1, mock.id);
    });
  });
});
