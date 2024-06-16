import { render, screen } from "@testing-library/react";
import Reservation, { updateTimes, initializeTimes } from "./Reservation";
import { onReservationDateChange } from "./BookingForm/BookingForm";

//Write a unit test for the initializeTimes function to validate that it
//returns the correct expected value.
test("if initializeTimes returns the correct expcted value", () => {
  const initialTimes = initializeTimes();
  expect(initialTimes).toEqual(["17", "18", "19", "20", "21"]);
});

// updateTimes.test.js
describe("updateTimes", () => {
  it('should return ["17"] when the new date day is 1', () => {
    const initialState = ["17", "18", "19", "20", "21"];
    const action = { type: "dateChange", newDate: { $D: 1 } };
    const result = updateTimes(initialState, action);
    expect(result).toEqual(["17"]);
  });

  it('should return ["17", "18", "19", "20", "21"] when the new date day is not 1', () => {
    const initialState = ["17", "18", "19", "20", "21"];
    const action = { type: "dateChange", newDate: { $D: 2 } };
    const result = updateTimes(initialState, action);
    expect(result).toEqual(["17", "18", "19", "20", "21"]);
  });

  it("should return the initial state for unknown action types", () => {
    const initialState = ["17", "18", "19", "20", "21"];
    const action = { type: "dateChange" };
    const result = updateTimes(initialState, action);
    expect(result).toEqual(initialState);
  });
});
