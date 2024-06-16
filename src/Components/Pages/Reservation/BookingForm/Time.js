import { StyledEngineProvider } from "@mui/material/styles";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { StaticDateTimePicker } from "@mui/x-date-pickers/StaticDateTimePicker";
import dayjs from "dayjs";

export default function Time() {
  const minTime = dayjs().hour(17);
  const maxTime = dayjs().hour(21);
  // const openingHour = dayjs().startOf("hour");

  return (
    <StyledEngineProvider>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <TimePicker
          label="pick a time"
          ampm={false}
          timeSteps={{
            hours: 1,
            minutes: 60,
          }}
          minTime={minTime}
          maxTime={maxTime}
        />
        {/* <StaticDateTimePicker
          ampm={false}
          disablePast={true}
          minDate={today}
          maxDate={maxDay}
          // minTime={}
        /> */}
      </LocalizationProvider>
    </StyledEngineProvider>
  );
}
