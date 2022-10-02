import { render, screen } from "@testing-library/react";
import { OnboardingCard } from "../../common/components/OnboardingCard";

const propMock = {
  correct: {
    title: "Some Card Title",
    description: "Some Card description",
  },
  uncorrect: {
    title: 2,
    description: false,
  },
};

describe("Component renders correctly", () => {
  test("with proper properties values & types", () => {
    render(
      <OnboardingCard
        title={propMock.correct.title}
        description={propMock.correct.description}
      />
    );
    const cardTitle = screen.getByRole("card_title");
    const cardDescription = screen.getByRole("card_desc");

    expect(cardTitle.textContent).toBe(propMock.correct.title);
    expect(cardDescription.textContent).toBe(propMock.correct.description);
  });
});
