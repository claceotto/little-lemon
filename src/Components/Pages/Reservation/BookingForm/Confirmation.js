export default function Confirmation({
  firstName,
  numberOfGuests,
  date,
  time,
  sitting,
  occasion,
  email,
}) {
  return (
    <div className="confirmation">
      <h1>You are are all set {firstName}!</h1>

      <h2>
        Your table for {numberOfGuests}{" "}
        {numberOfGuests > 1 ? "people" : "person"} is booked on {date}, at {time}, sitting{" "}
        {sitting}.
      </h2>
      <h2>
        {occasion !== "other"
          ? `We look forward to celebrate your ${occasion} with you! `
          : "We look forward seeing you! "}{" "}
      </h2>
      <h2>A confirmation email has been sent to {email}.</h2>
    </div>
  );
}
