import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { AppLogo } from "../../common/components/AppLogo";

describe("Component renders correctly", () => {
  render(<AppLogo />);
  test("Component renders proper text", () => {
    const logoContainer = screen.getByRole("logo_container");
    const logoTopText = screen.getByRole("logo_prime_text");
    const logoBottomText = screen.getByRole("logo_secondary_text");

    expect(logoTopText.textContent).toBe("ARCRFTS");
    expect(logoBottomText.textContent).toBe(
      "civil aviation fleet encyclopedia"
    );

    expect(logoContainer).toBeInTheDocument();
  });

  test("Component dont render a wrong text value", () => {
    render(<AppLogo />);

    const logoTopText = screen.getByRole("logo_prime_text");
    const logoBottomText = screen.getByRole("logo_secondary_text");

    expect(logoTopText.textContent).not.toBe("ardev");
    expect(logoBottomText.textContent).not.toBe(
      "civil aviation flddaeet encyclopedia"
    );
  });
});
