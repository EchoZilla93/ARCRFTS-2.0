import { render, screen, fireEvent } from "@testing-library/react";
import { AppButton } from "../../common/components/AppButton";

describe("Component renders correctly", () => {
  render(<AppButton title="click" onClickHandler={() => 20} active />);
  test("correct title name and onclickHandler result", () => {
    const btn = screen.getByRole("button");

    expect(btn.textContent).toBe("click");
    expect(btn.textContent).not.toBe("Pressy");
    expect(fireEvent.click(btn)).toBeTruthy();
    expect(fireEvent.click(btn)).not.toBeFalsy();
  });
});
