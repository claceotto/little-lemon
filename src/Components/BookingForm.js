export default function BookingForm() {
  return (
    <form>
      <label for="res-date">When?</label>
      <input type="date" id="res-date" />
      <label for="res-time">What time?</label>
      <select id="res-time ">
        <option>17:00</option>
        <option>18:00</option>
        <option>19:00</option>
        <option>20:00</option>
        <option>21:00</option>
        <option>22:00</option>
      </select>
      <label for="guests">How many dinners? </label>
      <input type="number" placeholder="1" min="1" max="10" id="guests" />
      <p>Where would you like to sit?</p>
      <input type="radio" id="html" name="sittingPlace" value="outside" />
      <label for="outside">Outside</label>
      <br />
      <input type="radio" id="inside" name="sittingPlace" value="inside" />
      <label for="inside">Inside</label>

      <label for="occasion">Special Ocasion?</label>
      <select id="occasion">
        <option>Birthday</option>
        <option>Anniversary</option>
        <option>Engagement</option>
        <option>Work party</option>
        <option>Other</option>
        <label for="specialRequirements">Any Special Requirement?</label>
        <input
          type="text"
          id="specialRequirements"
          name="specialRequirements"
        />
      </select>
      <input type="submit" value="Make Your reservation" />
    </form>
  );
}
