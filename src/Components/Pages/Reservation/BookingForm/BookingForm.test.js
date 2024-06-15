import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";
import {
  initializeTimes,
  handleReservationTimeChange,
  dispatch,
  navigate,
} from "../Reservation";

test("Renders the BookingForm fields", () => {
  render(
    <BookingForm
      // I need to insert the actiual function here, instead of passing it times.
      availableTimes={["17", "18", "19", "20", "21"]}
      onReservationTimeChange={handleReservationTimeChange}
      onReservationDateChange={dispatch}
      navigate={navigate}
    />
  );
  const dateTitle = screen.getByText("When?");
  expect(dateTitle).toBeInTheDocument();
  const timeTitle = screen.getByText("What time?");
  expect(timeTitle).toBeInTheDocument();
  const dinnersTitle = screen.getByText("How many dinners?");
  expect(dinnersTitle).toBeInTheDocument();
  const sittingTitle = screen.getByText("Where would you like to sit?");
  expect(sittingTitle).toBeInTheDocument();
  const occationTitle = screen.getByText("Special ocasion?");
  expect(occationTitle).toBeInTheDocument();
  const requirementTitle = screen.getByText("Any special requirement?");
  expect(requirementTitle).toBeInTheDocument();
});
