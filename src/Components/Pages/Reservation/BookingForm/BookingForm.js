import "./BookingForm.css";
import Button from "../../../../Components/Button";
import Calendar from "./Calendar";
import { useCallback, useState, useEffect } from "react";
import dayjs from "dayjs";
import ResNav from "../ResNav";
import Confirmation from "./Confirmation";
/* global seededRandom, fetchAPI, submitAPI */

//This can be improved by creating one object which will contain all the values
//from the form and one object with all the validation for the form.
export default function BookingForm({
  availableTimes,
  onReservationTimeChange,
  onReservationDateChange,
  onSubmit,
  navigate,
}) {
  const [reservationDate, setReservationDate] = useState(dayjs());
  const [reservationTime, setReservationTime] = useState("");
  const [isTimeValid, setIsTimeValid] = useState(true);
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [isMinGuestNumber, setIsMinGuestNumber] = useState(false);
  const [isMaxGuestNumber, setIsMaxGuestNumber] = useState(false);
  const [sittingPlace, setSittingPlace] = useState("inside");
  const [occasion, setOccasion] = useState("");
  const [isPartOneValid, setIsPartOneValid] = useState(false);
  const [section, setSection] = useState(1);
  const [firstName, setFirstName] = useState("");
  const [isfirstNameValid, setIsFirstNameValid] = useState(true);
  const [lastName, setLastName] = useState("");
  const [isLastNameValid, setIsLastNameValid] = useState(true);
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [telephone, setTelephone] = useState("");
  const [isTelephoneValid, setIsTelephoneValid] = useState(true);
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [isPartTwoValid, setIsPartTwoValid] = useState(false);
  // const navigate = useNavigate();

  // const [isUser, setIsUser] = useState(false);
  const [showLogInError, setShowLogInError] = useState(false);
  //consider setting up gobal state for sections...it might make the
  //navigation and next button control simpler?

  //To do:
  // Instead of having multiple constants for form control, amalgamete this into object
  //Look if it's possible to improve telephone number input

  useEffect(() => {
    if (
      reservationTime !== "" &&
      numberOfGuests >= 1 &&
      numberOfGuests <= 10
    ) 
    {
      setIsPartOneValid(true);
    } else {
      setIsPartOneValid(false);
    }
  }, [reservationTime, numberOfGuests]);

  useEffect(() => {
    if (
      firstName !== "" &&
      lastName !== "" &&
      email !== "" &&
      telephone !== ""
    ) {
      setIsPartTwoValid(true);
    } else {
      setIsPartTwoValid(false);
    }
  }, [firstName, lastName, email, telephone]);

  const handleHomeClick = () => {
    navigate("/");
  };

  const handleReservationDateChange = useCallback(
    (newValue) => {
      // Why does this work??? That's what the MUI documentation had
      //but I don't know why it works!
      setReservationDate(newValue);
      onReservationDateChange({ type: "dateChange", newDate: newValue });
    },
    [onReservationDateChange]
  );

  const handleReservationTimeChange = useCallback(
    (e) => {
      const target = e.currentTarget || e.target;
      setReservationTime(target.value);
      onReservationTimeChange(target.value);
    },
    [onReservationTimeChange]
  );

  const handleReserveTimeValidation = useCallback(
    (e) => {
      if (reservationTime === "") {
        setIsTimeValid(false);
      } else {
        setIsTimeValid(true);
      }
    },
    [reservationTime]
  );

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

  const handlePartOneValidation = useCallback(() => {
    if (reservationTime === "") {
      setIsTimeValid(false);
    }
    if (numberOfGuests < 1) {
      setIsMinGuestNumber(true);
    }
    if (numberOfGuests > 10) {
      setIsMaxGuestNumber(true);
    }

  }, [reservationTime, numberOfGuests]);

  const handlePartTwoValidation = useCallback(() => {
    if (firstName === "") {
      setIsFirstNameValid(false);
    }
    if (lastName === "") {
      setIsLastNameValid(false);
    }
    if (email === "") {
      setIsEmailValid(false);
    }
    if (telephone === "") {
      setIsTelephoneValid(false);
    }
  }, [firstName, lastName, email, telephone]);

  const handleSubmit = useCallback((e) => {
   const isSubmitted = onSubmit(e, { 
    date: reservationDate, 
    time: reservationTime, 
    dinners: numberOfGuests, 
    sitting: sittingPlace, 
    occasion: occasion, 
    firstName: firstName, 
    lastName: lastName, 
    email: email, 
    telephone: telephone, } )

    if (!!isSubmitted === true) {
      setSection(3);
    }
  }, [
    reservationDate, 
    reservationTime, 
    numberOfGuests, 
    sittingPlace, 
    occasion,
    firstName,
    lastName,
    email,
    telephone,
    onSubmit,
  ] );

  const handleNextClick = () => {
    setSection(section + 1);
  };

  const handleBackClick = () => {
    if (section > 1) setSection(section - 1);
    else navigate("/");
  };

  const handleCircleNav = (number) => {
    setSection(number);
  };

  //Section 2
  const handleFirstNameChange = useCallback((e) => {
    const target = e.currentTarget || e.target;
    setFirstName(target.value);
  }, []);

  const handleFirstNameValidation = useCallback(
    (e) => {
      if (firstName !== "") {
        setIsFirstNameValid(true);
      } else {
        setIsFirstNameValid(false);
      }
    },
    [firstName]
  );

  const handleLastNameChange = useCallback((e) => {
    const target = e.currentTarget || e.target;
    setLastName(target.value);
  }, []);

  const handleLastNameValidation = useCallback(
    (e) => {
      if (lastName !== "") {
        setIsLastNameValid(true);
      } else {
        setIsLastNameValid(false);
      }
    },
    [lastName]
  );

  const handleEmailChange = useCallback((e) => {
    const target = e.currentTarget || e.target;
    setEmail(target.value);
  }, []);

  const handleEmailValidation = useCallback(
    (e) => {
      if (email !== "") {
        setIsEmailValid(true);
      } else {
        setIsEmailValid(false);
      }
    },
    [email]
  );

  const handleTelephoneChange = useCallback((e) => {
    const target = e.currentTarget || e.target;
    setTelephone(target.value);
  }, []);

  const handleTelephoneValidation = useCallback(
    (e) => {
      if (telephone !== "") {
        setIsTelephoneValid(true);
      } else {
        setIsTelephoneValid(false);
      }
    },
    [telephone]
  );

  //section 2 login
  const handleInputEmail = useCallback((e) => {
    const target = e.currentTarget || e.target;
    setInputEmail(target.value);
  }, []);

  const handleInputPassword = useCallback((e) => {
    const target = e.currentTarget || e.target;
    setInputPassword(target.value);
  }, []);

  const handleLogin = (e) => {
    const users = [
      {
        firstName: "Clarisse",
        lastName: "Ceotto",
        email: "clatimponi@gmail.com",
        password: "1234",
        telephone: "07624-111111",
      },
      {
        firstName: "Felipe",
        lastName: "Ceotto",
        email: "ceottake@gmail.com",
        password: "1234",
        telephone: "07624-222222",
      },
    ];

    const userFound = users.find((user) => {
      return inputEmail === user.email && inputPassword === user.password;
    });

    setShowLogInError(!userFound);

    if (userFound !== undefined) {
      setFirstName(userFound.firstName);
      setLastName(userFound.lastName);
      setEmail(userFound.email);
      setTelephone(userFound.telephone);
      // handleNextClick();
      handleSubmit(e);
    }
  };

  return (
    <>
      <ResNav
        isPartOneValid={isPartOneValid}
        isPartTwoValid={isPartTwoValid}
        partOneValidation={handlePartOneValidation}
        partTwoValidation={handlePartTwoValidation}
        section={section}
        handleCircleNav={handleCircleNav}
      />
      <form className="reservation" onSubmit={handleSubmit}>
        {section === 1 ? (
          <>
            <div className="span-container">
              <span className="circle">1</span>
            </div>
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
            <div className="span-container">
              <span className="circle">2</span>
            </div>
            <label htmlFor="res-time" className="res-title">
              What time?
            </label>

            <select
              className={`drop-down ${
                !!reservationTime ? "has-value-selected" : ""
              }`}
              id="res-time"
              name="res-time"
              value={reservationTime}
              onChange={handleReservationTimeChange}
              onBlur={handleReserveTimeValidation}
              required
            >
              <option value="">Please Select</option>
              {availableTimes.map((time, index) => {
                return (
                  <option key={index} value={time}>
                    {time}
                  </option>
                );
              })}
            </select>
            {!isTimeValid ? (
              <p className="error">Please select the time.</p>
            ) : null}

            <div className="span-container">
              <span className="circle">3</span>
            </div>
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

            <div className="span-container">
              <span className="circle">4</span>
            </div>
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
                  checked={sittingPlace === "inside"}
                  onChange={handleSittingPlaceChange}
                />
                <label htmlFor="inside" className="label">
                  Inside
                </label>
              </div>
            </div>

            <div className="span-container">
              <span className="circle">5</span>
            </div>
            <label htmlFor="occasion" className="res-title">
              Special ocasion?
            </label>

            <select
              className={`drop-down ${!!occasion ? "has-value-selected" : ""}`}
              id="occasion"
              name="occasion"
              value={occasion}
              onChange={handleOccasionChange}
            >
              <option value="">Please Select</option>
              <option value="birthday">Birthday</option>
              <option value="anniversary">Anniversary</option>
              <option value="engagement">Engagement</option>
              <option value="work party">Work party</option>
            </select>

            <div className="span-container">
              <span className="circle">6</span>
            </div>
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
              <Button
                btext={"Back"}
                type={"button"}
                disabled={false}
                handleClick={handleBackClick}
              />
            </div>
            <div className="nextbtn">
              <Button
                btext={"Next"}
                type={"button"}
                disabled={!isPartOneValid}
                handleClick={handleNextClick}
              />
            </div>
          </>
        ) : null}

        {section === 2 ? (
          // <div className="section-2-container">
          <>
            <div className="section-2-title">
              <h1 className="res-title">Tell us about you</h1>
            </div>
            <div className="log-in">
              <h1 className="res-title">Already registered?</h1>
              <h3>Sign in</h3>
              {showLogInError ? (
                <p className="error">
                  Please provide valid email and password.
                </p>
              ) : null}
              <label htmlFor="user-email">E-mail:</label>
              <input
                className="styled-input"
                type="email"
                id="user-email"
                name="user-email"
                value={inputEmail}
                onChange={handleInputEmail}
              />
              <label htmlFor="password">Passowrd:</label>
              <input
                className="styled-input"
                type="password"
                id="password"
                name="password"
                value={inputPassword}
                onChange={handleInputPassword}
              />
              <div className="btn-container-left">
                <Button
                  btext={"Back"}
                  type={"button"}
                  disabled={false}
                  handleClick={handleBackClick}
                />
                <Button
                  btext={"Log in"}
                  type={"button"}
                  disabled={false}
                  handleClick={handleLogin}
                />
              </div>
            </div>

            <div className="guest">
              <h1 className="res-title">Don't have an account?</h1>
              <h3>
                Enter your details to get started or if you prefer to reserve
                without registering.
              </h3>
              <label htmlFor="first-name">First name:</label>
              <input
                className="styled-input"
                type="text"
                id="first-name"
                name="first-name"
                value={firstName}
                onChange={handleFirstNameChange}
                onBlur={handleFirstNameValidation}
                required
              />
              {!isfirstNameValid ? (
                <p className="error">Please insert first name.</p>
              ) : null}
              <label htmlFor="last-name">Last name:</label>
              <input
                className="styled-input"
                type="text"
                id="last-name"
                name="last-name"
                value={lastName}
                onChange={handleLastNameChange}
                onBlur={handleLastNameValidation}
                required
              />
              {!isLastNameValid ? (
                <p className="error">Please insert last name.</p>
              ) : null}
              <label htmlFor="email">E-mail:</label>
              <input
                className="styled-input"
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
                onBlur={handleEmailValidation}
                required
              />
              {!isEmailValid ? (
                <p className="error">Please provide valid email address.</p>
              ) : null}
              <label htmlFor="telephone">Telephone:</label>
              <input
                className="styled-input"
                type="tel"
                pattern="[0-9]{5}-[0-9]{6}"
                id="telephone"
                name="telephone"
                placeholder="ex: 07624-000000"
                value={telephone}
                onChange={handleTelephoneChange}
                onBlur={handleTelephoneValidation}
              />
              {!isTelephoneValid ? (
                <p className="error">
                  Please provide a valid telephone number.
                </p>
              ) : null}
              <small>
                We will only contact you if necessary regarding your reservation
              </small>
            </div>
            <div className="btn-container-right">
              <Button
                btext={"Back"}
                type={"button"}
                disabled={false}
                handleClick={handleBackClick}
              />
              <Button
                btext={"Next"}
                type={"submit"}
                disabled={!isPartTwoValid}
              />
            </div>
          </>
        ) : null}
      </form>
      {section === 3 ? (
        <div className="confirmation">
          <Confirmation
            firstName={firstName}
            numberOfGuests={numberOfGuests}
            date={dayjs(reservationDate).format("DD/MM/YYYY")}
            time={reservationTime}
            sitting={sittingPlace}
            occasion={occasion}
            email={email}
          />
          <Button
            btext={"Back to home page"}
            disabled={false}
            handleClick={handleHomeClick}
          />
        </div>
      ) : null}
    </>
  );
}
