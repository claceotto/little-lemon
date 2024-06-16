import { useNavigate } from "react-router-dom";

export default function Confirmation({
  firstName,
  numberOfGuests,
  date,
  sitting,
  occasion,
  email,
})

{

const navigate = useNavigate();

const handleHomeClick = ()=> {
  navigate("/")
}

  return (
    <div className="confirmation">
      <h1>You are are all set {firstName}!</h1>

      <h2>
        Your table for {numberOfGuests} {numberOfGuests > 1 ? "people" : "person"} is booked 
        on {date}, sitting {sitting}. 
        </h2>
        <h2>{occasion !== "other" ? `We look forward to celebrate your ${occasion} with you! ` : "We look forward seeing you! "} </h2>
        <h2>
        A confirmation email has been sent to {email}.
      </h2>
    </div>
  );
}
