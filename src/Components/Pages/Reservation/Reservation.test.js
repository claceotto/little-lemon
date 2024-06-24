import { initializeTimes, updateTimes } from "./Reservation";
import dayjs from "dayjs";

// Faking fetch API for testing purposes.
window.fetchAPI = (_date) => {
  return ["17:00", "17:30", "18:00", "18:30", "19:30", "20:00"];
};

//Write a unit test for the initializeTimes function to validate that it
//returns the correct expected value.
test("initializeTimes returns a non-empty array", () => {
  const initialTimes = initializeTimes();
  expect(initialTimes).toEqual([
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:30",
    "20:00",
  ]); // Check that the array returned expected value
  expect(Array.isArray(initialTimes)).toBe(true); // Ensure it's an array
});

test("updateTimes returns a non-empty array on dateChange action", () => {
  const updatedTimes = updateTimes([], {
    type: "dateChange",
    newDate: dayjs(),
  });
  expect(updatedTimes).toEqual([
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:30",
    "20:00",
  ]); // Check that the array returned expected value
  expect(Array.isArray(updatedTimes)).toBe(true); // Ensure it's an array
});
