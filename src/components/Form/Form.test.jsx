import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Wrapper } from "../../test-utils/Wrapper/Wrapper";
import { addMovieApi } from "../../services/movies";
import Form from "./Form";

jest.mock("../../services/movies", () => ({
  addMovieApi: jest.fn(),
}));

describe("Given a Form component", () => {
  describe("When its instantiaded", () => {
    test("Then it show a movie and genre inputs and a create button", () => {
      render(<Form />, { wrapper: Wrapper });

      const registerForm = [
        screen.getByText("Movie title"),
        screen.getByText("Movies genres"),
        screen.getByRole("button", { name: "Add movie" }),
      ];
      registerForm.forEach((element) => expect(element).toBeInTheDocument());
    });
  });

  describe("When a user fills every input", () => {
    test("Then every input should have what the users filled inside", async () => {
      const movieName = "movieName";
      const movieGenre = "movieGenre";
      render(<Form />, { wrapper: Wrapper });

      const nameInput = screen.getByLabelText("Movie title");
      const genreInput = screen.getByLabelText("Movies genres");

      await userEvent.type(nameInput, movieName);
      await userEvent.type(genreInput, movieGenre);

      expect(nameInput.value).toBe(movieName);
      expect(genreInput.value).toBe(movieGenre);
    });
  });
  describe("When all inputs are fullfiled and the user clicks on the submit button", () => {
    test("Then the login function will be called", async () => {
      const movieName = "movieName";
      const movieGenre = "movieGenre";
      render(<Form />, { wrapper: Wrapper });

      const nameInput = screen.getByLabelText("Movie title");
      const genreInput = screen.getByLabelText("Movies genres");

      const submitButton = screen.getByRole("button", { name: "Add movie" });

      await userEvent.type(nameInput, movieName);
      await userEvent.type(genreInput, movieGenre);
      await userEvent.click(submitButton);

      expect(addMovieApi).toHaveBeenCalled();
    });
  });
});
