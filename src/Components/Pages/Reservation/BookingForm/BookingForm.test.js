import { render, screen, fireEvent } from "@testing-library/react";
import dayjs from "dayjs";
import BookingForm from "./BookingForm";
import Calendar from "./Calendar";
import {
  handleReservationTimeChange,
  dispatch,
  navigate,
  handleReserveTimeValidation,
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

// BookingForm.test.js

const mockNavigate = jest.fn();
const mockOnReservationTimeChange = jest.fn();
const mockOnReservationDateChange = jest.fn();
const mockOnSubmit = jest.fn().mockReturnValue(true);
const mockHandleClick = jest.fn();

describe("BookingForm Component", () => {
  beforeEach(() => {
    render(
      <BookingForm
        availableTimes={["17:00", "18:00", "19:00", "20:00", "21:00"]}
        onReservationTimeChange={mockOnReservationTimeChange}
        onReservationDateChange={mockOnReservationDateChange}
        onSubmit={mockOnSubmit}
        navigate={mockNavigate}
      />
    );
  });

  test("should show validation error when required fields are empty", () => {
    const nextButton = screen.getByTestId("circle-2");
    fireEvent.click(nextButton);

    expect(screen.getByText("Please select the time.")).toBeInTheDocument();
  });

  test("should update state correctly when fields are filled in", () => {
    const timeSelect = screen.getByTestId("res-time");
    fireEvent.change(timeSelect, { target: { value: "18:00" } });

    const guestsInput = screen.getByTestId("guest-number");
    fireEvent.change(guestsInput, { target: { value: "3" } });

    expect(timeSelect.value).toBe("18:00");
    expect(guestsInput.value).toBe("3");
  });

  test("should proceed to next section when all required fields are valid", () => {
    const timeSelect = screen.getByTestId("res-time");
    fireEvent.change(timeSelect, { target: { value: "18:00" } });

    const guestsInput = screen.getByTestId("guest-number");
    fireEvent.change(guestsInput, { target: { value: "3" } });

    const nextButton = screen.getByTestId("nextbtn");
    fireEvent.click(nextButton);

    expect(
      screen.queryByText("Please select the time.")
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText("You must have at least 1 guest.")
    ).not.toBeInTheDocument();
  });

  test("should show validation error for section 2 required fields", () => {
    // Move to section 2
    const timeSelect = screen.getByTestId("res-time");
    fireEvent.change(timeSelect, { target: { value: "18:00" } });

    const guestsInput = screen.getByTestId("guest-number");
    fireEvent.change(guestsInput, { target: { value: "3" } });

    const nextButton = screen.getByTestId("nextbtn");
    fireEvent.click(nextButton);

    //Leave required section 2 fileds blank
    const blankFirstNameInput = screen.getByTestId("first-name");
    fireEvent.change(timeSelect, { target: { value: "" } });

    const blankLastNameInput = screen.getByTestId("last-name");
    fireEvent.change(timeSelect, { target: { value: "" } });

    const blankEmailInput = screen.getByTestId("email");
    fireEvent.change(timeSelect, { target: { value: "" } });

    const blankTelephoneInput = screen.getByTestId("telephone");
    fireEvent.change(timeSelect, { target: { value: "" } });

    fireEvent.click(nextButton);

    // Try to submit section 2 with empty fields
    const submitButton = screen.getByText("3");
    fireEvent.click(submitButton);

    expect(screen.getByText("Please insert first name.")).toBeInTheDocument();
    expect(screen.getByText("Please insert last name.")).toBeInTheDocument();
    expect(
      screen.getByText("Please provide valid email address.")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Please provide a valid telephone number.")
    ).toBeInTheDocument();
  });

  test("should submit form when all fields are valid", () => {
    // Move to section 2
    const timeSelect = screen.getByTestId("res-time");
    fireEvent.change(timeSelect, { target: { value: "18:00" } });

    const guestsInput = screen.getByTestId("guest-number");
    fireEvent.change(guestsInput, { target: { value: "3" } });

    const nextButton = screen.getByTestId("nextbtn");
    fireEvent.click(nextButton);

    // Fill section 2 fields
    const firstNameInput = screen.getByTestId("first-name");
    fireEvent.change(firstNameInput, { target: { value: "Hazel" } });

    const lastNameInput = screen.getByTestId("last-name");
    fireEvent.change(lastNameInput, { target: { value: "Nut" } });

    const emailInput = screen.getByTestId("email");
    fireEvent.change(emailInput, {
      target: { value: "hazel.nut@nutella.com" },
    });

    const telephoneInput = screen.getByTestId("telephone");
    fireEvent.change(telephoneInput, { target: { value: "07624-000000" } });

    const submitButton = screen.getByTestId("nextbtn");
    fireEvent.click(submitButton);

    expect(mockOnSubmit).toHaveBeenCalled();
  });
});
