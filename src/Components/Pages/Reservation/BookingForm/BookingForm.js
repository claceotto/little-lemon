import "./BookingForm.css";
import Button from "../../../../Components/Button";
// import Calendar from "./Calendar";
import { useState, useEffect } from "react";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DateCalendar } from "@mui/x-date-pickers";
import { StyledEngineProvider } from "@mui/material/styles";

export default function BookingForm() {
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
        <form className="reservation">
          <div className="date">
            <div className="form-title">
              <span className="circle">1</span>
              <label htmlFor="res-date" className="res-title">
                When?
              </label>
            </div>
            <div className="calendar">
              <DateCalendar
                minDate={today}
                maxDate={maxDay}
                size={4}
                required
              />
            </div>
            {/* <Calendar /> */}
          </div>
          <div className="time">
            <div className="form-title">
              <span className="circle">2</span>
              <label htmlFor="res-time" className="res-title">
                What time?
              </label>
            </div>
            <select name="res-time" id="res-time" required>
              <option>17:00</option>
              <option>18:00</option>
              <option>19:00</option>
              <option>20:00</option>
              <option>21:00</option>
              <option>22:00</option>
            </select>
          </div>
          <div className="guests">
            <div className="form-title">
              <span className="circle">3</span>
              <label for="guests" className="res-title">
                How many dinners?{" "}
              </label>
            </div>
            <input type="number" placeholder="1" min="1" max="10" id="guests" />
          </div>
          <div className="sitting">
            <div className="form-title">
              <span className="circle">4</span>
              <p className="res-title">Where would you like to sit?</p>
            </div>
            <div>
              <input
                type="radio"
                id="html"
                name="sittingPlace"
                value="outside"
              />
              <label htmlFor="outside">Outside</label>
            </div>
            <div>
              <input
                type="radio"
                id="inside"
                name="sittingPlace"
                value="inside"
              />
              <label htmlFor="inside">Inside</label>
            </div>
          </div>
          <div className="ocasion">
            <div className="form-title">
              <span className="circle">5</span>
              <label htmlFor="occasion" className="res-title">
                Special ocasion?
              </label>
            </div>
            <select id="occasion">
              <option>Birthday</option>
              <option>Anniversary</option>
              <option>Engagement</option>
              <option>Work party</option>
              <option>Other</option>
            </select>
          </div>
          <div className="special-req">
            <div className="form-title">
              <span className="circle">6</span>
              <label htmlFor="specialRequirements" className="res-title">
                Any special requirement?
              </label>
            </div>
            <textarea
              id="specialRequirements"
              name="specialRequirements"
              rows="10"
            />
          </div>
          <div className="nextbtn">
            <Button btext={"Next"} />
          </div>
          <div className="backbtn">
            <Button btext={"Back"} />
          </div>
        </form>
      </LocalizationProvider>
    </StyledEngineProvider>
  );
}
