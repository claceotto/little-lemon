import "./BookingForm.css";
import Button from "../../../../Components/Button";
import Calendar from "./Calendar";
import Time from "./Time";

export default function BookingForm() {
  return (
    <form className="reservation">
      <div className="date">
        <div className="form-title">
          <span className="circle">1</span>
          <label htmlFor="res-date" className="res-title">
            When?
          </label>
        </div>
        <Calendar />
      </div>
      <div className="time">
        <div className="form-title">
          <span className="circle">2</span>
          <label htmlFor="res-time" className="res-title">
            What time?
          </label>
        </div>
        <label for="time">Choose a pet:</label>

        <select name="pets" id="pet-select">
          <option value="">--Please choose an option--</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="hamster">Hamster</option>
          <option value="parrot">Parrot</option>
          <option value="spider">Spider</option>
          <option value="goldfish">Goldfish</option>
        </select>
        <Time />
        <select name="res-time" id="res-time" required>
          <option>17:00</option>
          <option>18:00</option>
          <option>19:00</option>
          <option>20:00</option>
          <option>21:00</option>
          <option>22:00</option>
        </select>
      </div>
      <div className="guests">
        <div className="form-title">
          <span className="circle">3</span>
          <label for="guests" className="res-title">
            How many dinners?{" "}
          </label>
        </div>
        <input type="number" placeholder="1" min="1" max="10" id="guests" />
      </div>
      <div className="sitting">
        <div className="form-title">
          <span className="circle">4</span>
          <p className="res-title">Where would you like to sit?</p>
        </div>
        <div>
          <input type="radio" id="html" name="sittingPlace" value="outside" />
          <label htmlFor="outside">Outside</label>
        </div>
        <div>
          <input type="radio" id="inside" name="sittingPlace" value="inside" />
          <label htmlFor="inside">Inside</label>
        </div>
      </div>
      <div className="ocasion">
        <div className="form-title">
          <span className="circle">5</span>
          <label htmlFor="occasion" className="res-title">
            Special ocasion?
          </label>
        </div>
        <select id="occasion">
          <option>Birthday</option>
          <option>Anniversary</option>
          <option>Engagement</option>
          <option>Work party</option>
          <option>Other</option>
        </select>
      </div>
      <div className="special-req">
        <div className="form-title">
          <span className="circle">6</span>
          <label htmlFor="specialRequirements" className="res-title">
            Any special requirement?
          </label>
        </div>
        <textarea
          id="specialRequirements"
          name="specialRequirements"
          rows="10"
        />
      </div>
      <div className="nextbtn">
        <Button btext={"Next"} />
      </div>
      <div className="backbtn">
        <Button btext={"Back"} />
      </div>
    </form>
  );
}
