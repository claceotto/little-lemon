import "./Reservation.css";
import ResNav from "./ResNav";
import ResBanner from "./ResBanner";
import BookingForm from "./BookingForm/BookingForm";

export default function Reservation() {
  return (
    <>
      <ResBanner />
      <ResNav />
      <BookingForm />
    </>
  );
}
