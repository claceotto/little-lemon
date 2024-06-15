import { render, screen } from "@testing-library/react";
import ResBanner from "./ResBanner";

test("Renders the BookingForm Banner", () => {
  render(<ResBanner />);
  const headingElement = screen.getByText("Reservations");
  expect(headingElement).toBeInTheDocument();
  const subheadingElement = screen.getByText("at Little Lemon Isle of Man");
  expect(subheadingElement).toBeInTheDocument();
});
