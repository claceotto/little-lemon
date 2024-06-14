import "./Reservation.css";
import { useReducer } from "react";
import ResBanner from "./ResBanner";
import BookingForm from "./BookingForm/BookingForm";

const updateTimes  = (state, action) => {
  if (action.type === "dateChange") return ["17", "18", "19", "20", "21"]
  
}
export default function Reservation() {
  
const initializeTimes = () => {
    return ["17", "18", "19", "20", "21"]
  }

  // const [availableTimes] = useState(["17", "18", "19", "20", "21"]);
  const [state, dispatch] = useReducer(initializeTimes, updateTimes);

  return (
    <>
      <ResBanner />
      <BookingForm 
      availableTimes={availableTimes}/>
    </>
  );
}
