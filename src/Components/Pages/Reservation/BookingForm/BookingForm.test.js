import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";
import Calendar from "./Calendar";
import {
  handleReservationTimeChange,
  dispatch,
  navigate,
} from "../Reservation";
import dayjs from "dayjs";

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

describe("Calendar Component", () => {
  test("should not allow selecting a past date", () => {
    const { container } = render(
      <Calendar
        id={"res-date"}
        name={"res-date"}
        value={dayjs()}
        onChange={jest.fn()}
        required
      />
    );

    // Get today's date and calculate a past date
    const today = dayjs().hour(0).minute(0).second(0).millisecond(0);
    const pastDate = today.subtract(1, "day");
    const pastTimestamp = pastDate.valueOf(); // Get the timestamp of the past date
    const todayTimestamp = today.valueOf(); // Get the timestamp of the past date

    // Find all buttons with the role "button"
    // const allDayButtons = container.querySelectorAll("MuiPickersDay-root");

    const allDayButtons = Array.from(
      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      container.querySelectorAll(".MuiPickersDay-root")
    );

    // This gets the data-timestamp attribute from a button: allDayButtons[0].getAttribute("data-timestamp");

    const pastButtons = allDayButtons.filter((b) => {
      const buttonTimestamp = b.getAttribute("data-timestamp");
      if (!buttonTimestamp) {
        return false;
      }

      return Number(buttonTimestamp) < todayTimestamp;
    });

    pastButtons.forEach((b) => expect(b).toBeDisabled());

    const futureButtons = allDayButtons.filter((b) => {
      const buttonTimestamp = b.getAttribute("data-timestamp");
      if (!buttonTimestamp) {
        return false;
      }

      return Number(buttonTimestamp) >= todayTimestamp;
    });

    futureButtons.forEach((b) => expect(b).toBeEnabled());

    // Find the button with the specific data-timestamp attribute
    const pastDateButton = allDayButtons.find(
      (button) =>
        button.getAttribute("data-timestamp") === pastTimestamp.toString()
    );

    // Expect that the past date button is disabled
    expect(pastDateButton).toBeDisabled();
  });
});
