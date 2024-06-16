import "./Reservation.css";
import { useCallback, useReducer } from "react";
import ResBanner from "./ResBanner";
import BookingForm from "./BookingForm/BookingForm";

export const updateTimes = (state, action) => {
  // console.log(action);
  if (action.type === "dateChange") {
    if (!!action.newDate && action.newDate.$D === 1) {
      return ["17"];
    }
    return ["17", "18", "19", "20", "21"];
  }
};

export const initializeTimes = () => {
  return ["17", "18", "19", "20", "21"];
};

export default function Reservation({ navigate }) {
  // const [availableTimes] = useState(["17", "18", "19", "20", "21"]);
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  const handleReservationTimeChange = useCallback((reservationTime) => {
    // TODO: Something. Maybe it will block off the time from the available times..?
  }, []);

  return (
    <>
      <ResBanner />
      <BookingForm
        availableTimes={availableTimes}
        onReservationTimeChange={handleReservationTimeChange}
        onReservationDateChange={dispatch}
        navigate={navigate}
      />
    </>
  );
}
