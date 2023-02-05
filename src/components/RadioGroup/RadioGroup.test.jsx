import { render, screen } from "@testing-library/react";
import { Wrapper } from "../../test-utils/Wrapper/Wrapper";
import userEvent from "@testing-library/user-event";
import RadioGroup from "./RadioGroup";

describe("Given a RadioGroup component", () => {
  describe("When it's instanciated", () => {
    test("Then genres must be unchecked", () => {
      render(<RadioGroup />, { wrapper: Wrapper });

      const labelRadio = screen.getByLabelText("Horror");

      expect(labelRadio).not.toBeChecked();
    });
  });

  describe("If user clicks on a  Horror genre", () => {
    test("Then it shouldn't be empty", async () => {
      render(<RadioGroup />, { wrapper: Wrapper });

      const labelRadio = screen.getByLabelText("Horror");

      await userEvent.click(labelRadio);

      expect(labelRadio.value).not.toBe("");
    });
  });
});
