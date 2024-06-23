import { render, fireEvent, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Calendar from "./Calendar";
import dayjs from "dayjs";

test("does not allow selecting a date in the past", () => {
  const handleChange = jest.fn();
  const { getByRole } = render(<Calendar name="test-calendar" id="test-calendar" value={null} onChange={handleChange} />);
  
  const today = dayjs();
  const yesterday = today.subtract(1, 'day').toDate();
  
  const input = screen.getByRole('textbox');
  
  // Simulate clicking on the date input and attempting to select a past date
  fireEvent.mouseDown(input);
  
  // Simulate selecting yesterday's date
  fireEvent.change(input, { target: { value: yesterday } });
  
  // Expect the change handler not to be called with a past date
  expect(handleChange).not.toHaveBeenCalled();
  
  // Expect the input value not to be set to a past date
  expect(input).not.toHaveValue(dayjs(yesterday).format("YYYY-MM-DD"));
});
