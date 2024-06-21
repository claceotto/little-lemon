import "./Reservation.css";
import { useCallback, useReducer, useState } from "react";
import ResBanner from "./ResBanner";
import BookingForm from "./BookingForm/BookingForm";
import { faBullseye } from "@fortawesome/free-solid-svg-icons/faBullseye";

/* global seededRandom, fetchAPI, submitAPI */

export const updateTimes = (state, action) => {
  if (action.type === "dateChange") {
    if (!!action.newDate) {
      return fetchAPI(action.newDate.toDate());
    }
    return fetchAPI(new Date());
  }
};

export const initializeTimes = () => {
  // Returns something in this sort of format:
  // ['17:00', '17:30', '18:00', '18:30', '19:30', '20:00', '20:30', '21:30', '22:00', '22:30', '23:00', '23:30']
  return fetchAPI(new Date());
};

export default function Reservation({ navigate }) {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
  const handleReservationTimeChange = useCallback((reservationTime) => {
    // TODO: Something. Maybe it will block off the time from the available times..?
  }, []);
  

  const handleSubmit = (e, formData) => {
    e.preventDefault();
    
    if (!!submitAPI(formData) === true) {
      return true;
    } else {return false}
  };

  return (
    <>
      <ResBanner />
      <BookingForm
        availableTimes={availableTimes}
        onReservationTimeChange={handleReservationTimeChange}
        onReservationDateChange={dispatch}
        onSubmit={handleSubmit}
        navigate={navigate}
      />
    </>
  );
}
