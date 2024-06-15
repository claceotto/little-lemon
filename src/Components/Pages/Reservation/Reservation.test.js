import { render, screen } from "@testing-library/react";
import Reservation from "./Reservation";
import { updateTimes } from "./Reservation";
import { onReservationDateChange } from "./BookingForm/BookingForm";

//Write a unit test for the initializeTimes function to validate that it
//returns the correct expected value.

test("initializeTimes sets the correct initial times", () => {
  render(<Reservation navigate />);

  // Check that the initial times are rendered correctly
  const time17 = screen.getByText("17:00");
  expect(time17).toBeInTheDocument();
  const time18 = screen.getByText("18:00");
  expect(time18).toBeInTheDocument();
  const time19 = screen.getByText("19:00");
  expect(time19).toBeInTheDocument();
  const time20 = screen.getByText("20:00");
  expect(time20).toBeInTheDocument();
  const time21 = screen.getByText("20:00");
  expect(time21).toBeInTheDocument();
});

// updateTimes.test.js

describe("updateTimes", () => {
  it('should return ["17"] when the new date day is 1', () => {
    const initialState = ["17", "18", "19", "20", "21"];
    const action = { type: "dateChange", newDate: { $D: 1 } };
    const result = updateTimes(initialState, onReservationDateChange);
    expect(result).toEqual(["17"]);
  });

  it('should return ["17", "18", "19", "20", "21"] when the new date day is not 1', () => {
    const initialState = ["17", "18", "19", "20", "21"];
    const action = { type: "dateChange", newDate: { $D: 2 } };
    const result = updateTimes(initialState, onReservationDateChange);
    expect(result).toEqual(["17", "18", "19", "20", "21"]);
  });

  it("should return the initial state for unknown action types", () => {
    const initialState = ["17", "18", "19", "20", "21"];
    const action = { type: "dateChange" };
    const result = updateTimes(initialState, onReservationDateChange);
    expect(result).toEqual(initialState);
  });
});
