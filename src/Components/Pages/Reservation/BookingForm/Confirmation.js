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
      <p className="confirmation-title">You are are all set {firstName}!</p>

      <p className="confirmation-text">
        Your table for {numberOfGuests}{" "}
        {numberOfGuests > 1 ? "people" : "person"} is booked on {date}, at{" "}
        {time}, sitting {sitting}.
      </p>
      <p className="confirmation-text">
        {occasion !== ""
          ? `We look forward to celebrate your ${occasion} with you! `
          : "We look forward seeing you! "}
      </p>
      <p className="confirmation-text">
        A confirmation email has been sent to {email}.
      </p>
    </div>
  );
}
