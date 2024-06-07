import "./BookingForm.css";
import Button from "../../../../Components/Button";
import Calendar from "./Calendar";
import { useCallback, useState } from "react";
import dayjs from "dayjs";

export default function BookingForm() {
  const [reservationDate, setReservationDate] = useState(dayjs());
  const [reservationTime, setReservationTime] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [isMinGuestNumber, setIsMinGuestNumber] = useState(false);
  const [isMaxGuestNumber, setIsMaxGuestNumber] = useState(false);
  const [sittingPlace, setSittingPlace] = useState("");
  const [occasion, setOccasion] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const handleReservationDateChange = useCallback((newValue) => {
    // Why does this work??? That's what the MUI documentation had
    //but I don't know why it works!
    setReservationDate(newValue);
  }, []);

  const handleReservationTimeChange = useCallback((e) => {
    const target = e.currentTarget || e.target;
    setReservationTime(target.value);
  }, []);

  const handleGuestChange = useCallback((e) => {
    const target = e.currentTarget || e.target;
    setNumberOfGuests(Number(target.value));
    if (target.value <= 0) {
      setIsMinGuestNumber(true);
      setIsMaxGuestNumber(false);
    } else if (target.value >= 1 && target.value <= 10) {
      setIsMinGuestNumber(false);
      setIsMaxGuestNumber(false);
    } else {
      setIsMinGuestNumber(false);
      setIsMaxGuestNumber(true);
    }
  }, []);

  const handleMinusGuest = useCallback(() => {
    const minusGuest = numberOfGuests - 1;
    console.log(numberOfGuests);
    if (minusGuest <= 0) {
      setNumberOfGuests(0);
      setIsMinGuestNumber(true);
      setIsMaxGuestNumber(false);
    } else if (minusGuest >= 1 && minusGuest <= 10) {
      setNumberOfGuests(minusGuest);
      setIsMinGuestNumber(false);
      setIsMaxGuestNumber(false);
    } else {
      setNumberOfGuests(minusGuest);
      setIsMinGuestNumber(false);
      setIsMaxGuestNumber(true);
    }
  }, [numberOfGuests]);

  const handlePlusGuest = useCallback(() => {
    const plusGuest = numberOfGuests + 1;
    console.log(numberOfGuests);
    if (plusGuest >= 1 && plusGuest <= 10) {
      setNumberOfGuests(plusGuest);
      setIsMinGuestNumber(false);
      setIsMaxGuestNumber(false);
    } else {
      setNumberOfGuests(plusGuest);
      setIsMinGuestNumber(false);
      setIsMaxGuestNumber(true);
    }
  }, [numberOfGuests]);

  const handleSittingPlaceChange = useCallback((e) => {
    const target = e.currentTarget || e.target;
    setSittingPlace(target.value);
  }, []);

  const handleOccasionChange = useCallback((e) => {
    const target = e.currentTarget || e.target;
    setOccasion(target.value);
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
        <Calendar
          id={"res-date"}
          name={"res-date"}
          value={reservationDate}
          onChange={handleReservationDateChange}
          required
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
        required
      >
        <option value="">Please Select</option>
        <option value="17">17:00</option>
        <option value="18">18:00</option>
        <option value="19">19:00</option>
        <option value="20">20:00</option>
        <option value="21">21:00</option>
      </select>

      <span className="circle">3</span>
      <label htmlFor="guests" className="res-title">
        How many dinners?{" "}
      </label>

      <div className="styled-counter">
        <button
          type="button"
          className="number-counter-btn btn-left"
          onClick={handleMinusGuest}
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
          required
        />
        <button
          type="button"
          className="number-counter-btn btn-right"
          onClick={handlePlusGuest}
        >
          +
        </button>
      </div>
      {isMinGuestNumber ? (
        <p className="error">You must have at least 1 guest.</p>
      ) : null}
      {isMaxGuestNumber ? (
        <p className="error">
          Please call us for reservations for more then 10 guests.
        </p>
      ) : null}

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
            checked={sittingPlace === "outside"}
            onChange={handleSittingPlaceChange}
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
            checked={sittingPlace === "inside"}
            onChange={handleSittingPlaceChange}
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

      <select
        className={`drop-down ${!!occasion ? "has-value-selected" : ""}`}
        id="occasion"
        name="occasion"
        value={occasion}
        onChange={handleOccasionChange}
        required
      >
        <option value="">Please Select</option>
        <option value="birthday" className="birthday">
          Birthday
        </option>
        <option value="anniversary">Anniversary</option>
        <option value="engagement">Engagement</option>
        <option value="work party">Work party</option>
        <option value="other">Other</option>
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
        <Button
          btext={"Next"}
          disabled={isFormValid ? "disabled" : "notdisabled"}
        />
      </div>
    </form>
  );
}
