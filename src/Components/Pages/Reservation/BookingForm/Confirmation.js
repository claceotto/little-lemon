import Button from "../../../Button";

export default function Confirmation({
  firstName,
  numberOfGuests,
  date,
  email,
}) {
  return (
    <>
      <h1>You are are all set {firstName}!</h1>

      <h2>
        Your table for {numberOfGuests} person(s) is booked on {date}, and a
        confirmation email has been sent to {email}
      </h2>

      <Button
        btext={"Back to home page"}
        disabled={false}
        //onClick
      />
    </>
  );
}
