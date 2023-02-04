import { render, screen } from "@testing-library/react";
import Button from "./Button";
import userEvent from "@testing-library/user-event";
import { Wrapper } from "../../test-utils/Wrapper/Wrapper";

describe("Given a Button component", () => {
  describe("When instantiated with onClick", () => {
    test("Then it should perform action on click", async () => {
      const onClick = jest.fn();

      render(<Button onClick={onClick} />, { wrapper: Wrapper });

      const button = screen.getByRole("button");

      await userEvent.click(button);

      expect(button).toBeInTheDocument();
      expect(onClick).toHaveBeenCalled();
    });
  });
});
