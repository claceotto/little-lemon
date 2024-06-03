import "./BookingForm.css";
import Button from "../../../../Components/Button";
import Calendar from "./Calendar";
import { useCallback, useState } from "react";
import dayjs from "dayjs";

export default function BookingForm() {
  const [reservationTime, setReservationTime] = useState("");
  const [reservationDate, setReservationDate] = useState(dayjs());
  const [numberOfGuests, setNumberOfGuests] = useState(1);

  const handleReservationDateChange = useCallback((e) => {
    const target = e.currentTarget || e.target;
    setReservationDate(target.value);
  }, []);

  const handleReservationTimeChange = useCallback((e) => {
    const target = e.currentTarget || e.target;
    setReservationTime(target.value);
  }, []);

  const handleGuestChange = useCallback((e) => {
    const target = e.currentTarget || e.target;
    setNumberOfGuests(target.value);
  }, []);

  const handlePlusGuest = useCallback((numberOfGuests) => {
    const updatedGuests = numberOfGuests + 1;
    setNumberOfGuests(updatedGuests);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Reservation made");
    // Change this to the confirmation page
  };

  return (
    <form className="reservation" onSubmit={handleSubmit}>
      <span className="circle">1</span>
      <label htmlFor="res-date" className="res-title">
        When?
      </label>
      <div className="content">
        {/* Not sure if this is going to work. Need to look at documenation for the calendar. */}
        <Calendar
          id={"res-date"}
          name={"res-date"}
          value={reservationDate}
          onChange={handleReservationDateChange}
        />
      </div>
      <span className="circle">2</span>
      <label htmlFor="res-time" className="res-title">
        What time?
      </label>

      <select
        className={`drop-down ${!!reservationTime ? "has-value-selected" : ""}`}
        id="res-time"
        name="res-time"
        value={reservationTime}
        onChange={handleReservationTimeChange}
      >
        <option value="">Please Select</option>
        <option value="17">17:00</option>
        <option value="18">18:00</option>
        <option value="19">19:00</option>
        <option value="20">20:00</option>
        <option value="21">21:00</option>
      </select>

      {/* When adding form control to "guests add funtion to the buttons to add or substract guests" */}

      <span className="circle">3</span>
      <label htmlFor="guests" className="res-title">
        How many dinners?{" "}
      </label>

      <div className="styled-counter">
        <button
          type="button"
          className="number-counter-btn btn-left"
          onClick={handlePlusGuest}
        >
          -
        </button>
        <input
          type="number"
          className="number-counter"
          id="guests"
          name="guests"
          placeholder={numberOfGuests}
          value={numberOfGuests}
          onChange={handleGuestChange}
        />
        <button className="number-counter-btn btn-right">+</button>
      </div>

      <span className="circle">4</span>
      <legend className="res-title">Where would you like to sit?</legend>
      <div className="content">
        <div className="radio-container">
          <input
            type="radio"
            id="outside"
            name="sittingPlace"
            value="outside"
            className="radio"
            required
          />
          <label htmlFor="outside" className="label">
            Outside
          </label>
        </div>
        <div className="radio-container">
          <input
            type="radio"
            id="inside"
            name="sittingPlace"
            value="inside"
            className="radio"
          />
          <label htmlFor="inside" className="label">
            Inside
          </label>
        </div>
      </div>

      <span className="circle">5</span>
      <label htmlFor="occasion" className="res-title">
        Special ocasion?
      </label>

      <select id="occasion" className="drop-down">
        <option>Birthday</option>
        <option>Anniversary</option>
        <option>Engagement</option>
        <option>Work party</option>
        <option>Other</option>
      </select>

      <span className="circle">6</span>
      <label htmlFor="specialRequirements" className="res-title">
        Any special requirement?
      </label>

      <textarea
        id="specialRequirements"
        name="specialRequirements"
        rows="10"
        className="text-area"
      />

      <div className="backbtn">
        <Button btext={"Back"} />
      </div>
      <div className="nextbtn">
        <Button btext={"Next"} />
      </div>
    </form>
  );
}
