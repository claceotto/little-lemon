import "./Reservation.css";
import ResBanner from "./ResBanner";
import ResNav from "./ResNav";
import BookingDetails from "./BookingDetails";
import { Route, Routes } from "react-router-dom";

export default function Reservations() {
  return (
    <>
      <ResBanner />
      <ResNav />
      <Routes>
        <Route
          path="/reservation/booking-details"
          element={<BookingDetails />}
        />
      </Routes>
    </>
  );
}
