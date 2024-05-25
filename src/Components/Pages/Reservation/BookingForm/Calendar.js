import "./Calendar.css";
import { useState, useEffect } from "react";
import { DateCalendar } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { StyledEngineProvider } from "@mui/material/styles";

export default function Calendar() {
  const today = dayjs();
  const maxDay = dayjs().add(12, "month");
  const [cleared, setCleared] = useState(false);

  useEffect(() => {
    if (cleared) {
      const timeout = setTimeout(() => {
        setCleared(false);
      }, 1500);

      return () => clearTimeout(timeout);
    }
    return () => {};
  }, [cleared]);

  return (
    <StyledEngineProvider injectFirst>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar minDate={today} maxDate={maxDay} size={4} required />
      </LocalizationProvider>
    </StyledEngineProvider>
  );
}
