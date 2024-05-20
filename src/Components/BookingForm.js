import "./BookingForm.css"
import Button from "./Button";

export default function BookingForm() {
  return (
    <form className="reservation">
      <div className="date">
        <div className="form-title">
          <span className="circle">1</span>
          <label for="res-date" className="res-title">When?</label>
        </div>
      <input type="date" id="res-date" />
      </div>
      <div className="time">
      <div className="form-title">
        <span className="circle">2</span>
        <label for="res-time" className="res-title">What time?</label>
      </div>
      <select id="res-time ">
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
        <label for="guests" className="res-title">How many dinners? </label>
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
        <label for="outside">Outside</label>
      </div>
      <div>
        <input type="radio" id="inside" name="sittingPlace" value="inside" />
        <label for="inside">Inside</label>
      </div>
      </div>
      <div className="ocasion">
      <div className="form-title">
         <span className="circle">5</span> 
         <label for="occasion" className="res-title">Special ocasion?</label>
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
        <label for="specialRequirements" className="res-title">Any special requirement?</label>
      </div>
      <textarea          
          id="specialRequirements"
          name="specialRequirements"
          rows="10"          
        />
        </div>
        <div className="nextbtn">
      <Button 
      btext={"Next"} />
      </div>
      <div className="backbtn">
      <Button 
      btext={"Back"} />
      </div>
    </form>
  );
}
